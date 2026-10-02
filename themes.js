// themes.js - Theme definitions and utilities

export const THEMES = {
    light: {
        name: 'Light',
        description: 'Clean and bright default theme',
        colors: {
            bgPrimary: '#ffffff',
            bgSecondary: '#f8fafc',
            bgTertiary: '#f1f5f9',
            textPrimary: '#0f172a',
            textSecondary: '#475569',
            textMuted: '#64748b',
            border: '#e2e8f0',
            borderLight: '#f1f5f9',
            accent: '#3b82f6',
            accentHover: '#2563eb',
            accentLight: '#dbeafe',
            success: '#16a34a',
            successBg: '#dcfce7',
            successBorder: '#86efac',
            error: '#dc2626',
            errorBg: '#fee2e2',
            errorBorder: '#fca5a5',
            warning: '#ea580c',
            warningBg: '#fed7aa',
            warningBorder: '#fdba74',
            hoverBg: '#dbeafe',
            cardBg: '#ffffff',
            cardBorder: '#e2e8f0',
        }
    },
    dark: {
        name: 'Dark',
        description: 'Easy on the eyes',
        colors: {
            bgPrimary: '#0f172a',
            bgSecondary: '#1e293b',
            bgTertiary: '#334155',
            textPrimary: '#f8fafc',
            textSecondary: '#cbd5e1',
            textMuted: '#94a3b8',
            border: '#334155',
            borderLight: '#475569',
            accent: '#60a5fa',
            accentHover: '#3b82f6',
            accentLight: '#1e3a8a',
            success: '#22c55e',
            successBg: '#14532d',
            successBorder: '#166534',
            error: '#ef4444',
            errorBg: '#7f1d1d',
            errorBorder: '#991b1b',
            warning: '#f97316',
            warningBg: '#7c2d12',
            warningBorder: '#9a3412',
            hoverBg: '#1e3a8a',
            cardBg: '#1e293b',
            cardBorder: '#334155',
        }
    },
    ocean: {
        name: 'Ocean',
        description: 'Deep blue waters and coral reefs',
        colors: {
            bgPrimary: '#f0f9ff',
            bgSecondary: '#e0f2fe',
            bgTertiary: '#bae6fd',
            textPrimary: '#0c4a6e',
            textSecondary: '#075985',
            textMuted: '#0369a1',
            border: '#7dd3fc',
            borderLight: '#bae6fd',
            accent: '#0ea5e9',
            accentHover: '#0284c7',
            accentLight: '#e0f2fe',
            success: '#14b8a6',
            successBg: '#ccfbf1',
            successBorder: '#5eead4',
            error: '#e11d48',
            errorBg: '#ffe4e6',
            errorBorder: '#fda4af',
            warning: '#f59e0b',
            warningBg: '#fef3c7',
            warningBorder: '#fcd34d',
            hoverBg: '#bae6fd',
            cardBg: '#ffffff',
            cardBorder: '#7dd3fc',
        }
    },
    forest: {
        name: 'Forest',
        description: 'Lush greenery and woodland calm',
        colors: {
            bgPrimary: '#f0fdf4',
            bgSecondary: '#dcfce7',
            bgTertiary: '#bbf7d0',
            textPrimary: '#14532d',
            textSecondary: '#166534',
            textMuted: '#15803d',
            border: '#86efac',
            borderLight: '#bbf7d0',
            accent: '#16a34a',
            accentHover: '#15803d',
            accentLight: '#dcfce7',
            success: '#22c55e',
            successBg: '#dcfce7',
            successBorder: '#86efac',
            error: '#dc2626',
            errorBg: '#fee2e2',
            errorBorder: '#fca5a5',
            warning: '#eab308',
            warningBg: '#fef9c3',
            warningBorder: '#fde047',
            hoverBg: '#bbf7d0',
            cardBg: '#ffffff',
            cardBorder: '#86efac',
        }
    },
    desert: {
        name: 'Desert',
        description: 'Warm sands and sunset hues',
        colors: {
            bgPrimary: '#fffbeb',
            bgSecondary: '#fef3c7',
            bgTertiary: '#fde68a',
            textPrimary: '#78350f',
            textSecondary: '#92400e',
            textMuted: '#b45309',
            border: '#fcd34d',
            borderLight: '#fde68a',
            accent: '#f59e0b',
            accentHover: '#d97706',
            accentLight: '#fef3c7',
            success: '#84cc16',
            successBg: '#ecfccb',
            successBorder: '#bef264',
            error: '#dc2626',
            errorBg: '#fee2e2',
            errorBorder: '#fca5a5',
            warning: '#ea580c',
            warningBg: '#ffedd5',
            warningBorder: '#fdba74',
            hoverBg: '#fde68a',
            cardBg: '#ffffff',
            cardBorder: '#fcd34d',
        }
    },
    arctic: {
        name: 'Arctic',
        description: 'Crisp ice and northern lights',
        colors: {
            bgPrimary: '#f0fdfa',
            bgSecondary: '#ccfbf1',
            bgTertiary: '#99f6e4',
            textPrimary: '#134e4a',
            textSecondary: '#115e59',
            textMuted: '#0f766e',
            border: '#5eead4',
            borderLight: '#99f6e4',
            accent: '#14b8a6',
            accentHover: '#0d9488',
            accentLight: '#ccfbf1',
            success: '#10b981',
            successBg: '#d1fae5',
            successBorder: '#6ee7b7',
            error: '#ef4444',
            errorBg: '#fee2e2',
            errorBorder: '#fca5a5',
            warning: '#06b6d4',
            warningBg: '#cffafe',
            warningBorder: '#67e8f9',
            hoverBg: '#99f6e4',
            cardBg: '#ffffff',
            cardBorder: '#5eead4',
        }
    },
    savanna: {
        name: 'Savanna',
        description: 'Golden grasslands and earthen tones',
        colors: {
            bgPrimary: '#fefce8',
            bgSecondary: '#fef9c3',
            bgTertiary: '#fef08a',
            textPrimary: '#713f12',
            textSecondary: '#854d0e',
            textMuted: '#a16207',
            border: '#fde047',
            borderLight: '#fef08a',
            accent: '#ca8a04',
            accentHover: '#a16207',
            accentLight: '#fef9c3',
            success: '#65a30d',
            successBg: '#ecfccb',
            successBorder: '#bef264',
            error: '#dc2626',
            errorBg: '#fee2e2',
            errorBorder: '#fca5a5',
            warning: '#ea580c',
            warningBg: '#fed7aa',
            warningBorder: '#fdba74',
            hoverBg: '#fef08a',
            cardBg: '#ffffff',
            cardBorder: '#fde047',
        }
    },
    jungle: {
        name: 'Jungle',
        description: 'Vibrant tropical paradise',
        colors: {
            bgPrimary: '#f7fee7',
            bgSecondary: '#ecfccb',
            bgTertiary: '#d9f99d',
            textPrimary: '#1a2e05',
            textSecondary: '#365314',
            textMuted: '#3f6212',
            border: '#bef264',
            borderLight: '#d9f99d',
            accent: '#65a30d',
            accentHover: '#4d7c0f',
            accentLight: '#ecfccb',
            success: '#16a34a',
            successBg: '#dcfce7',
            successBorder: '#86efac',
            error: '#dc2626',
            errorBg: '#fee2e2',
            errorBorder: '#fca5a5',
            warning: '#f59e0b',
            warningBg: '#fef3c7',
            warningBorder: '#fcd34d',
            hoverBg: '#d9f99d',
            cardBg: '#ffffff',
            cardBorder: '#bef264',
        }
    },
    halloween: {
        name: 'Halloween',
        description: 'Pumpkins, bats and a haunted night sky',
        dark: true,
        colors: {
            bgPrimary: '#1a1024',
            bgSecondary: '#0f0a16',
            bgTertiary: '#2a1a38',
            textPrimary: '#f5ede0',
            textSecondary: '#d6c7e6',
            textMuted: '#a591ba',
            border: '#3d2952',
            borderLight: '#4e3566',
            accent: '#ff7518',
            accentHover: '#ff8f3f',
            accentLight: '#3a1f0a',
            success: '#7dde3c',
            successBg: '#1a2e0a',
            successBorder: '#3f6b1a',
            error: '#ff4d5e',
            errorBg: '#3b0d14',
            errorBorder: '#7a1a26',
            warning: '#f5c542',
            warningBg: '#3a2c08',
            warningBorder: '#7a5d12',
            hoverBg: '#2e1a42',
            cardBg: '#1a1024',
            cardBorder: '#3d2952',
        }
    }
};

