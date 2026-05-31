/* Dr. Debra Canapp — site bundle (auto-generated) */
(function(){
  var __css="/* ============================================================\n   Dr. Debra Canapp — Editorial system\n   Two fonts only: Cormorant Garamond (display) + Inter (everything else)\n   Earthy + boutique. Calm. Less.\n   ============================================================ */\n\n:root {\n  /* Surfaces */\n  --paper: #F4EFE5;\n  --cream: #FBF8F1;\n  --paper-deep: #E8E1D2;\n\n  /* Inks */\n  --ink: #18211C;\n  --ink-2: #2D3A2F;\n  --ink-3: #5C6759;\n  --ink-4: #8B9482;\n\n  /* Tonal */\n  --forest: #1F2A22;\n  --sage: #7C8A6C;\n  --tan: #C2A878;\n  --clay: #B16A48;\n  --clay-deep: #8C4F33;\n\n  /* Rules */\n  --rule: rgba(24,33,28,0.12);\n  --rule-2: rgba(24,33,28,0.24);\n\n  /* Type — JUST TWO */\n  --serif: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;\n  --sans:  'Inter', -apple-system, system-ui, sans-serif;\n\n  --maxw: 1360px;\n  --pad: 64px;\n}\n\n@media (max-width: 900px) { :root { --pad: 24px; } }\n\n* , *::before, *::after { box-sizing: border-box; }\nhtml, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }\nbody { font-size: 16px; line-height: 1.6; overflow-x: hidden; }\nimg { display: block; max-width: 100%; }\na { color: inherit; text-decoration: none; }\nbutton { font-family: inherit; cursor: pointer; border: none; background: none; padding: 0; color: inherit; }\nh1, h2, h3, h4, h5 { margin: 0; font-weight: 400; }\np { margin: 0; }\nul, ol { margin: 0; padding: 0; list-style: none; }\n::selection { background: var(--ink); color: var(--paper); }\n\n/* ============= Reusable ============= */\n.container { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--pad); width: 100%; }\n\n.eyebrow {\n  font-family: var(--sans);\n  font-size: 11px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--ink-3);\n  font-weight: 500;\n}\n\n.serif { font-family: var(--serif); font-weight: 400; letter-spacing: -0.01em; }\n.serif-it { font-family: var(--serif); font-style: italic; font-weight: 400; }\n\n.h-display { font-family: var(--serif); font-size: clamp(56px, 8vw, 128px); line-height: 0.96; letter-spacing: -0.02em; font-weight: 400; }\n.h-section { font-family: var(--serif); font-size: clamp(40px, 5vw, 76px); line-height: 1.02; letter-spacing: -0.015em; font-weight: 400; }\n.h-block   { font-family: var(--serif); font-size: clamp(26px, 2.8vw, 40px); line-height: 1.08; letter-spacing: -0.012em; font-weight: 400; }\n\n.lede { font-family: var(--serif); font-size: clamp(19px, 1.4vw, 24px); line-height: 1.5; color: var(--ink-2); font-weight: 400; }\n.body { font-size: 16px; line-height: 1.7; color: var(--ink-2); }\n.body-lg { font-size: 18px; line-height: 1.65; color: var(--ink-2); }\n.small { font-size: 14px; line-height: 1.5; color: var(--ink-3); }\n\n/* ============= Logo sticker ============= */\n.logo-sticker {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background: var(--ink);\n  padding: 10px;\n  box-shadow: 0 6px 18px -8px rgba(24,33,28,0.4);\n  transform: rotate(-6deg);\n  transition: transform 0.4s cubic-bezier(0.2,0.7,0.2,1), box-shadow 0.4s;\n  overflow: hidden;\n}\n.logo-sticker::before {\n  content: '';\n  position: absolute;\n  inset: 6px;\n  border-radius: 50%;\n  border: 1px dashed rgba(244,239,229,0.32);\n  pointer-events: none;\n}\n.logo-sticker:hover { transform: rotate(2deg) scale(1.04); box-shadow: 0 10px 24px -6px rgba(24,33,28,0.5); }\n.logo-sticker img {\n  width: 100%; height: 100%;\n  object-fit: contain;\n  filter: invert(1) brightness(1.3);\n}\n\n/* Lighter sticker variant */\n.logo-sticker.bone { background: var(--paper); }\n.logo-sticker.bone::before { border-color: rgba(24,33,28,0.3); }\n.logo-sticker.bone img { filter: none; }\n\n.logo-sticker.clay { background: var(--clay); }\n.logo-sticker.clay::before { border-color: rgba(244,239,229,0.4); }\n\n/* Footer big sticker */\n.logo-sticker.lg { width: 120px; height: 120px; padding: 16px; }\n\n/* ============= Nav ============= */\n.nav-bar {\n  position: sticky; top: 0; z-index: 50;\n  background: rgba(244,239,229,0.92);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-bottom: 1px solid var(--rule);\n}\n.nav-inner {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  height: 84px;\n}\n.nav-brand {\n  display: flex; align-items: center; gap: 14px;\n  flex: 0 0 auto;\n  position: relative;\n  z-index: 2;\n}\n.nav-logo {\n  height: 50px;\n  width: auto;\n  display: block;\n  transform-origin: left top;\n  transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1),\n              filter 460ms ease;\n  will-change: transform;\n}\n.nav-brand > span:nth-child(2) {\n  transition: opacity 220ms ease, transform 460ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.nav-brand:hover .nav-logo,\n.nav-brand:focus-visible .nav-logo {\n  transform: translateY(2px) scale(2.1);\n  filter: drop-shadow(0 14px 26px rgba(24, 33, 28, 0.22));\n}\n.nav-brand:hover > span:nth-child(2),\n.nav-brand:focus-visible > span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-6px);\n  pointer-events: none;\n}\n@media (max-width: 700px) {\n  .nav-logo { height: 44px; }\n}\n.nav-brand .nav-name {\n  font-family: var(--serif);\n  font-size: 19px;\n  letter-spacing: -0.01em;\n  color: var(--ink);\n  line-height: 1.1;\n  white-space: nowrap;\n}\n.nav-brand .nav-sub {\n  font-size: 9.5px;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-3);\n  margin-top: 4px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n@media (max-width: 1180px) {\n  .nav-brand > span:nth-child(2) { display: none; }\n}\n@media (max-width: 700px) {\n  .nav-logo { height: 40px; }\n}\n.nav-links {\n  display: flex;\n  gap: 26px;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n}\n.nav-links a {\n  font-size: 13px;\n  letter-spacing: 0;\n  color: var(--ink-2);\n  padding: 8px 0;\n  transition: color 0.2s;\n  white-space: nowrap;\n}\n.nav-right {\n  margin-left: auto;\n  display: flex; align-items: center; gap: 14px;\n}\n.nav-portal {\n  font-family: var(--mono, ui-monospace, \"JetBrains Mono\", monospace);\n  font-size: 11px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  text-decoration: none;\n  padding: 6px 2px;\n  border-bottom: 1px solid transparent;\n  transition: color 0.2s ease, border-color 0.2s ease;\n}\n.nav-portal:hover { color: var(--clay); border-bottom-color: var(--clay); }\n.nav-divider {\n  width: 1px;\n  height: 18px;\n  background: var(--rule-2, rgba(31,31,31,0.18));\n  display: inline-block;\n}\n@media (max-width: 980px) {\n  .nav-portal { display: none; }\n  .nav-divider { display: none; }\n}\n@media (max-width: 1240px) {\n  .nav-links { gap: 18px; }\n  .nav-links a { font-size: 12.5px; }\n}\n@media (max-width: 1080px) {\n  .nav-links { gap: 14px; }\n  .nav-links a { font-size: 12px; }\n}\n@media (max-width: 980px) {\n  .nav-links { display: none; }\n  .nav-inner { height: 68px; gap: 20px; }\n}\n\n/* ============= Buttons ============= */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 22px;\n  font-family: var(--sans);\n  font-size: 13px;\n  letter-spacing: 0.04em;\n  font-weight: 500;\n  border: 1px solid var(--ink);\n  background: var(--ink);\n  color: var(--paper);\n  transition: background 0.2s, color 0.2s, border-color 0.2s;\n  cursor: pointer;\n}\n.btn:hover { background: var(--forest); }\n.btn .arrow { font-family: var(--serif); font-size: 18px; line-height: 1; transform: translateY(-1px); }\n.btn-ghost { background: transparent; color: var(--ink); border-color: var(--ink); }\n.btn-ghost:hover { background: var(--ink); color: var(--paper); }\n.btn-clay { background: var(--clay); border-color: var(--clay); color: var(--paper); }\n.btn-clay:hover { background: var(--clay-deep); border-color: var(--clay-deep); }\n.btn-sm { padding: 10px 16px; font-size: 12px; }\n\n.link-arrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  letter-spacing: 0.04em;\n  font-weight: 500;\n  color: var(--ink);\n  border-bottom: 1px solid var(--rule-2);\n  padding-bottom: 4px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.link-arrow:hover { color: var(--clay); border-bottom-color: var(--clay); }\n.link-arrow .arrow { font-family: var(--serif); font-size: 16px; transition: transform 0.2s; }\n.link-arrow:hover .arrow { transform: translateX(3px); }\n\n/* ============= Section scaffolding ============= */\nsection { position: relative; }\n.section-pad { padding: clamp(80px, 9vw, 144px) 0; }\n\n.section-head {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  gap: 48px;\n  margin-bottom: 72px;\n  align-items: start;\n}\n.section-head .label { padding-top: 14px; }\n@media (max-width: 800px) {\n  .section-head { grid-template-columns: 1fr; gap: 12px; margin-bottom: 40px; }\n}\n\n/* ============= Hero ============= */\n.hero {\n  background: var(--paper);\n  overflow: hidden;\n}\n.hero-grid {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: stretch;\n  min-height: 78vh;\n}\n@media (max-width: 1000px) { .hero-grid { grid-template-columns: 1fr; min-height: auto; } }\n\n.hero-left {\n  padding: clamp(56px, 8vw, 120px) clamp(48px, 5vw, 80px) clamp(56px, 8vw, 120px) 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n}\n@media (max-width: 1000px) { .hero-left { padding-right: 0; padding-bottom: 48px; } }\n\n.hero-right {\n  position: relative;\n  background: var(--paper-deep);\n}\n.hero-portrait {\n  width: 100%;\n  height: 100%;\n  min-height: 480px;\n  object-fit: cover;\n  object-position: center 25%;\n}\n\n/* ============= Anatomy strip ============= */\n.region-list {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  border-top: 1px solid var(--ink);\n  border-bottom: 1px solid var(--ink);\n}\n@media (max-width: 900px) { .region-list { grid-template-columns: repeat(2, 1fr); } }\n.region-list .reg {\n  padding: 32px 24px 36px;\n  border-right: 1px solid var(--rule);\n  cursor: pointer;\n  transition: background 0.25s, color 0.25s;\n  display: flex;\n  flex-direction: column;\n}\n.region-list .reg:last-child { border-right: none; }\n.region-list .reg:hover { background: var(--ink); color: var(--paper); }\n.region-list .reg .reg-num {\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  color: var(--ink-3);\n  display: block;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.region-list .reg:hover .reg-num { color: var(--clay); }\n.region-list .reg .reg-name {\n  font-family: var(--serif);\n  font-size: 34px;\n  line-height: 1.05;\n  letter-spacing: -0.01em;\n  margin-bottom: 16px;\n}\n.region-list .reg .reg-areas {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: auto;\n  padding-top: 12px;\n  border-top: 1px solid var(--rule);\n}\n.region-list .reg .reg-areas > span {\n  font-size: 14px;\n  font-family: var(--serif);\n  font-style: italic;\n  color: var(--ink-2);\n  line-height: 1.3;\n}\n.region-list .reg:hover .reg-areas > span { color: var(--paper); }\n.region-list .reg:hover .reg-areas { border-top-color: rgba(244,239,229,0.2); }\n\n/* ============= Course module rows ============= */\n.module-row {\n  display: grid;\n  grid-template-columns: 70px 1.4fr 2fr 140px;\n  align-items: center;\n  padding: 32px 0;\n  border-bottom: 1px solid var(--rule);\n  gap: 32px;\n  transition: padding 0.25s;\n}\n.module-row:hover { padding-left: 12px; }\n.module-row:hover .mod-name { color: var(--clay); }\n.module-row .mod-num {\n  font-size: 13px;\n  letter-spacing: 0.08em;\n  color: var(--clay);\n  font-weight: 500;\n}\n.module-row .mod-name {\n  font-family: var(--serif);\n  font-size: clamp(28px, 2.4vw, 40px);\n  line-height: 1.05;\n  letter-spacing: -0.012em;\n  transition: color 0.25s;\n}\n.module-row .mod-desc {\n  color: var(--ink-3);\n  font-size: 15px;\n  line-height: 1.55;\n}\n.module-row .mod-price {\n  font-family: var(--serif);\n  font-size: 28px;\n  text-align: right;\n}\n@media (max-width: 900px) {\n  .module-row { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }\n  .module-row .mod-price { text-align: left; }\n}\n\n/* ============= Footer ============= */\n.footer {\n  background: var(--ink);\n  color: var(--paper);\n  padding: 96px 0 40px;\n}\n.footer a:hover { color: var(--tan); }\n.footer-petowner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  flex-wrap: wrap;\n  padding-bottom: 52px;\n  margin-bottom: 56px;\n  border-bottom: 1px solid rgba(244,239,229,0.18);\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr 1fr;\n  gap: 56px;\n}\n@media (max-width: 800px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }\n.footer-col h4 {\n  font-size: 11px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--tan);\n  margin-bottom: 22px;\n  font-weight: 500;\n}\n.footer-col ul li { padding: 5px 0; font-size: 15px; color: rgba(244,239,229,0.78); }\n.footer-bottom {\n  margin-top: 80px;\n  padding-top: 32px;\n  border-top: 1px solid rgba(244,239,229,0.18);\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: rgba(244,239,229,0.6);\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n/* ============= Page hero ============= */\n.page-hero {\n  padding-top: 80px;\n  padding-bottom: 100px;\n  border-bottom: 1px solid var(--rule);\n}\n\n/* ============= Backgrounds ============= */\n.bg-ink { background: var(--ink); color: var(--paper); }\n.bg-ink .eyebrow { color: var(--tan); }\n.bg-forest { background: var(--forest); color: var(--paper); }\n.bg-cream { background: var(--cream); }\n.bg-paper-deep { background: var(--paper-deep); }\n\n/* Hero reveal — CSS-only, bulletproof */\n.hero-name {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: heroIn 1.1s cubic-bezier(0.2,0.7,0.2,1) 0.15s forwards;\n}\n.hero-name .line-2 {\n  display: inline-block;\n  opacity: 0;\n  transform: translateY(20px);\n  animation: heroIn 1.1s cubic-bezier(0.2,0.7,0.2,1) 0.35s forwards;\n}\n.hero-lede {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: heroIn 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.55s forwards;\n}\n.hero-ctas {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: heroIn 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.7s forwards;\n}\n.hero-eyebrow {\n  opacity: 0;\n  animation: heroIn 0.6s ease 0s forwards;\n}\n@keyframes heroIn {\n  to { opacity: 1; transform: translateY(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-name, .hero-name .line-2, .hero-lede, .hero-ctas, .hero-eyebrow { animation: none; opacity: 1; transform: none; }\n}\n\n/* ============= Anim helpers ============= */\n.fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }\n.fade-up.in { opacity: 1; transform: translateY(0); }\n\n/* Split-text — staggered word reveal */\n.split-word {\n  display: inline-block;\n  opacity: 0;\n  transform: translateY(60%) skewY(4deg);\n  transition: opacity 0.9s cubic-bezier(0.2,0.7,0.2,1), transform 0.9s cubic-bezier(0.2,0.7,0.2,1);\n}\n.split-word.in { opacity: 1; transform: translateY(0) skewY(0); }\n.split-mask { display: inline-block; overflow: hidden; padding-bottom: 0.08em; line-height: inherit; vertical-align: bottom; }\n\n/* Hero ken-burns drift */\n@keyframes drift {\n  0%   { transform: scale(1.04) translate(0,0); }\n  50%  { transform: scale(1.07) translate(-1.2%, -1%); }\n  100% { transform: scale(1.04) translate(0,0); }\n}\n.hero-portrait { animation: drift 24s ease-in-out infinite; }\n\n/* Marquee */\n.marquee {\n  overflow: hidden;\n  border-top: 1px solid var(--rule);\n  border-bottom: 1px solid var(--rule);\n  background: var(--paper);\n  padding: 20px 0;\n  white-space: nowrap;\n}\n.marquee-track {\n  display: inline-flex;\n  gap: 64px;\n  animation: marquee 48s linear infinite;\n  padding-left: 64px;\n  will-change: transform;\n}\n.marquee-item {\n  font-family: var(--serif);\n  font-size: clamp(22px, 1.8vw, 28px);\n  font-style: italic;\n  color: var(--ink);\n  display: inline-flex;\n  align-items: center;\n  gap: 64px;\n}\n.marquee-item::after {\n  content: '✦';\n  color: var(--clay);\n  font-style: normal;\n  font-size: 0.7em;\n}\n@keyframes marquee {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n\n/* Practice card hover */\n.practice-card {\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.4s cubic-bezier(0.2,0.7,0.2,1);\n}\n.practice-card::after {\n  content: '';\n  position: absolute;\n  left: 0; right: 0; bottom: 0;\n  height: 3px;\n  background: var(--clay);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.5s cubic-bezier(0.2,0.7,0.2,1);\n}\n.practice-card:hover { transform: translateY(-4px); }\n.practice-card:hover::after { transform: scaleX(1); }\n\n/* Region hover fill */\n.region-list .reg {\n  position: relative;\n  overflow: hidden;\n}\n.region-list .reg::before {\n  content: '';\n  position: absolute;\n  left: 0; right: 0; top: 100%;\n  height: 100%;\n  background: var(--ink);\n  transition: top 0.45s cubic-bezier(0.2,0.7,0.2,1);\n  z-index: 0;\n}\n.region-list .reg:hover { background: transparent; }\n.region-list .reg:hover::before { top: 0; }\n.region-list .reg > * { position: relative; z-index: 1; }\n.region-list .reg:hover { color: var(--paper); }\n.region-list .reg:hover .reg-num { color: var(--clay); }\n.region-list .reg:hover .reg-sub { color: var(--ink-4); }\n\n/* Nav link underline animation */\n.nav-links a {\n  position: relative;\n}\n.nav-links a::after {\n  content: '';\n  position: absolute;\n  left: 0; right: 0; bottom: 0;\n  height: 1px;\n  background: var(--clay);\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.35s cubic-bezier(0.2,0.7,0.2,1);\n}\n.nav-links a:hover::after, .nav-links a.active::after { transform: scaleX(1); transform-origin: left; }\n.nav-links a, .nav-links a.active { border-bottom: none !important; }\n\n/* Btn hover micro-motion */\n.btn { transition: background 0.25s, color 0.25s, transform 0.25s cubic-bezier(0.2,0.7,0.2,1); }\n.btn:hover { transform: translateY(-1px); }\n.btn .arrow { transition: transform 0.25s cubic-bezier(0.2,0.7,0.2,1); }\n.btn:hover .arrow { transform: translate(3px, -1px); }\n\n/* Subtle eyebrow dot pulse */\n.eyebrow-dot {\n  display: inline-block;\n  width: 6px; height: 6px;\n  background: var(--clay);\n  border-radius: 50%;\n  margin-right: 10px;\n  vertical-align: 1px;\n  box-shadow: 0 0 0 0 var(--clay);\n  animation: dot-pulse 2.6s ease-out infinite;\n}\n@keyframes dot-pulse {\n  0%   { box-shadow: 0 0 0 0 rgba(177,106,72,0.55); }\n  70%  { box-shadow: 0 0 0 10px rgba(177,106,72,0); }\n  100% { box-shadow: 0 0 0 0 rgba(177,106,72,0); }\n}\n\n/* Stats count container */\n.stat-num {\n  display: inline-block;\n  font-variant-numeric: tabular-nums;\n}\n\n/* Section head label slight in */\n.section-head .label .eyebrow {\n  position: relative;\n  padding-left: 28px;\n}\n.section-head .label .eyebrow::before {\n  content: '';\n  position: absolute;\n  left: 0; top: 50%;\n  width: 18px; height: 1px;\n  background: var(--clay);\n}\n\n/* Reduce motion preference */\n@media (prefers-reduced-motion: reduce) {\n  .hero-portrait { animation: none; }\n  .marquee-track { animation: none; }\n  .split-word { transition-duration: 0.3s !important; }\n  .eyebrow-dot { animation: none; }\n}\n";
  var st=document.createElement('style');st.textContent=__css;document.head.appendChild(st);
  var lk=document.createElement('link');lk.rel='stylesheet';lk.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Dancing+Script:wght@500;600;700&display=swap";document.head.appendChild(lk);
  (function(){
/* global React, ReactDOM */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ========== TWEAKS ========== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#B16A48",
  "surface": "warm-bone"
} /*EDITMODE-END*/;
function TweaksRoot() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--clay', t.accent);
    r.style.setProperty('--clay-deep', shade(t.accent, -0.18));
    const surfaces = {
      'warm-bone': ['#F4EFE5', '#FBF8F1', '#E8E1D2'],
      'sage-bone': ['#EFEDE2', '#F8F6EB', '#DCDBC4'],
      'mist': ['#EEEAE0', '#F7F2E7', '#DAD3C0']
    };
    const [p, c, pd] = surfaces[t.surface] || surfaces['warm-bone'];
    r.style.setProperty('--paper', p);
    r.style.setProperty('--cream', c);
    r.style.setProperty('--paper-deep', pd);
  }, [t.accent, t.surface]);
  return /*#__PURE__*/React.createElement(window.TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Color"
  }, /*#__PURE__*/React.createElement(window.TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ['#B16A48', '#8C4F33', '#5D6B4D', '#1F2A22', '#7C8A6C', '#2A2A2A'],
    onChange: v => setTweak('accent', v)
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Surface",
    value: t.surface,
    options: [{
      value: 'warm-bone',
      label: 'Bone'
    }, {
      value: 'sage-bone',
      label: 'Sage'
    }, {
      value: 'mist',
      label: 'Mist'
    }],
    onChange: v => setTweak('surface', v)
  })));
}
function shade(hex, percent) {
  const c = hex.replace('#', '');
  const num = parseInt(c, 16);
  let r = (num >> 16) + Math.round(255 * percent);
  let g = (num >> 8 & 0xff) + Math.round(255 * percent);
  let b = (num & 0xff) + Math.round(255 * percent);
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* ========== NAV ========== */
function Nav({
  current
}) {
  const links = [{
    href: '/',
    label: 'Practice',
    key: 'home'
  }, {
    href: '/services',
    label: 'Services',
    key: 'services'
  }, {
    href: '/course',
    label: 'Course',
    key: 'course'
  }, {
    href: '/network',
    label: 'Network',
    key: 'network'
  }, {
    href: '/lectures',
    label: 'Lectures',
    key: 'lectures'
  }, {
    href: '/achievements',
    label: 'Achievements',
    key: 'achievements'
  }, {
    href: '/about',
    label: 'About',
    key: 'about'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "nav-brand",
    "aria-label": "Dr. Debra Canapp"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6a17bfbf0751a89e9e8b9bdc/6a1b666f850dcc5431b5ad42_logo-mark.png",
    alt: "",
    className: "nav-logo"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    className: "nav-name"
  }, "Dr. Debra Canapp"), /*#__PURE__*/React.createElement("div", {
    className: "nav-sub"
  }, "Veterinary Sports Medicine"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    href: l.href,
    className: current === l.key ? 'active' : ''
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/portal",
    className: "nav-portal",
    "aria-label": "Portal login \u2014 submit a case"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    style: {
      marginRight: 6
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "5.5",
    width: "7",
    height: "5",
    rx: "0.5",
    stroke: "currentColor",
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 5.5V4a2 2 0 0 1 4 0v1.5",
    stroke: "currentColor",
    strokeWidth: "1.1"
  })), "Portal login"), /*#__PURE__*/React.createElement("span", {
    className: "nav-divider",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-sm"
  }, "Contact"))));
}

