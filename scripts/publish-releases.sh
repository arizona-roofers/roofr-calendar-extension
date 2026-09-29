#!/usr/bin/env bash
# Publishes a signed build to the PUBLIC releases repo, served by GitHub Pages:
#   https://arizona-roofers.github.io/roofr-assist-releases/
# The source repo is private (it holds Dollars and Callers, which carries customer call data), so Chrome's
# updater (manifest update_url -> updates.xml) and the in-extension update check (update/manifest.json)
# read ONLY from here. Only built artifacts go in this repo: never source, never tests.
#
# Usage (CI): RELEASES_DEPLOY_KEY=<ssh private key> scripts/publish-releases.sh X.Y.Z
# Expects releases/roofr-calendar-scraper.crx (from build-crx.cjs) and update/manifest.json.
set -euo pipefail

VERSION="${1:?usage: publish-releases.sh X.Y.Z}"
REPO="${RELEASES_REPO:-git@github.com:arizona-roofers/roofr-assist-releases.git}"
BASE="https://arizona-roofers.github.io/roofr-assist-releases"
APPID="fkldnfkfppeicfcgmlnpknfkmnfkaabo"
KEEP=5   # older CRXs stay downloadable for rollback; the rest are pruned

: "${RELEASES_DEPLOY_KEY:?RELEASES_DEPLOY_KEY secret is empty}"
[ -f releases/roofr-calendar-scraper.crx ] || { echo "::error::no CRX at releases/roofr-calendar-scraper.crx"; exit 1; }

KEYFILE="$(mktemp)"; WORK="$(mktemp -d)"
trap 'rm -rf "$KEYFILE" "$WORK"' EXIT
printf '%s\n' "$RELEASES_DEPLOY_KEY" > "$KEYFILE"; chmod 600 "$KEYFILE"
export GIT_SSH_COMMAND="ssh -i $KEYFILE -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

# First publish ever: the repo is empty and has no main branch yet.
git clone --quiet --depth 1 --branch main "$REPO" "$WORK/site" 2>/dev/null || git clone --quiet "$REPO" "$WORK/site"
SITE="$WORK/site"
mkdir -p "$SITE/crx" "$SITE/update"
cp releases/roofr-calendar-scraper.crx "$SITE/crx/roofr-assist-$VERSION.crx"

# Never advertise an older version than the one already live: two queued CI runs can finish out of order,
# and Chrome won't downgrade anyway — it would just stop seeing updates.
LIVE="$(sed -n "s/.*<updatecheck[^>]*version='\([0-9.]*\)'.*/\1/p" "$SITE/updates.xml" 2>/dev/null || true)"
if [ -n "$LIVE" ] && [ "$(printf '%s\n%s\n' "$LIVE" "$VERSION" | sort -V | tail -1)" != "$VERSION" ]; then
  echo "Live version $LIVE is newer than $VERSION: publishing the CRX only, leaving updates.xml alone."
else
  cat > "$SITE/updates.xml" <<EOF
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='$APPID'>
    <updatecheck codebase='$BASE/crx/roofr-assist-$VERSION.crx' version='$VERSION' />
  </app>
</gupdate>
EOF
  VERSION="$VERSION" BASE="$BASE" node -e '
    const fs = require("fs");
    const m = JSON.parse(fs.readFileSync("update/manifest.json", "utf8"));
    m.version = process.env.VERSION;
    m.download_url = `${process.env.BASE}/crx/roofr-assist-${process.env.VERSION}.crx`;
    delete m.release_notes_url;   // release notes live in the private repo now
    fs.writeFileSync(process.argv[1], JSON.stringify(m, null, 2) + "\n");
  ' "$SITE/update/manifest.json"
fi

# Prune to the newest $KEEP CRXs.
ls -1 "$SITE/crx"/roofr-assist-*.crx | sort -V | head -n -"$KEEP" | xargs -r rm -f
touch "$SITE/.nojekyll"
cat > "$SITE/README.md" <<'EOF'
# Roofr Assist releases

Built, signed extension packages only. Chrome reads `updates.xml` from here to auto-update the
force-installed Roofr Assist extension. Source lives in a private repo. Every push is a force-pushed
single commit; there is no history here on purpose.
EOF

# One orphan commit, force-pushed: the repo holds only the current files, so it never grows.
cd "$SITE"
git checkout --quiet --orphan publish
git add -A
git -c user.name="roofr-assist-ci" -c user.email="ci@arizonaroofers.com" commit --quiet -m "Roofr Assist v$VERSION"
git push --quiet --force origin publish:main
echo "Published v$VERSION -> $BASE/updates.xml"