// True for any theme drawn on a dark background (it also gets the popup's `dark-theme` class fixes).
export function isDarkTheme(themeName) {
    return themeName === 'dark' || !!THEMES[themeName]?.dark;
}

// Halloween extras: the popup's `body.dark-theme` rule re-declares the Dark palette on <body>, so the Halloween
// colors are re-declared one level more specific. Decorations are fixed-position, pointer-events: none, so they
// never block a click; reduced-motion users get them standing still. Nothing startling (lightning, sound) fires
// while a call is live. Sounds are synthesized (no audio files), quiet, and OFF unless Options -> Spooky sounds.
const HALLOWEEN_CSS = `
@font-face { font-family: 'Creepster'; src: url('/fonts/creepster.woff2') format('woff2'); font-display: swap; }
html[data-theme="halloween"] body.dark-theme {
  --bg: #0f0a16; --surface: #1a1024; --surface-hover: #2a1a38; --border: #3d2952;
  --primary: #ff7518; --primary-hover: #ff8f3f; --primary-light: #3a1f0a;
  --text-main: #f5ede0; --text-muted: #d6c7e6; --text-light: #a591ba;
  --danger: #ff4d5e; --danger-bg: #3b0d14; --success: #7dde3c; --success-bg: #1a2e0a;
  --warn: #f5c542; --warn-bg: #3a2c08;
}
html[data-theme="halloween"] body {
  background-image:
    radial-gradient(circle at 86% 4%, rgba(245,237,224,.10) 0 26px, rgba(245,237,224,.05) 27px, transparent 90px),
    radial-gradient(ellipse at 50% 110%, rgba(255,117,24,.12), transparent 55%);
  background-attachment: fixed;
}
html[data-theme="halloween"] body.dark-theme #sticky-header { background: rgba(15,10,22,.95); }

/* Creepy font on headers and tab names only; names, dollars and phone numbers keep the normal font */
html[data-theme="halloween"] .nav-tab, html[data-theme="halloween"] h1, html[data-theme="halloween"] h2,
html[data-theme="halloween"] h3, html[data-theme="halloween"] .suggestion-section-header {
  font-family: 'Creepster', var(--font-sans, sans-serif); font-weight: 400; letter-spacing: .06em;
}
html[data-theme="halloween"] .nav-tab { font-size: 1.12em; }
html[data-theme="halloween"] .nav-tab.active { color: #ff7518; text-shadow: 0 0 8px rgba(255,117,24,.55); }

/* Buttons glow like a lit jack-o'-lantern on hover */
html[data-theme="halloween"] button:not(:disabled):hover, html[data-theme="halloween"] .btn:hover {
  box-shadow: 0 0 2px rgba(255,117,24,.95), 0 0 12px rgba(255,117,24,.5);
  transition: box-shadow .2s;
}

/* Tombstone cards: rounded headstone top, a faint crack in the stone */
html[data-theme="halloween"] .day-card {
  border-radius: 28px 28px 6px 6px;
  border: 1px solid var(--border);
  border-top: 2px solid #4e3566;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='60' fill='none' stroke='%23f5ede0' stroke-opacity='.13' stroke-width='1.2'%3E%3Cpath d='M70 0 L64 12 L72 20 L62 34 L68 44 L60 60'/%3E%3Cpath d='M64 12 L54 16'/%3E%3Cpath d='M62 34 L80 38'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 10px top 0;
}

.ra-spooky { position: fixed; pointer-events: none; z-index: 2147483000; user-select: none; line-height: 1; }

/* Bats: the outer box crosses the screen and bobs, the inner emoji faces forward and flaps */
.ra-spooky.bat { top: 6px; left: -30px; font-size: 16px; opacity: .8; animation: ra-bat 14s linear infinite; }
.ra-spooky.bat.b2 { top: 28px; font-size: 12px; animation-duration: 19s; animation-delay: -7s; }
.ra-spooky.bat.b3 { top: 16px; font-size: 10px; opacity: .6; animation-duration: 23s; animation-delay: -15s; }
.ra-spooky.bat > span { display: inline-block; animation: ra-flap .28s ease-in-out infinite alternate; }
@keyframes ra-bat {
  0% { left: -30px; transform: translateY(0); } 25% { transform: translateY(8px); }
  50% { transform: translateY(-4px); } 75% { transform: translateY(6px); } 100% { left: 105%; transform: translateY(0); }
}
@keyframes ra-flap { from { transform: scaleX(-1) scaleY(1); } to { transform: scaleX(-1) scaleY(.55); } }

/* Spider web in the bottom-left corner */
.ra-spooky.web { left: 0; bottom: 0; width: 110px; height: 110px; opacity: .32; }

/* Spider on its thread. When nobody is at the panel (15 s to 3 min, random) it drops down and takes over the
   screen; the moment the mouse comes onto the sidebar it shoots back up. */
.ra-spooky.spider { top: 0; right: 18px; width: 22px; transform-origin: top center; animation: ra-dangle 7s ease-in-out infinite;
  transition: right .45s ease-in; }
.ra-spooky.spider i { display: block; width: 1px; height: 38px; margin: 0 auto; background: rgba(245,237,224,.45); animation: ra-drop 11s ease-in-out infinite;
  transition: height .45s ease-in; }
.ra-spooky.spider b { display: flex; justify-content: center; font-size: 22px; font-weight: 400; line-height: 1;
  filter: drop-shadow(0 0 3px rgba(0,0,0,.8)); transition: font-size .45s ease-in; }
.ra-spooky.spider.hunting { animation: ra-dangle 3.5s ease-in-out infinite; right: calc(50% - 11px); transition: right 2.2s ease-out; }
.ra-spooky.spider.hunting i { animation: none; height: 18vh; transition: height 2.2s cubic-bezier(.2,.7,.3,1); }
.ra-spooky.spider.hunting b { font-size: min(80vw, 58vh); transition: font-size 2.2s cubic-bezier(.2,.7,.3,1);
  filter: drop-shadow(0 0 2px rgba(245,237,224,.45)) drop-shadow(0 0 14px rgba(255,117,24,.25)) drop-shadow(0 0 30px rgba(0,0,0,.9)); }
/* Drawn spider: each leg bends at its hip on its own beat; slow creep while dangling, a frantic scramble in the takeover */
.ra-spooky.spider .spider-art { width: 1em; height: 1em; display: block; overflow: visible; }
.ra-spooky.spider .leg { transform-box: view-box; animation: ra-leg .9s ease-in-out infinite alternate; }
.ra-spooky.spider .leg .lg { fill: none; stroke: #1c1822; stroke-width: 8; stroke-linecap: round; stroke-linejoin: round; }
.ra-spooky.spider .leg .lh { fill: none; stroke: #7a7088; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; opacity: .8; }
.ra-spooky.spider .leg.R { animation-name: ra-leg-r; }
.ra-spooky.spider .leg.l1 { animation-delay: -.1s; } .ra-spooky.spider .leg.l2 { animation-delay: -.55s; }
.ra-spooky.spider .leg.l3 { animation-delay: -.3s; }  .ra-spooky.spider .leg.l4 { animation-delay: -.75s; }
.ra-spooky.spider .leg.R.l1 { animation-delay: -.6s; } .ra-spooky.spider .leg.R.l2 { animation-delay: -.2s; }
.ra-spooky.spider .leg.R.l3 { animation-delay: -.8s; } .ra-spooky.spider .leg.R.l4 { animation-delay: -.4s; }
.ra-spooky.spider.hunting .leg { animation-duration: .16s; }
@keyframes ra-leg { from { transform: rotate(-9deg); } to { transform: rotate(9deg); } }
@keyframes ra-leg-r { from { transform: rotate(9deg); } to { transform: rotate(-9deg); } }

/* The takeover spider's body box, relative so it can hold overlays */
.ra-spooky.spider b { position: relative; }
.ra-spooky.lair { inset: 0; opacity: 0; background: radial-gradient(ellipse at 50% 45%, transparent 25%, rgba(5,2,10,.85) 80%);
  transition: opacity .45s; }
.ra-spooky.lair.on { opacity: 1; transition: opacity 2.2s; }
@keyframes ra-dangle { 0%,100% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); } }
@keyframes ra-drop { 0%,100% { height: 38px; } 45%,60% { height: 120px; } }

/* Fog creeping along the bottom */
.ra-spooky.fog { left: -50%; bottom: -10px; width: 200%; height: 90px; opacity: .22;
  background: radial-gradient(ellipse at 20% 60%, #d6c7e6 0, transparent 45%),
              radial-gradient(ellipse at 55% 70%, #d6c7e6 0, transparent 40%),
              radial-gradient(ellipse at 85% 55%, #d6c7e6 0, transparent 45%);
  filter: blur(14px); animation: ra-fog 38s linear infinite alternate; }
.ra-spooky.fog.f2 { opacity: .14; height: 70px; animation-duration: 53s; animation-direction: alternate-reverse; }
@keyframes ra-fog { from { transform: translateX(0); } to { transform: translateX(25%); } }

/* Jack-o'-lantern that flickers like a candle */
.ra-spooky.pumpkin { right: 8px; bottom: 8px; font-size: 22px; animation: ra-flicker 3.2s steps(1) infinite; }
@keyframes ra-flicker {
  0%   { filter: drop-shadow(0 0 7px rgba(255,117,24,.75)); opacity: .9; }
  12%  { filter: drop-shadow(0 0 3px rgba(255,117,24,.4)); opacity: .75; }
  16%  { filter: drop-shadow(0 0 9px rgba(255,140,40,.9)); opacity: .95; }
  48%  { filter: drop-shadow(0 0 5px rgba(255,117,24,.6)); opacity: .85; }
  52%  { filter: drop-shadow(0 0 10px rgba(255,150,50,.95)); opacity: 1; }
  80%  { filter: drop-shadow(0 0 6px rgba(255,117,24,.7)); opacity: .88; }
}

/* A ghost rises out of the fog now and then, sways and fades */
.ra-spooky.ghost { bottom: -30px; font-size: 22px; opacity: 0; animation: ra-ghost 9s ease-in-out forwards; }
@keyframes ra-ghost {
  0% { transform: translate(0, 0); opacity: 0; } 15% { opacity: .55; }
  35% { transform: translate(14px, -30vh); } 65% { transform: translate(-12px, -55vh); opacity: .45; }
  100% { transform: translate(8px, -80vh); opacity: 0; }
}

/* Lightning: a double white flash and a half-second shudder */
.ra-spooky.lightning { inset: 0; background: #f5f0ff; opacity: 0; animation: ra-flash 1.1s ease-out forwards; }
@keyframes ra-flash { 0% { opacity: 0; } 6% { opacity: .55; } 12% { opacity: .05; } 20% { opacity: .4; } 100% { opacity: 0; } }
html[data-theme="halloween"] body.ra-shake { animation: ra-shake .45s linear; }
@keyframes ra-shake {
  0%,100% { transform: translate(0,0); } 20% { transform: translate(-3px,1px); } 40% { transform: translate(3px,-1px); }
  60% { transform: translate(-2px,2px); } 80% { transform: translate(2px,-1px); }
}

/* Eyes in the dark: open, watch the mouse, blink, close */
.ra-spooky.eyes { display: flex; gap: 9px; opacity: 0; animation: ra-eyes-life 7s ease-in-out forwards; }
.ra-spooky.eyes .eye { width: 13px; height: 8px; border-radius: 50%; background: #f5c542; position: relative; overflow: hidden;
  box-shadow: 0 0 8px rgba(245,197,66,.8); animation: ra-blink 7s steps(1) forwards; }
.ra-spooky.eyes .eye:first-child { transform: rotate(8deg); } .ra-spooky.eyes .eye:last-child { transform: rotate(-8deg); }
.ra-spooky.eyes .pupil { position: absolute; left: 5px; top: 1px; width: 3px; height: 6px; border-radius: 2px; background: #0f0a16; transition: transform .3s; }
@keyframes ra-eyes-life { 0% { opacity: 0; } 12%,85% { opacity: .9; } 100% { opacity: 0; } }
@keyframes ra-blink { 0%,40%,44%,70%,73% { height: 8px; } 41%,71% { height: 1px; } }

@media (prefers-reduced-motion: reduce) {
  .ra-spooky, .ra-spooky * { animation: none !important; transition: none !important; }
  .ra-spooky.bat { left: auto; right: 44px; } .ra-spooky.bat.b2, .ra-spooky.bat.b3 { display: none; }
  .ra-spooky.spider i { height: 60px; } .ra-spooky.fog { left: 0; width: 100%; }
}
`;