/* ========== FOOTER ========== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-petowner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 12
    }
  }, "Are you a pet owner?"), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: 'clamp(22px,2.4vw,30px)',
      lineHeight: 1.25,
      color: 'var(--paper)',
      textWrap: 'balance'
    }
  }, "Looking for a musculoskeletal ultrasound for your dog? Find a clinician trained by Dr.\xA0Canapp near you.")), /*#__PURE__*/React.createElement("a", {
    href: "/network",
    className: "btn btn-clay",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "See the network ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6a17bfbf0751a89e9e8b9bdc/6a1b666f850dcc5431b5ad42_logo-mark.png",
    alt: "Dr. Debra Canapp",
    style: {
      height: 96,
      marginBottom: 24,
      filter: 'invert(1) brightness(1.4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'rgba(244,239,229,0.78)',
      maxWidth: 340
    }
  }, "Veterinary sports medicine and diagnostic musculoskeletal ultrasound.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Practice"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/services"
  }, "Services")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/services"
  }, "Refer a case")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/services"
  }, "Remote reads")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Education"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/course"
  }, "The Course")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/course"
  }, "Modules")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/course"
  }, "Enroll")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com"
  }, "info@drdebracanapp.com")), /*#__PURE__*/React.createElement("li", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Send a message via the contact form")), /*#__PURE__*/React.createElement("li", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/portal",
    style: {
      color: 'var(--tan)'
    }
  }, "Referral portal \xB7 sign in \u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " Dr. Debra A. Canapp"), /*#__PURE__*/React.createElement("div", null, "DVM \xB7 CCRT \xB7 CVA \xB7 Diplomate, ACVSMR"))));
}

