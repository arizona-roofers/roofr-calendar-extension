// roofr-halloween.js - Dresses Roofr itself up when the Roofr Assist theme is "Halloween" (Options -> Appearance).
// Standalone content script at document_start, same pattern as roofr-dark-mode.js; follows the 'theme' setting in
// chrome.storage.sync live, so switching the theme away undresses every open Roofr tab.
//
// Decoration only, by Hunter's rule: Roofr is where the real work happens, so nothing here covers a button, blocks a
// click (every piece is pointer-events:none), hides job data, flashes, or makes a sound.
// Roofr colors everything from its own --roofr-* tokens on :root, so swapping the blue family for pumpkin orange
// recolors buttons, links, tags and highlights at once without touching Roofr's markup. Status colors (red, green,
// yellow) are left alone because they mean something. Sigma dashboard panels are another site's iframes and stay normal.

(function () {
    const STORAGE_KEY = 'theme';
    const STYLE_ID = 'rah-halloween-style';
    const HTML_CLASS = 'rah-halloween';
    const LAYER_ID = 'rah-halloween-layer';
    const font = chrome.runtime.getURL('fonts/creepster.woff2');

    const CSS = `
@font-face { font-family: 'RAH Creepster'; src: url('${font}') format('woff2'); font-display: swap; }

/* Roofr's blue family -> pumpkin orange, shade for shade (light tints stay light, dark shades stay dark) */
html.${HTML_CLASS} {
    --roofr-blue: #f2882a;
    --roofr-blue-5: #fef9f4;
    --roofr-blue-10: #fef3ea;
    --roofr-blue-20: #fce7d4;
    --roofr-blue-30: #fbdbbf;
    --roofr-blue-50: #fdc99c;
    --roofr-blue-5B: #e68128;
    --roofr-blue-20B: #c26d22;
    --roofr-blue-30B: #a95f1d;
    --roofr-blue-40B: #915219;
    --roofr-blue-50B: #7e4815;
    --roofr-blue-60B: #6d3e12;
    --roofr-blue-70B: #5c340f;
    --roofr-blue-80B: #4b2a0c;
    --roofr-blue-90B: #392009;
    --roofr-text-link: #c26d22;
    --roofr-gradient-blue: linear-gradient(256.3deg, #6a34c5 0%, #f2882a 100%);
    --roofr-gradient-dark-blue: linear-gradient(234.88deg, #190d31 0%, #e68128 94.72%);
    /* a faint haunted-purple wash on the page backgrounds */
    --roofr-background-accent: #f6f3fc;
    --roofr-background-secondary: #f3eff8;
    --roofr-background-tertiary: #f9f7fc;
    --primary: #f2882a;
    --blue: #f2882a;
}

/* Page titles only (never job text) get the spooky lettering */
html.${HTML_CLASS} .roofr-typo-heading-1,
html.${HTML_CLASS} .roofr-typo-heading-2 {
    font-family: 'RAH Creepster', 'Circular Std', sans-serif !important;
    font-weight: 400 !important;
    letter-spacing: .05em;
}

/* The decorations: fixed, see-through to clicks, under Roofr's own popups */
#${LAYER_ID} { position: fixed; inset: 0; pointer-events: none; z-index: 900; overflow: hidden; }
#${LAYER_ID} * { pointer-events: none; user-select: none; }
#${LAYER_ID} .rah { position: absolute; line-height: 1; }
#${LAYER_ID} .bat { top: 8px; left: -40px; font-size: 18px; opacity: .75; animation: rah-bat 26s linear infinite; }
#${LAYER_ID} .bat.b2 { top: 34px; font-size: 13px; animation-duration: 34s; animation-delay: -12s; }
#${LAYER_ID} .bat.b3 { top: 20px; font-size: 11px; opacity: .55; animation-duration: 41s; animation-delay: -25s; }
#${LAYER_ID} .bat > span { display: inline-block; animation: rah-flap .28s ease-in-out infinite alternate; }
@keyframes rah-bat {
    0% { left: -40px; transform: translateY(0); } 25% { transform: translateY(10px); }
    50% { transform: translateY(-4px); } 75% { transform: translateY(7px); } 100% { left: 102%; transform: translateY(0); }
}
@keyframes rah-flap { from { transform: scaleX(-1) scaleY(1); } to { transform: scaleX(-1) scaleY(.55); } }
#${LAYER_ID} { color: #3a2f45; }   /* ink for the web and the spider's thread on light Roofr */
#${LAYER_ID} .web { top: 0; right: 0; width: 120px; height: 120px; opacity: .22; transform: scaleX(-1) scaleY(-1); }
#${LAYER_ID} .spider { top: 0; right: 64px; width: 18px; text-align: center; transform-origin: top center;
    animation: rah-dangle 7s ease-in-out infinite; }
#${LAYER_ID} .spider i { display: block; width: 1px; margin: 0 auto; background: currentColor; opacity: .5;
    animation: rah-drop 13s ease-in-out infinite; }
#${LAYER_ID} .spider b { display: block; font-size: 16px; font-weight: 400; }
@keyframes rah-dangle { 0%,100% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); } }
@keyframes rah-drop { 0%,100% { height: 30px; } 45%,60% { height: 90px; } }
#${LAYER_ID} .fog { left: -50%; bottom: -14px; width: 200%; height: 70px; opacity: .16;
    background: radial-gradient(ellipse at 20% 60%, #956ed8 0, transparent 45%),
                radial-gradient(ellipse at 55% 70%, #956ed8 0, transparent 40%),
                radial-gradient(ellipse at 85% 55%, #956ed8 0, transparent 45%);
    filter: blur(14px); animation: rah-fog 45s linear infinite alternate; }
@keyframes rah-fog { from { transform: translateX(0); } to { transform: translateX(25%); } }

/* With "Dark Mode on Roofr" also on, the page is color-inverted; flip the decorations back to their real colors */
/* On the dark page the ink turns moonlight and the bats get a pumpkin glow so they show against black */
html.rda-dark-mode.${HTML_CLASS} #${LAYER_ID} { filter: invert(1) hue-rotate(180deg); color: #e9dcf5; }
html.rda-dark-mode.${HTML_CLASS} #${LAYER_ID} .web { opacity: .5; }
html.rda-dark-mode.${HTML_CLASS} #${LAYER_ID} .bat,
html.rda-dark-mode.${HTML_CLASS} #${LAYER_ID} .spider b { filter: drop-shadow(0 0 4px rgba(255,140,40,.85)); opacity: .9; }

@media (prefers-reduced-motion: reduce) {
    #${LAYER_ID} * { animation: none !important; }
    #${LAYER_ID} .bat { left: auto; right: 200px; } #${LAYER_ID} .bat.b2, #${LAYER_ID} .bat.b3 { display: none; }
    #${LAYER_ID} .spider i { height: 50px; } #${LAYER_ID} .fog { left: 0; width: 100%; }
}
@media print { #${LAYER_ID} { display: none; } }
`;

    const WEB_SVG = `<svg viewBox="0 0 110 110" fill="none" stroke="currentColor" stroke-width="1">
<path d="M0 110 L110 0 M0 110 L70 0 M0 110 L30 0 M0 110 L110 40 M0 110 L110 80"/>
<path d="M0 88 Q10 90 12 98 Q16 88 24 86 Q28 96 36 92 Q44 102 60 102"/>
<path d="M0 64 Q20 68 24 86 Q34 72 48 72 Q56 84 72 80 Q82 96 110 96"/>
<path d="M0 40 Q30 44 36 60 Q52 48 70 48 Q80 60 96 54 Q104 68 110 66"/>
</svg>`;

    const LAYER_HTML =
        '<div class="rah bat"><span>\u{1F987}</span></div>' +
        '<div class="rah bat b2"><span>\u{1F987}</span></div>' +
        '<div class="rah bat b3"><span>\u{1F987}</span></div>' +
        `<div class="rah web">${WEB_SVG}</div>` +
        '<div class="rah spider"><i></i><b>\u{1F577}\u{FE0F}</b></div>' +
        '<div class="rah fog"></div>';

    let on = false;
    let keeper = null;

    function ensureStyle() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = CSS;
        // head may not exist yet at document_start; documentElement always does
        (document.head || document.documentElement).appendChild(style);
    }

    // Roofr is a single-page app that can replace <body>; put the layer back if it goes missing
    function ensureLayer() {
        if (!on || !document.body || document.getElementById(LAYER_ID)) return;
        const layer = document.createElement('div');
        layer.id = LAYER_ID;
        layer.setAttribute('aria-hidden', 'true');
        layer.innerHTML = LAYER_HTML;
        document.body.appendChild(layer);
    }

    function setEnabled(next) {
        on = next;
        if (on) {
            ensureStyle();
            document.documentElement.classList.add(HTML_CLASS);
            ensureLayer();
            if (!keeper) {
                keeper = new MutationObserver(ensureLayer);
                keeper.observe(document.documentElement, { childList: true, subtree: false });
                if (document.body) keeper.observe(document.body, { childList: true });
            }
            if (!document.body) document.addEventListener('DOMContentLoaded', () => {
                ensureLayer();
                if (keeper && document.body) keeper.observe(document.body, { childList: true });
            }, { once: true });
        } else {
            document.documentElement.classList.remove(HTML_CLASS);
            document.getElementById(LAYER_ID)?.remove();
            document.getElementById(STYLE_ID)?.remove();
            if (keeper) { keeper.disconnect(); keeper = null; }
        }
    }

    chrome.storage.sync.get(STORAGE_KEY, (result) => {
        setEnabled(result[STORAGE_KEY] === 'halloween');
    });

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'sync' && changes[STORAGE_KEY]) {
            setEnabled(changes[STORAGE_KEY].newValue === 'halloween');
        }
    });
})();