const WEB_SVG = `<svg viewBox="0 0 110 110" fill="none" stroke="#f5ede0" stroke-width="1">
<path d="M0 110 L110 0 M0 110 L70 0 M0 110 L30 0 M0 110 L110 40 M0 110 L110 80"/>
<path d="M0 88 Q10 90 12 98 Q16 88 24 86 Q28 96 36 92 Q44 102 60 102"/>
<path d="M0 64 Q20 68 24 86 Q34 72 48 72 Q56 84 72 80 Q82 96 110 96"/>
<path d="M0 40 Q30 44 36 60 Q52 48 70 48 Q80 60 96 54 Q104 68 110 66"/>
</svg>`;

// Everything the theme starts is tracked here so switching themes stops it cleanly
const SPIDER_SVG = `<svg class="spider-art" viewBox="0 0 200 200" aria-hidden="true"><defs><radialGradient id="ra-sp-body" cx="40%" cy="30%" r="70%"><stop offset="0" stop-color="#5a5266"/><stop offset=".45" stop-color="#231f29"/><stop offset="1" stop-color="#0b090d"/></radialGradient></defs><g class="leg l1 L" style="transform-origin:90px 68px"><path d="M90 68 L55 34 L42 8" class="lg"/><path d="M90 68 L55 34 L42 8" class="lh"/></g><g class="leg l2 L" style="transform-origin:88px 76px"><path d="M88 76 L44 52 L12 58" class="lg"/><path d="M88 76 L44 52 L12 58" class="lh"/></g><g class="leg l3 L" style="transform-origin:88px 86px"><path d="M88 86 L44 98 L14 122" class="lg"/><path d="M88 86 L44 98 L14 122" class="lh"/></g><g class="leg l4 L" style="transform-origin:90px 94px"><path d="M90 94 L56 132 L38 178" class="lg"/><path d="M90 94 L56 132 L38 178" class="lh"/></g><g class="leg l1 R" style="transform-origin:110px 68px"><path d="M110 68 L145 34 L158 8" class="lg"/><path d="M110 68 L145 34 L158 8" class="lh"/></g><g class="leg l2 R" style="transform-origin:112px 76px"><path d="M112 76 L156 52 L188 58" class="lg"/><path d="M112 76 L156 52 L188 58" class="lh"/></g><g class="leg l3 R" style="transform-origin:112px 86px"><path d="M112 86 L156 98 L186 122" class="lg"/><path d="M112 86 L156 98 L186 122" class="lh"/></g><g class="leg l4 R" style="transform-origin:110px 94px"><path d="M110 94 L144 132 L162 178" class="lg"/><path d="M110 94 L144 132 L162 178" class="lh"/></g><ellipse cx="100" cy="125" rx="34" ry="40" fill="url(#ra-sp-body)"/><ellipse cx="100" cy="80" rx="20" ry="18" fill="url(#ra-sp-body)"/><circle cx="100" cy="60" r="11" fill="url(#ra-sp-body)"/><path d="M95 68 q-3 7 1 11 M105 68 q3 7 -1 11" stroke="#0b090d" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="96" cy="57" r="2.2" fill="#ff2a3a"/><circle cx="104" cy="57" r="2.2" fill="#ff2a3a"/><circle cx="92" cy="61" r="1.3" fill="#ff2a3a"/><circle cx="108" cy="61" r="1.3" fill="#ff2a3a"/></svg>`;