/* ========== Section head helper ========== */
function SectionHead({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, label)), /*#__PURE__*/React.createElement("div", null, children));
}

/* ========== Reveal on scroll ========== */
function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach(el => io.observe(el));
    // Fallback: if IntersectionObserver never reports (offscreen/print/
    // screenshot contexts), reveal anything still hidden so content is
    // never stuck at opacity:0.
    const fallback = setTimeout(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (!el.classList.contains('in') && r.top < window.innerHeight) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, 1200);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, [ref]);
}
Object.assign(window, {
  Nav,
  Footer,
  SectionHead,
  TweaksRoot,
  useReveal,
  Marquee,
  CountUp,
  PetOwnerNote
});

/* ========== Pet-owner pointer strip ========== */
function PetOwnerNote({
  surface
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Pet Owner Note",
    style: {
      background: surface || 'var(--cream)',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container petowner-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "petowner-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)',
      whiteSpace: 'nowrap'
    }
  }, "Pet owner?"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--ink-2)',
      margin: 0,
      maxWidth: 720
    }
  }, "Dr.\xA0Canapp works through veterinary referral \u2014 but the clinicians she has trained perform MSK ultrasound in their own practices. The network map shows where to find one near you.")), /*#__PURE__*/React.createElement("a", {
    href: "/network",
    className: "btn btn-clay",
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Find a provider near you ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("style", null, `
        .petowner-inner { display:flex; align-items:center; justify-content:space-between; gap:32px; padding:26px var(--pad); flex-wrap:wrap; }
        .petowner-text { display:flex; align-items:baseline; gap:20px; flex-wrap:wrap; flex:1 1 480px; }
        @media (max-width:680px){ .petowner-text { gap:8px; } }
      `));
}

