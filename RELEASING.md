# Shipping an update (the standard)

The team's Chrome auto-updates itself. You push a version; everyone gets it within a few hours. No reloading, no folders, no manual installs — ever.

## Where to work
Use the clean clone:

```
C:\Users\atrav\roofr-calendar-extension
```

> ⚠️ Do **not** release from the old `Downloads\Arizona Roofers Tools\...\roofr-calendar-assistant\` copy. Its git history contains the signing key, so pushing from it could leak it. The `ship` command will refuse to run there anyway.

## To ship an update

```
cd C:\Users\atrav\roofr-calendar-extension
git pull
# ...make your code changes...
npm run ship
```

That's the whole thing. `npm run ship`:
1. bumps the version (manifest, package.json, updates.xml)
2. commits + tags + pushes
3. GitHub Actions builds the extension, **signs it with the production key**, verifies the ID, and publishes it
4. every managed Chrome auto-updates

Bigger bumps:
```
npm run ship -- minor   # 2.1.2 -> 2.2.0
npm run ship -- major   # 2.1.2 -> 3.0.0   (use when permissions change)
```

## Watch / confirm
- Build: https://github.com/atravisjones/roofr-calendar-extension/actions
- Force the update on one machine now: `chrome://extensions` → **Developer mode** on → **Update**
- The extension should read the new version and show "Installed by your organization."

## How it's wired (for reference)
- **Distribution:** Google Workspace force-install (Admin → Devices → Chrome → Apps & extensions, OU "AZ Roof Co.") pointed at `updates.xml`.
- **Extension ID:** `fkldnfkfppeicfcgmlnpknfkmnfkaabo` (this is fixed — every release must be signed with the same key).
- **Signing key:** stored as the GitHub Actions secret `CRX_PRIVATE_KEY`; CI signs automatically. The only copy of the key file is `...\roofr-calendar-assistant (7)\extension.pem` — **keep a backup**; if it's lost, the whole managed deployment is unrecoverable.

## If a release fails
Check the Actions log. The build self-aborts (instead of shipping something broken) if the signed ID doesn't match `fkldnf` or the signing secret is missing.


## 2026-09-14: repo is PRIVATE under the `arizona-roofers` org — GitHub is NOT the update host

Chrome fetches `updates.xml` and the `.crx` anonymously, and a private repo returns 404 to
it (that silently froze every managed machine on an old version after the transfer).
Travis wants the repo private, so the two update files are served from the tech scheduler
site instead (public static files, nothing else exposed):

- `https://az-roofers-tech-scheduler.vercel.app/ext/updates.xml`
- `https://az-roofers-tech-scheduler.vercel.app/ext/roofr-calendar-scraper.crx`

Source: `arizona-roofers-rep-schedler/public/ext/`. The Workspace force-install policy
(Admin console → Devices → Chrome → Apps & extensions → OU "AZ Roof Co." → fkldnf entry)
must point its update URL at that `updates.xml` — the old raw.githubusercontent URL is dead.

Release procedure: `npm run ship` (bump + tag + push) → build the crx from the tag in a
clean worktree with the fkldnf `extension.pem` (`node scripts/build-crx.cjs`, verify
`scripts/get-crx-id.cjs` prints `fkldnfkfppeicfcgmlnpknfkmnfkaabo`) → copy
`releases/roofr-calendar-scraper.crx` into the scheduler repo's `public/ext/`, bump
`version=` in its `public/ext/updates.xml` → `vercel --prod --yes` there. The GitHub
Actions release workflow is archival only (and 403s until the org enables workflow write
permissions); Chrome never reads GitHub.