let spook = null;

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
// The Coach tab's red LIVE dot is showing = a call is on the line. Without Call Coach (no Coach tab, or it is
// switched off) nothing here can tell, so it counts as live: no lightning, sounds or spider takeover on a call
// nobody knew about.
const callLive = () => {
    const el = document.getElementById('coach-live'), tab = document.getElementById('coach-tab-btn');
    if (!el || !tab || tab.hidden) return true;
    return !el.hidden;
};
const isMainPanel = () => /popup\.html$/.test(location.pathname);
const rand = (a, b) => a + Math.random() * (b - a);

// --- Quiet synthesized sounds (Options -> Spooky sounds; off by default) ---
let soundsOn = false;
let audio = null;
function ac() {
    if (!audio) {
        audio = new AudioContext();
        const master = audio.createGain();
        master.gain.value = 0.35; // "not loud": everything goes through this
        master.connect(audio.destination);
        audio.master = master;
    }
    if (audio.state === 'suspended') audio.resume().catch(() => {});
    return audio;
}
function noiseBuffer(ctx, secs) {
    const buf = ctx.createBuffer(1, ctx.sampleRate * secs, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
}
const SOUNDS = {
    creak(ctx, t) { // a slow door creak: a scratchy low tone that bends up and down
        const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(70, t);
        o.frequency.linearRampToValueAtTime(115, t + 0.5);
        o.frequency.linearRampToValueAtTime(85, t + 1.1);
        o.frequency.linearRampToValueAtTime(130, t + 1.5);
        f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 6;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.10, t + 0.15);
        g.gain.linearRampToValueAtTime(0.06, t + 1.0);
        g.gain.linearRampToValueAtTime(0, t + 1.6);
        o.connect(f).connect(g).connect(ctx.master);
        o.start(t); o.stop(t + 1.7);
    },
    thunder(ctx, t) { // a far-off rumble
        const n = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        n.buffer = noiseBuffer(ctx, 3);
        f.type = 'lowpass'; f.frequency.setValueAtTime(260, t); f.frequency.exponentialRampToValueAtTime(60, t + 2.8);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.35, t + 0.08);
        g.gain.linearRampToValueAtTime(0.18, t + 0.6);
        g.gain.exponentialRampToValueAtTime(0.001, t + 2.9);
        n.connect(f).connect(g).connect(ctx.master);
        n.start(t); n.stop(t + 3);
    },
    whoosh(ctx, t) { // a ghostly breath as a ghost floats by
        const n = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        n.buffer = noiseBuffer(ctx, 2.5);
        f.type = 'bandpass'; f.Q.value = 3;
        f.frequency.setValueAtTime(300, t); f.frequency.linearRampToValueAtTime(1100, t + 1.2); f.frequency.linearRampToValueAtTime(400, t + 2.4);
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.07, t + 0.9); g.gain.linearRampToValueAtTime(0, t + 2.4);
        n.connect(f).connect(g).connect(ctx.master);
        n.start(t); n.stop(t + 2.5);
    },
};
function play(name, delay = 0) {
    if (!soundsOn || callLive() || document.hidden) return;
    try { const ctx = ac(); SOUNDS[name](ctx, ctx.currentTime + delay); } catch (_) { /* audio blocked - stay silent */ }
}