/* ========== Marquee ========== */
function Marquee({
  items
}) {
  const seq = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, seq.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "marquee-item"
  }, it))));
}

/* ========== CountUp ========== */
function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 1.4
}) {
  const ref = useRef(null);
  const [val, setVal] = React.useState(typeof to === 'number' ? 0 : to);
  useEffect(() => {
    if (typeof to !== 'number' || !ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = t => {
            const p = Math.min(1, (t - start) / (duration * 1000));
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.4
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "stat-num"
  }, prefix, val, suffix);
}
})();
  (function(){
/* global React, ReactDOM */
const {
  useRef
} = React;
function Home() {
  const ref = useRef(null);
  window.useReveal(ref);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React.createElement(window.Nav, {
    current: "home"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(window.Marquee, {
    items: ['Diagnostic MSK Ultrasound', 'Sports Medicine', 'Regenerative Guidance', 'Canine Rehabilitation', 'Remote-read Consultation', 'Continuing Education', 'Diplomate · ACVSMR']
  }), /*#__PURE__*/React.createElement(Practice, null), /*#__PURE__*/React.createElement(Regions, null), /*#__PURE__*/React.createElement(Course, null), /*#__PURE__*/React.createElement(Visit, null), /*#__PURE__*/React.createElement(window.Footer, null));
}

/* ============================================================
   HERO — portrait + giant name, that's it
   ============================================================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-dot"
  }), "Diagnostic MSK Ultrasound \xB7 worldwide"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display hero-name",
    style: {
      textWrap: 'balance'
    }
  }, "Dr. Debra", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "line-2",
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "Canapp")), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-lede",
    style: {
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, "A pioneer in canine musculoskeletal ultrasound and Diplomate of the American College of Veterinary Sports Medicine & Rehabilitation, Dr. Debra Canapp specializes in advanced diagnostic MSK ultrasound, second-opinion image review for referring veterinarians, and global education in the modality through her comprehensive training programs. Her work helps clinicians identify soft tissue and musculoskeletal pathology that may be difficult, limited, or impractical to evaluate with traditional imaging alone."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas",
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/services",
    className: "btn"
  }, "Services ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn btn-ghost"
  }, "The Course"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-right"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6a17bfbf0751a89e9e8b9bdc/6a1b66828b7d2d08a16a30aa_portrait-doberman.png",
    alt: "Dr. Debra Canapp",
    className: "hero-portrait"
  })))));
}

/* ============================================================
   PRACTICE — two pillars
   ============================================================ */
function Practice() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Practice"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Purpose"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 1000,
      textWrap: 'balance'
    }
  }, "Helping diagnose what other imaging quietly misses, and teaching the modality to veterinarians of tomorrow."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    },
    className: "practice-grid"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/services",
    style: {
      display: 'block',
      background: 'var(--cream)',
      border: '1px solid var(--rule)',
      padding: '48px 40px',
      transition: 'border-color 0.25s'
    },
    className: "practice-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "For Veterinarians"), /*#__PURE__*/React.createElement("h3", {
    className: "h-block",
    style: {
      marginTop: 24
    }
  }, "The Clinic"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      marginTop: 20,
      color: 'var(--ink-2)',
      maxWidth: 480
    }
  }, "On-site diagnostic MSK ultrasound, regenerative medicine guidance, and rehabilitation \u2014 for the cases you'd otherwise refer out."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "link-arrow"
  }, "Services & referrals ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("a", {
    href: "/course",
    style: {
      display: 'block',
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '48px 40px',
      transition: 'background 0.25s'
    },
    className: "practice-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)'
    }
  }, "For Veterinarians"), /*#__PURE__*/React.createElement("h3", {
    className: "h-block",
    style: {
      marginTop: 24,
      color: 'var(--paper)'
    }
  }, "The Course"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      marginTop: 20,
      color: 'rgba(244,239,229,0.78)',
      maxWidth: 480
    }
  }, "The Canine MSK Ultrasound curriculum \u2014 self-paced lectures, graded homework, and remote-read access. Built by the practitioner you'd ask for the read anyway."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "link-arrow",
    style: {
      color: 'var(--paper)',
      borderBottomColor: 'rgba(244,239,229,0.3)'
    }
  }, "Curriculum & enrollment ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("style", null, `
          .practice-card:hover { border-color: var(--ink) !important; }
          .practice-card.bg-ink:hover { background: var(--forest) !important; }
          @media (max-width: 900px) { .practice-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
        `)));
}

/* ============================================================
   REGIONS
   ============================================================ */
function Regions() {
  const regions = [{
    name: 'Shoulder',
    areas: ['Biceps', 'Supraspinatus']
  }, {
    name: 'Elbow',
    areas: ['Medial compartment']
  }, {
    name: 'Iliopsoas',
    areas: ['Strain', 'Enthesopathy']
  }, {
    name: 'Stifle',
    areas: ['Cruciate', 'Meniscus']
  }, {
    name: 'Tarsus',
    areas: ['Achilles complex']
  }, {
    name: 'Carpus',
    areas: ['Hyperextension']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad bg-cream",
    "data-screen-label": "Regions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "The Curriculum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 900,
      textWrap: 'balance'
    }
  }, "Six anatomical regions. One probe. Your trained eye."))), /*#__PURE__*/React.createElement("div", {
    className: "region-list"
  }, regions.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: r.name,
    className: "reg",
    href: `/course#${r.name.toLowerCase()}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "reg-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "reg-name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "reg-areas"
  }, r.areas.map(a => /*#__PURE__*/React.createElement("span", {
    key: a
  }, a))))))));
}