function addSpooky(cls, html = '') {
    const el = document.createElement('div');
    el.className = `ra-spooky ${cls}`;
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = html;
    document.body.appendChild(el);
    return el;
}

function spawnGhost() {
    if (document.hidden || reducedMotion()) return;
    const el = addSpooky('ghost', '\u{1F47B}');
    el.style.left = `${rand(10, 85)}%`;
    el.addEventListener('animationend', () => el.remove());
    play('whoosh');
}

function strikeLightning() {
    if (document.hidden || reducedMotion() || callLive()) return;
    const el = addSpooky('lightning');
    el.addEventListener('animationend', () => el.remove());
    document.body.classList.add('ra-shake');
    setTimeout(() => document.body.classList.remove('ra-shake'), 500);
    play('thunder', 0.4);
}

function openEyes() {
    if (document.hidden || reducedMotion()) return;
    const el = addSpooky('eyes', '<span class="eye"><i class="pupil"></i></span><span class="eye"><i class="pupil"></i></span>');
    // an empty-ish spot: along the left or right edge, below the header
    const side = Math.random() < 0.5 ? 'left' : 'right';
    el.style[side] = `${rand(6, 22)}px`;
    el.style.top = `${rand(35, 80)}%`;
    const r = el.getBoundingClientRect();
    const look = (e) => {
        const dx = Math.max(-1, Math.min(1, (e.clientX - r.left) / 150)), dy = Math.max(-1, Math.min(1, (e.clientY - r.top) / 150));
        el.querySelectorAll('.pupil').forEach(p => { p.style.transform = `translate(${dx * 4}px, ${dy * 1}px)`; });
    };
    document.addEventListener('mousemove', look);
    const stop = () => document.removeEventListener('mousemove', look);
    if (spook) spook.off.push(stop);   // the theme switched away before the eyes closed
    el.addEventListener('animationend', (e) => { if (e.target === el) { stop(); el.remove(); } });
}

function setHalloweenExtras(on) {
    document.getElementById('ra-halloween-style')?.remove();
    document.querySelectorAll('.ra-spooky').forEach(el => el.remove());
    if (spook) { spook.timers.forEach(clearTimeout); spook.intervals.forEach(clearInterval); spook.off.forEach(fn => fn()); }
    spook = null; soundsOn = false;
    if (!on || !document.body) return;

    const style = document.createElement('style');
    style.id = 'ra-halloween-style';
    style.textContent = HALLOWEEN_CSS;
    document.head.appendChild(style);
    // Only the main side panel gets the critters; the Options page just gets the colors and font
    if (!isMainPanel()) return;

    spook = { timers: [], intervals: [], off: [] };
    addSpooky('fog'); addSpooky('fog f2');
    addSpooky('web', WEB_SVG);
    const spider = addSpooky('spider', `<i></i><b>${SPIDER_SVG}</b>`);
    for (const cls of ['bat', 'bat b2', 'bat b3']) addSpooky(cls, '<span>\u{1F987}</span>');
    addSpooky('pumpkin', '\u{1F383}');

    spook.timers.push(setTimeout(spawnGhost, 4000));
    spook.intervals.push(setInterval(spawnGhost, 30000));
    // Eyes every 1-2 minutes, lightning every 3-6 minutes (random, so it never feels scheduled)
    const every = (fn, lo, hi) => { const next = () => spook.timers.push(setTimeout(() => { fn(); next(); }, rand(lo, hi))); next(); };
    every(openEyes, 60000, 120000);
    every(strikeLightning, 180000, 360000);

    // AFK spider: after a random 15 s to 3 min with nobody at the panel it takes over the screen, and the moment the
    // mouse comes onto the sidebar (or a key is pressed) it shoots back up. Never during a live call.
    const lair = addSpooky('lair');
    const WAKE_EVENTS = ['mouseover', 'mousemove', 'keydown', 'mousedown', 'wheel'];
    let idle = null;
    const armIdle = () => {
        clearTimeout(idle);
        idle = setTimeout(() => {
            if (reducedMotion() || callLive() || document.hidden) return armIdle();
            spider.classList.add('hunting');
            lair.classList.add('on');
        }, rand(15000, 180000));
    };
    const wake = () => {
        if (spider.classList.contains('hunting')) { spider.classList.remove('hunting'); lair.classList.remove('on'); }
        armIdle();
    };
    for (const ev of WAKE_EVENTS) document.addEventListener(ev, wake, { passive: true });
    spook.off.push(() => { clearTimeout(idle); for (const ev of WAKE_EVENTS) document.removeEventListener(ev, wake); });
    armIdle();
    // A call connecting ends a takeover already under way: the phone was answered, the panel was not touched
    const dot = document.getElementById('coach-live');
    if (dot) { const onCall = new MutationObserver(() => { if (callLive()) wake(); }); onCall.observe(dot, { attributes: true, attributeFilter: ['hidden'] }); spook.off.push(() => onCall.disconnect()); }

    // Sounds: read the switch, follow it live, creak the door as the panel opens
    try {
        const mine = spook;   // an answer that lands after the theme was switched away, or set up again, is dropped
        chrome.storage.sync.get('halloween_sounds', (r) => { if (spook !== mine) return; soundsOn = !!r?.halloween_sounds; play('creak', 0.3); });
        const onChange = (ch) => { if (ch.halloween_sounds) soundsOn = !!ch.halloween_sounds.newValue; };
        chrome.storage.onChanged.addListener(onChange);
        spook.off.push(() => chrome.storage.onChanged.removeListener(onChange));
    } catch (_) { /* not an extension page */ }
}