/* ============================================================
   COURSE TEASE
   ============================================================ */
function Course() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink section-pad",
    "data-screen-label": "Course Tease"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    },
    className: "course-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)'
    }
  }, "The Canine MSK Ultrasound Course"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      marginTop: 24,
      textWrap: 'balance'
    }
  }, "Learn to read what the films can't show you."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 24,
      maxWidth: 540
    }
  }, "A self-paced online curriculum across six anatomical regions, with homework graded personally by Dr. Canapp. Course materials are yours for 12 months from enrollment, with the option to extend access in 3- or 6-month intervals."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn btn-clay"
  }, "Explore the course ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/course#pricing",
    className: "btn btn-ghost",
    style: {
      borderColor: 'rgba(244,239,229,0.4)',
      color: 'var(--paper)'
    }
  }, "View pricing"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'rgba(244,239,229,0.18)'
    }
  }, [[121, 'Lessons', ''], [6, 'Modules', ''], ['$250 – $7,975', 'Tuition range', ''], ['12mo', 'Initial access', '']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: '32px 28px',
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: typeof n === 'number' || String(n).length <= 5 ? 'clamp(48px,5vw,80px)' : 'clamp(26px,2.8vw,40px)',
      lineHeight: typeof n === 'number' || String(n).length <= 5 ? 1 : 1.08,
      letterSpacing: '-0.02em'
    }
  }, typeof n === 'number' ? /*#__PURE__*/React.createElement(window.CountUp, {
    to: n
  }) : n), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginTop: 14
    }
  }, l)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .course-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`)));
}

/* ============================================================
   VISIT
   ============================================================ */
function Visit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Visit",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 80,
      alignItems: 'end'
    },
    className: "visit-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginTop: 24,
      maxWidth: 880,
      textWrap: 'balance'
    }
  }, "Course inquiries, lecture invitations, and collaborations."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 580
    }
  }, "Dr. Canapp travels to clinics and teaching engagements internationally. The fastest path to a conversation is email, or through the contact form on this site."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn"
  }, "Email ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#contact-form",
    className: "btn btn-ghost"
  }, "Contact form"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--rule)',
      paddingLeft: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Direct"), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: 22,
      lineHeight: 1.4,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com"
  }, "info@drdebracanapp.com")), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 16,
      color: 'var(--ink-3)'
    }
  }, "Referrals, course inquiries, lecture invitations, and remote-read questions all welcome."))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .visit-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .visit-grid > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--rule); padding-top: 32px !important; } }`)));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/']=Home;
})();
  (function go(){ if(!(window.React&&window.ReactDOM&&document.body)){return setTimeout(go,20);} var root=document.getElementById('root'); if(!root){root=document.createElement('div');root.id='root';document.body.insertBefore(root,document.body.firstChild);} var p=location.pathname.replace(/\/+$/,'')||'/'; var C=(window.__ROUTES||{})[p]||(window.__ROUTES||{})['/']; if(C){ReactDOM.createRoot(root).render(React.createElement(C));} })();
})();