export function applyTheme(themeName) {
    const theme = THEMES[themeName];
    if (!theme) return;

    const root = document.documentElement;
    const colors = theme.colors;
    root.dataset.theme = themeName;
    setHalloweenExtras(themeName === 'halloween');

    // Apply CSS variables (camelCase to kebab-case)
    Object.entries(colors).forEach(([key, value]) => {
        const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVarName, value);
    });

    // Also set popup.html CSS variables for compatibility
    root.style.setProperty('--bg', colors.bgSecondary);
    root.style.setProperty('--surface', colors.bgPrimary);
    root.style.setProperty('--surface-hover', colors.bgTertiary);
    root.style.setProperty('--border', colors.border);
    root.style.setProperty('--primary', colors.accent);
    root.style.setProperty('--primary-hover', colors.accentHover);
    root.style.setProperty('--primary-light', colors.accentLight);
    root.style.setProperty('--text-main', colors.textPrimary);
    root.style.setProperty('--text-muted', colors.textSecondary);
    root.style.setProperty('--text-light', colors.textMuted);
    root.style.setProperty('--danger', colors.error);
    root.style.setProperty('--danger-bg', colors.errorBg);
    root.style.setProperty('--success', colors.success);
    root.style.setProperty('--success-bg', colors.successBg);
    root.style.setProperty('--warn', colors.warning);
    root.style.setProperty('--warn-bg', colors.warningBg);
    root.style.setProperty('--hover', colors.hoverBg);
    root.style.setProperty('--card-bg', colors.cardBg);
    root.style.setProperty('--card-border', colors.cardBorder);

    // Also set body background
    document.body.style.backgroundColor = colors.bgSecondary;
    document.body.style.color = colors.textPrimary;
}

export function getThemeForBody(themeName) {
    const theme = THEMES[themeName];
    if (!theme) return '';

    const colors = theme.colors;
    return `background-color: ${colors.bgSecondary}; color: ${colors.textPrimary};`;
}
