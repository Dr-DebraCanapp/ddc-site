/* Dr. Debra Canapp — full site bundle (auto-generated) */
(function(){
  var __css="/* ============================================================\n   Dr. Debra Canapp — Editorial system\n   Two fonts only: Cormorant Garamond (display) + Inter (everything else)\n   Earthy + boutique. Calm. Less.\n   ============================================================ */\n\n:root {\n  /* Surfaces */\n  --paper: #F4EFE5;\n  --cream: #FBF8F1;\n  --paper-deep: #E8E1D2;\n\n  /* Inks */\n  --ink: #18211C;\n  --ink-2: #2D3A2F;\n  --ink-3: #5C6759;\n  --ink-4: #8B9482;\n\n  /* Tonal */\n  --forest: #1F2A22;\n  --sage: #7C8A6C;\n  --tan: #C2A878;\n  --clay: #B16A48;\n  --clay-deep: #8C4F33;\n\n  /* Rules */\n  --rule: rgba(24,33,28,0.12);\n  --rule-2: rgba(24,33,28,0.24);\n\n  /* Type — JUST TWO */\n  --serif: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;\n  --sans:  'Inter', -apple-system, system-ui, sans-serif;\n\n  --maxw: 1360px;\n  --pad: 64px;\n}\n\n@media (max-width: 900px) { :root { --pad: 24px; } }\n\n* , *::before, *::after { box-sizing: border-box; }\nhtml, body { margin: 0; padding: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; }\nbody { font-size: 16px; line-height: 1.6; overflow-x: hidden; }\nimg { display: block; max-width: 100%; }\na { color: inherit; text-decoration: none; }\nbutton { font-family: inherit; cursor: pointer; border: none; background: none; padding: 0; color: inherit; }\nh1, h2, h3, h4, h5 { margin: 0; font-weight: 400; }\np { margin: 0; }\nul, ol { margin: 0; padding: 0; list-style: none; }\n::selection { background: var(--ink); color: var(--paper); }\n\n/* ============= Reusable ============= */\n.container { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--pad); width: 100%; }\n\n.eyebrow {\n  font-family: var(--sans);\n  font-size: 11px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--ink-3);\n  font-weight: 500;\n}\n\n.serif { font-family: var(--serif); font-weight: 400; letter-spacing: -0.01em; }\n.serif-it { font-family: var(--serif); font-style: italic; font-weight: 400; }\n\n.h-display { font-family: var(--serif); font-size: clamp(56px, 8vw, 128px); line-height: 0.96; letter-spacing: -0.02em; font-weight: 400; }\n.h-section { font-family: var(--serif); font-size: clamp(40px, 5vw, 76px); line-height: 1.02; letter-spacing: -0.015em; font-weight: 400; }\n.h-block   { font-family: var(--serif); font-size: clamp(26px, 2.8vw, 40px); line-height: 1.08; letter-spacing: -0.012em; font-weight: 400; }\n\n.lede { font-family: var(--serif); font-size: clamp(19px, 1.4vw, 24px); line-height: 1.5; color: var(--ink-2); font-weight: 400; }\n.body { font-size: 16px; line-height: 1.7; color: var(--ink-2); }\n.body-lg { font-size: 18px; line-height: 1.65; color: var(--ink-2); }\n.small { font-size: 14px; line-height: 1.5; color: var(--ink-3); }\n\n/* ============= Logo sticker ============= */\n.logo-sticker {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background: var(--ink);\n  padding: 10px;\n  box-shadow: 0 6px 18px -8px rgba(24,33,28,0.4);\n  transform: rotate(-6deg);\n  transition: transform 0.4s cubic-bezier(0.2,0.7,0.2,1), box-shadow 0.4s;\n  overflow: hidden;\n}\n.logo-sticker::before {\n  content: '';\n  position: absolute;\n  inset: 6px;\n  border-radius: 50%;\n  border: 1px dashed rgba(244,239,229,0.32);\n  pointer-events: none;\n}\n.logo-sticker:hover { transform: rotate(2deg) scale(1.04); box-shadow: 0 10px 24px -6px rgba(24,33,28,0.5); }\n.logo-sticker img {\n  width: 100%; height: 100%;\n  object-fit: contain;\n  filter: invert(1) brightness(1.3);\n}\n\n/* Lighter sticker variant */\n.logo-sticker.bone { background: var(--paper); }\n.logo-sticker.bone::before { border-color: rgba(24,33,28,0.3); }\n.logo-sticker.bone img { filter: none; }\n\n.logo-sticker.clay { background: var(--clay); }\n.logo-sticker.clay::before { border-color: rgba(244,239,229,0.4); }\n\n/* Footer big sticker */\n.logo-sticker.lg { width: 120px; height: 120px; padding: 16px; }\n\n/* ============= Nav ============= */\n.nav-bar {\n  position: sticky; top: 0; z-index: 50;\n  background: rgba(244,239,229,0.92);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-bottom: 1px solid var(--rule);\n}\n.nav-inner {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  height: 84px;\n}\n.nav-brand {\n  display: flex; align-items: center; gap: 14px;\n  flex: 0 0 auto;\n  position: relative;\n  z-index: 2;\n}\n.nav-logo {\n  height: 50px;\n  width: auto;\n  display: block;\n  transform-origin: left top;\n  transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1),\n              filter 460ms ease;\n  will-change: transform;\n}\n.nav-brand > span:nth-child(2) {\n  transition: opacity 220ms ease, transform 460ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.nav-brand:hover .nav-logo,\n.nav-brand:focus-visible .nav-logo {\n  transform: translateY(2px) scale(2.1);\n  filter: drop-shadow(0 14px 26px rgba(24, 33, 28, 0.22));\n}\n.nav-brand:hover > span:nth-child(2),\n.nav-brand:focus-visible > span:nth-child(2) {\n  opacity: 0;\n  transform: translateX(-6px);\n  pointer-events: none;\n}\n@media (max-width: 700px) {\n  .nav-logo { height: 44px; }\n}\n.nav-brand .nav-name {\n  font-family: var(--serif);\n  font-size: 19px;\n  letter-spacing: -0.01em;\n  color: var(--ink);\n  line-height: 1.1;\n  white-space: nowrap;\n}\n.nav-brand .nav-sub {\n  font-size: 9.5px;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-3);\n  margin-top: 4px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n@media (max-width: 1180px) {\n  .nav-brand > span:nth-child(2) { display: none; }\n}\n@media (max-width: 700px) {\n  .nav-logo { height: 40px; }\n}\n.nav-links {\n  display: flex;\n  gap: 26px;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n}\n.nav-links a {\n  font-size: 13px;\n  letter-spacing: 0;\n  color: var(--ink-2);\n  padding: 8px 0;\n  transition: color 0.2s;\n  white-space: nowrap;\n}\n.nav-right {\n  margin-left: auto;\n  display: flex; align-items: center; gap: 14px;\n}\n.nav-portal {\n  font-family: var(--mono, ui-monospace, \"JetBrains Mono\", monospace);\n  font-size: 11px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--ink-2);\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  text-decoration: none;\n  padding: 6px 2px;\n  border-bottom: 1px solid transparent;\n  transition: color 0.2s ease, border-color 0.2s ease;\n}\n.nav-portal:hover { color: var(--clay); border-bottom-color: var(--clay); }\n.nav-divider {\n  width: 1px;\n  height: 18px;\n  background: var(--rule-2, rgba(31,31,31,0.18));\n  display: inline-block;\n}\n@media (max-width: 980px) {\n  .nav-portal { display: none; }\n  .nav-divider { display: none; }\n}\n@media (max-width: 1240px) {\n  .nav-links { gap: 18px; }\n  .nav-links a { font-size: 12.5px; }\n}\n@media (max-width: 1080px) {\n  .nav-links { gap: 14px; }\n  .nav-links a { font-size: 12px; }\n}\n@media (max-width: 980px) {\n  .nav-links { display: none; }\n  .nav-inner { height: 68px; gap: 20px; }\n}\n\n/* ============= Buttons ============= */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 22px;\n  font-family: var(--sans);\n  font-size: 13px;\n  letter-spacing: 0.04em;\n  font-weight: 500;\n  border: 1px solid var(--ink);\n  background: var(--ink);\n  color: var(--paper);\n  transition: background 0.2s, color 0.2s, border-color 0.2s;\n  cursor: pointer;\n}\n.btn:hover { background: var(--forest); }\n.btn .arrow { font-family: var(--serif); font-size: 18px; line-height: 1; transform: translateY(-1px); }\n.btn-ghost { background: transparent; color: var(--ink); border-color: var(--ink); }\n.btn-ghost:hover { background: var(--ink); color: var(--paper); }\n.btn-clay { background: var(--clay); border-color: var(--clay); color: var(--paper); }\n.btn-clay:hover { background: var(--clay-deep); border-color: var(--clay-deep); }\n.btn-sm { padding: 10px 16px; font-size: 12px; }\n\n.link-arrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  letter-spacing: 0.04em;\n  font-weight: 500;\n  color: var(--ink);\n  border-bottom: 1px solid var(--rule-2);\n  padding-bottom: 4px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.link-arrow:hover { color: var(--clay); border-bottom-color: var(--clay); }\n.link-arrow .arrow { font-family: var(--serif); font-size: 16px; transition: transform 0.2s; }\n.link-arrow:hover .arrow { transform: translateX(3px); }\n\n/* ============= Section scaffolding ============= */\nsection { position: relative; }\n.section-pad { padding: clamp(80px, 9vw, 144px) 0; }\n\n.section-head {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  gap: 48px;\n  margin-bottom: 72px;\n  align-items: start;\n}\n.section-head .label { padding-top: 14px; }\n@media (max-width: 800px) {\n  .section-head { grid-template-columns: 1fr; gap: 12px; margin-bottom: 40px; }\n}\n\n/* ============= Hero ============= */\n.hero {\n  background: var(--paper);\n  overflow: hidden;\n}\n.hero-grid {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: stretch;\n  min-height: 78vh;\n}\n@media (max-width: 1000px) { .hero-grid { grid-template-columns: 1fr; min-height: auto; } }\n\n.hero-left {\n  padding: clamp(56px, 8vw, 120px) clamp(48px, 5vw, 80px) clamp(56px, 8vw, 120px) 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n}\n@media (max-width: 1000px) { .hero-left { padding-right: 0; padding-bottom: 48px; } }\n\n.hero-right {\n  position: relative;\n  background: var(--paper-deep);\n}\n.hero-portrait {\n  width: 100%;\n  height: 100%;\n  min-height: 480px;\n  object-fit: cover;\n  object-position: center 25%;\n}\n\n/* ============= Anatomy strip ============= */\n.region-list {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  border-top: 1px solid var(--ink);\n  border-bottom: 1px solid var(--ink);\n}\n@media (max-width: 900px) { .region-list { grid-template-columns: repeat(2, 1fr); } }\n.region-list .reg {\n  padding: 32px 24px 36px;\n  border-right: 1px solid var(--rule);\n  cursor: pointer;\n  transition: background 0.25s, color 0.25s;\n  display: flex;\n  flex-direction: column;\n}\n.region-list .reg:last-child { border-right: none; }\n.region-list .reg:hover { background: var(--ink); color: var(--paper); }\n.region-list .reg .reg-num {\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  color: var(--ink-3);\n  display: block;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.region-list .reg:hover .reg-num { color: var(--clay); }\n.region-list .reg .reg-name {\n  font-family: var(--serif);\n  font-size: 34px;\n  line-height: 1.05;\n  letter-spacing: -0.01em;\n  margin-bottom: 16px;\n}\n.region-list .reg .reg-areas {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: auto;\n  padding-top: 12px;\n  border-top: 1px solid var(--rule);\n}\n.region-list .reg .reg-areas > span {\n  font-size: 14px;\n  font-family: var(--serif);\n  font-style: italic;\n  color: var(--ink-2);\n  line-height: 1.3;\n}\n.region-list .reg:hover .reg-areas > span { color: var(--paper); }\n.region-list .reg:hover .reg-areas { border-top-color: rgba(244,239,229,0.2); }\n\n/* ============= Course module rows ============= */\n.module-row {\n  display: grid;\n  grid-template-columns: 70px 1.4fr 2fr 140px;\n  align-items: center;\n  padding: 32px 0;\n  border-bottom: 1px solid var(--rule);\n  gap: 32px;\n  transition: padding 0.25s;\n}\n.module-row:hover { padding-left: 12px; }\n.module-row:hover .mod-name { color: var(--clay); }\n.module-row .mod-num {\n  font-size: 13px;\n  letter-spacing: 0.08em;\n  color: var(--clay);\n  font-weight: 500;\n}\n.module-row .mod-name {\n  font-family: var(--serif);\n  font-size: clamp(28px, 2.4vw, 40px);\n  line-height: 1.05;\n  letter-spacing: -0.012em;\n  transition: color 0.25s;\n}\n.module-row .mod-desc {\n  color: var(--ink-3);\n  font-size: 15px;\n  line-height: 1.55;\n}\n.module-row .mod-price {\n  font-family: var(--serif);\n  font-size: 28px;\n  text-align: right;\n}\n@media (max-width: 900px) {\n  .module-row { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }\n  .module-row .mod-price { text-align: left; }\n}\n\n/* ============= Footer ============= */\n.footer {\n  background: var(--ink);\n  color: var(--paper);\n  padding: 96px 0 40px;\n}\n.footer a:hover { color: var(--tan); }\n.footer-petowner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  flex-wrap: wrap;\n  padding-bottom: 52px;\n  margin-bottom: 56px;\n  border-bottom: 1px solid rgba(244,239,229,0.18);\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr 1fr;\n  gap: 56px;\n}\n@media (max-width: 800px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }\n.footer-col h4 {\n  font-size: 11px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--tan);\n  margin-bottom: 22px;\n  font-weight: 500;\n}\n.footer-col ul li { padding: 5px 0; font-size: 15px; color: rgba(244,239,229,0.78); }\n.footer-bottom {\n  margin-top: 80px;\n  padding-top: 32px;\n  border-top: 1px solid rgba(244,239,229,0.18);\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: rgba(244,239,229,0.6);\n  gap: 24px;\n  flex-wrap: wrap;\n}\n\n/* ============= Page hero ============= */\n.page-hero {\n  padding-top: 80px;\n  padding-bottom: 100px;\n  border-bottom: 1px solid var(--rule);\n}\n\n/* ============= Backgrounds ============= */\n.bg-ink { background: var(--ink); color: var(--paper); }\n.bg-ink .eyebrow { color: var(--tan); }\n.bg-forest { background: var(--forest); color: var(--paper); }\n.bg-cream { background: var(--cream); }\n.bg-paper-deep { background: var(--paper-deep); }\n\n/* Hero reveal — CSS-only, bulletproof */\n.hero-name {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: heroIn 1.1s cubic-bezier(0.2,0.7,0.2,1) 0.15s forwards;\n}\n.hero-name .line-2 {\n  display: inline-block;\n  opacity: 0;\n  transform: translateY(20px);\n  animation: heroIn 1.1s cubic-bezier(0.2,0.7,0.2,1) 0.35s forwards;\n}\n.hero-lede {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: heroIn 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.55s forwards;\n}\n.hero-ctas {\n  opacity: 0;\n  transform: translateY(16px);\n  animation: heroIn 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.7s forwards;\n}\n.hero-eyebrow {\n  opacity: 0;\n  animation: heroIn 0.6s ease 0s forwards;\n}\n@keyframes heroIn {\n  to { opacity: 1; transform: translateY(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-name, .hero-name .line-2, .hero-lede, .hero-ctas, .hero-eyebrow { animation: none; opacity: 1; transform: none; }\n}\n\n/* ============= Anim helpers ============= */\n.fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }\n.fade-up.in { opacity: 1; transform: translateY(0); }\n\n/* Split-text — staggered word reveal */\n.split-word {\n  display: inline-block;\n  opacity: 0;\n  transform: translateY(60%) skewY(4deg);\n  transition: opacity 0.9s cubic-bezier(0.2,0.7,0.2,1), transform 0.9s cubic-bezier(0.2,0.7,0.2,1);\n}\n.split-word.in { opacity: 1; transform: translateY(0) skewY(0); }\n.split-mask { display: inline-block; overflow: hidden; padding-bottom: 0.08em; line-height: inherit; vertical-align: bottom; }\n\n/* Hero ken-burns drift */\n@keyframes drift {\n  0%   { transform: scale(1.04) translate(0,0); }\n  50%  { transform: scale(1.07) translate(-1.2%, -1%); }\n  100% { transform: scale(1.04) translate(0,0); }\n}\n.hero-portrait { animation: drift 24s ease-in-out infinite; }\n\n/* Marquee */\n.marquee {\n  overflow: hidden;\n  border-top: 1px solid var(--rule);\n  border-bottom: 1px solid var(--rule);\n  background: var(--paper);\n  padding: 20px 0;\n  white-space: nowrap;\n}\n.marquee-track {\n  display: inline-flex;\n  gap: 64px;\n  animation: marquee 48s linear infinite;\n  padding-left: 64px;\n  will-change: transform;\n}\n.marquee-item {\n  font-family: var(--serif);\n  font-size: clamp(22px, 1.8vw, 28px);\n  font-style: italic;\n  color: var(--ink);\n  display: inline-flex;\n  align-items: center;\n  gap: 64px;\n}\n.marquee-item::after {\n  content: '✦';\n  color: var(--clay);\n  font-style: normal;\n  font-size: 0.7em;\n}\n@keyframes marquee {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n\n/* Practice card hover */\n.practice-card {\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.4s cubic-bezier(0.2,0.7,0.2,1);\n}\n.practice-card::after {\n  content: '';\n  position: absolute;\n  left: 0; right: 0; bottom: 0;\n  height: 3px;\n  background: var(--clay);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.5s cubic-bezier(0.2,0.7,0.2,1);\n}\n.practice-card:hover { transform: translateY(-4px); }\n.practice-card:hover::after { transform: scaleX(1); }\n\n/* Region hover fill */\n.region-list .reg {\n  position: relative;\n  overflow: hidden;\n}\n.region-list .reg::before {\n  content: '';\n  position: absolute;\n  left: 0; right: 0; top: 100%;\n  height: 100%;\n  background: var(--ink);\n  transition: top 0.45s cubic-bezier(0.2,0.7,0.2,1);\n  z-index: 0;\n}\n.region-list .reg:hover { background: transparent; }\n.region-list .reg:hover::before { top: 0; }\n.region-list .reg > * { position: relative; z-index: 1; }\n.region-list .reg:hover { color: var(--paper); }\n.region-list .reg:hover .reg-num { color: var(--clay); }\n.region-list .reg:hover .reg-sub { color: var(--ink-4); }\n\n/* Nav link underline animation */\n.nav-links a {\n  position: relative;\n}\n.nav-links a::after {\n  content: '';\n  position: absolute;\n  left: 0; right: 0; bottom: 0;\n  height: 1px;\n  background: var(--clay);\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.35s cubic-bezier(0.2,0.7,0.2,1);\n}\n.nav-links a:hover::after, .nav-links a.active::after { transform: scaleX(1); transform-origin: left; }\n.nav-links a, .nav-links a.active { border-bottom: none !important; }\n\n/* Btn hover micro-motion */\n.btn { transition: background 0.25s, color 0.25s, transform 0.25s cubic-bezier(0.2,0.7,0.2,1); }\n.btn:hover { transform: translateY(-1px); }\n.btn .arrow { transition: transform 0.25s cubic-bezier(0.2,0.7,0.2,1); }\n.btn:hover .arrow { transform: translate(3px, -1px); }\n\n/* Subtle eyebrow dot pulse */\n.eyebrow-dot {\n  display: inline-block;\n  width: 6px; height: 6px;\n  background: var(--clay);\n  border-radius: 50%;\n  margin-right: 10px;\n  vertical-align: 1px;\n  box-shadow: 0 0 0 0 var(--clay);\n  animation: dot-pulse 2.6s ease-out infinite;\n}\n@keyframes dot-pulse {\n  0%   { box-shadow: 0 0 0 0 rgba(177,106,72,0.55); }\n  70%  { box-shadow: 0 0 0 10px rgba(177,106,72,0); }\n  100% { box-shadow: 0 0 0 0 rgba(177,106,72,0); }\n}\n\n/* Stats count container */\n.stat-num {\n  display: inline-block;\n  font-variant-numeric: tabular-nums;\n}\n\n/* Section head label slight in */\n.section-head .label .eyebrow {\n  position: relative;\n  padding-left: 28px;\n}\n.section-head .label .eyebrow::before {\n  content: '';\n  position: absolute;\n  left: 0; top: 50%;\n  width: 18px; height: 1px;\n  background: var(--clay);\n}\n\n/* Reduce motion preference */\n@media (prefers-reduced-motion: reduce) {\n  .hero-portrait { animation: none; }\n  .marquee-track { animation: none; }\n  .split-word { transition-duration: 0.3s !important; }\n  .eyebrow-dot { animation: none; }\n}\n\n/* ============= Network Map ============= */\n.map-wrap {\n  position: relative;\n  background: var(--paper);\n  border-top: 1px solid var(--ink);\n  border-bottom: 1px solid var(--ink);\n  overflow: hidden;\n}\n.map-svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: var(--paper);\n}\n\n/* .map-zoom — transform is driven by requestAnimationFrame via SVG attribute.\n   Don't apply CSS transform here; it doesn't work on <g> in some browsers. */\n.map-zoom { will-change: transform; }\n/* When zoomed, the path layer is purely decorative — let pointer events fall through */\n.map-zoom.is-zoomed .country-path { pointer-events: none; }\n\n/* Markers transition smoothly. Use longer duration matching the camera. */\n.marker .marker-dot,\n.marker .marker-ring,\n.marker .marker-hit,\n.marker .marker-pulse {\n  transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease;\n}\n/* All non-focused markers shrink + dim while zoomed so the target is hero. */\n.map-zoom.is-zoomed .marker:not(.focused) .marker-dot {\n  transform: scale(0.28);\n  opacity: 0.32;\n}\n.map-zoom.is-zoomed .marker:not(.focused) .marker-ring {\n  transform: scale(0.28);\n  opacity: 0.18;\n}\n.map-zoom.is-zoomed .marker:not(.focused) .marker-hit {\n  transform: scale(0.4);\n}\n.map-zoom.is-zoomed .marker:not(.focused) .marker-pulse {\n  opacity: 0;\n}\n/* Focused marker pops + glows */\n.map-zoom.is-zoomed .marker.focused .marker-dot {\n  transform: scale(1);\n  filter: drop-shadow(0 0 6px rgba(177,106,72,0.7));\n}\n.map-zoom.is-zoomed .marker.focused .marker-ring {\n  transform: scale(1.2);\n  opacity: 1;\n  stroke-width: 1.4;\n}\n.map-zoom.is-zoomed .marker.focused .marker-hit {\n  transform: scale(2);\n}\n.map-zoom.is-zoomed .marker.focused .marker-pulse {\n  transform: scale(1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.map-zoom.is-zoomed .marker.primary.focused .marker-dot {\n  transform: scale(0.7);\n}\n.map-zoom.is-zoomed .marker.primary.focused .marker-ring {\n  transform: scale(0.9);\n}\n\n.country-path {\n  fill: var(--paper-deep);\n  stroke: var(--paper);\n  stroke-width: 0.6;\n  vector-effect: non-scaling-stroke;\n  transition: fill 0.2s ease;\n}\n.country-path.has-clinic {\n  fill: #DBD3BB;\n}\n.country-path.is-primary {\n  fill: #C7B98F;\n}\n.country-path.is-hover {\n  fill: var(--clay) !important;\n  fill-opacity: 0.6;\n}\n\n.marker {\n  cursor: pointer;\n  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.marker-ring {\n  fill: none;\n  stroke: var(--clay);\n  stroke-width: 1;\n  transform-origin: center;\n  transform-box: fill-box;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.marker-dot {\n  fill: var(--clay);\n  stroke: var(--paper);\n  stroke-width: 1.6;\n  transform-origin: center;\n  transform-box: fill-box;\n  pointer-events: none;\n}\n.marker-pulse { pointer-events: none; }\n.marker-hit {\n  fill: transparent;\n  pointer-events: all;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.marker.primary .marker-dot {\n  fill: var(--ink);\n  stroke: var(--clay);\n  stroke-width: 2.4;\n  filter: drop-shadow(0 1.5px 3px rgba(24,33,28,0.55));\n}\n.marker.primary .marker-ring {\n  stroke: var(--ink);\n  stroke-width: 1.6;\n  opacity: 0.7;\n}\n.marker.graduate .marker-dot {\n  fill: var(--sage);\n  stroke: var(--paper);\n  stroke-width: 1.4;\n}\n.marker.graduate .marker-ring {\n  stroke: var(--sage);\n  opacity: 0.45;\n}\n.marker:hover .marker-dot, .marker.selected .marker-dot {\n  transform: scale(1.4);\n}\n.marker:hover .marker-ring, .marker.selected .marker-ring {\n  transform: scale(1.6);\n  opacity: 0.85;\n}\n/* Marker pulse */\n@keyframes marker-pulse {\n  0%   { r: 7; opacity: 0.75; }\n  100% { r: 26; opacity: 0; }\n}\n.marker-pulse {\n  fill: none;\n  stroke: var(--clay);\n  stroke-width: 1.4;\n  animation: marker-pulse 2.4s ease-out infinite;\n  pointer-events: none;\n}\n.marker.primary .marker-pulse {\n  stroke: var(--ink);\n  stroke-width: 1.8;\n}\n\n/* Tooltip */\n.map-tip {\n  position: absolute;\n  background: var(--ink);\n  color: var(--paper);\n  padding: 12px 16px;\n  pointer-events: none;\n  z-index: 5;\n  transform: translate(12px, -50%);\n  max-width: 280px;\n  box-shadow: 0 12px 28px -8px rgba(24,33,28,0.5);\n  font-size: 13px;\n  line-height: 1.4;\n  border-left: 3px solid var(--clay);\n}\n.map-tip .tip-name { font-family: var(--serif); font-size: 18px; line-height: 1.15; color: var(--paper); margin-bottom: 6px; }\n.map-tip .tip-loc { color: var(--tan); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; }\n\n/* Close-zoom button */\n.map-close-zoom {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--paper);\n  border: 1px solid var(--ink);\n  color: var(--ink);\n  font-size: 11px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 8px 22px -10px rgba(24,33,28,0.35);\n  z-index: 6;\n  transition: background 0.2s, color 0.2s;\n  font-family: var(--sans);\n}\n.map-close-zoom span { font-size: 14px; line-height: 1; }\n.map-close-zoom:hover { background: var(--ink); color: var(--paper); }\n\n/* Legend */\n.map-legend {\n  display: flex; gap: 24px;\n  align-items: center;\n  padding: 16px 0;\n  font-size: 13px;\n  color: var(--ink-3);\n}\n.map-legend .lg-dot {\n  display: inline-block;\n  width: 10px; height: 10px; border-radius: 50%;\n  margin-right: 8px;\n  vertical-align: -1px;\n}\n.map-legend .lg-dot.primary { background: var(--ink); border: 2px solid var(--clay); }\n.map-legend .lg-dot.trained { background: var(--clay); border: 1px solid var(--paper); }\n.map-legend .lg-dot.graduate { background: var(--sage); border: 1px solid var(--paper); }\n.map-legend .lg-tint {\n  display: inline-block;\n  width: 16px; height: 10px;\n  margin-right: 8px;\n  vertical-align: -1px;\n  background: #DBD3BB;\n}\n\n/* Detail card */\n.map-detail {\n  background: var(--ink);\n  color: var(--paper);\n  padding: 36px 40px;\n  display: grid;\n  grid-template-columns: 80px 1fr 1fr 200px;\n  gap: 36px;\n  align-items: start;\n}\n.map-detail .md-num {\n  font-family: var(--serif);\n  font-size: 48px;\n  line-height: 1;\n  color: var(--clay);\n  letter-spacing: -0.02em;\n}\n.map-detail .md-name {\n  font-family: var(--serif);\n  font-size: 30px;\n  line-height: 1.1;\n  letter-spacing: -0.012em;\n  color: var(--paper);\n}\n.map-detail .md-eb {\n  font-size: 11px;\n  letter-spacing: 0.22em;\n  color: var(--tan);\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.map-detail a { color: var(--tan); border-bottom: 1px solid rgba(244,239,229,0.3); transition: color 0.2s, border-color 0.2s; }\n.map-detail a:hover { color: var(--paper); border-bottom-color: var(--paper); }\n.map-detail .md-name-link {\n  color: var(--paper);\n  border-bottom: none;\n  transition: color 0.2s;\n}\n.map-detail .md-name-link:hover { color: var(--clay); border-bottom: none; }\n@media (max-width: 900px) {\n  .map-detail { grid-template-columns: 1fr; gap: 18px; padding: 28px 24px; }\n  .map-detail .md-num { font-size: 32px; }\n}\n\n/* Clinic list */\n.clinic-list {\n  border-top: 1px solid var(--ink);\n}\n.clinic-row {\n  display: grid;\n  grid-template-columns: 50px 1.4fr 1.1fr 1fr 130px;\n  gap: 24px;\n  padding: 24px 0;\n  border-bottom: 1px solid var(--rule);\n  align-items: center;\n  cursor: pointer;\n  transition: padding 0.25s, background 0.25s;\n}\n.clinic-row:hover, .clinic-row.active {\n  padding-left: 12px;\n  background: rgba(177,106,72,0.05);\n}\n.clinic-row .cr-num {\n  font-size: 11px;\n  letter-spacing: 0.18em;\n  color: var(--ink-3);\n  font-weight: 500;\n}\n.clinic-row .cr-name {\n  font-family: var(--serif);\n  font-size: 24px;\n  line-height: 1.1;\n  letter-spacing: -0.01em;\n}\n.clinic-row.active .cr-name { color: var(--clay); }\n.clinic-row .cr-loc {\n  font-size: 14px;\n  color: var(--ink-3);\n}\n.clinic-row .cr-clinic {\n  font-size: 14px;\n  color: var(--ink-2);\n}\n.clinic-row .cr-link {\n  color: var(--ink-2);\n  border-bottom: 1px solid transparent;\n  transition: color 0.2s, border-color 0.2s;\n}\n.clinic-row .cr-link:hover {\n  color: var(--clay);\n  border-bottom-color: var(--clay);\n}\n.clinic-row .cr-link-arrow {\n  font-size: 11px;\n  color: var(--ink-3);\n  margin-left: 2px;\n  transition: color 0.2s, transform 0.2s;\n  display: inline-block;\n}\n.clinic-row .cr-link:hover .cr-link-arrow {\n  color: var(--clay);\n  transform: translate(2px, -2px);\n}\n.clinic-row .cr-tag {\n  font-size: 10px;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--clay);\n  text-align: right;\n  font-weight: 500;\n}\n.clinic-row.primary .cr-tag { color: var(--ink); }\n.clinic-row.graduate .cr-tag { color: var(--sage-deep); }\n@media (max-width: 900px) {\n  .clinic-row { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }\n  .clinic-row .cr-tag { text-align: left; }\n}\n\n/* Filter chips */\n.chip-row {\n  display: flex; gap: 10px; flex-wrap: wrap;\n  margin-bottom: 32px;\n}\n.chip {\n  padding: 10px 18px;\n  border: 1px solid var(--rule-2);\n  background: var(--paper);\n  font-size: 13px;\n  letter-spacing: 0.04em;\n  color: var(--ink-2);\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s, border-color 0.2s;\n}\n.chip:hover { border-color: var(--ink); }\n.chip.active { background: var(--ink); color: var(--paper); border-color: var(--ink); }\n\n/* Map view tab toggle */\n.map-tab {\n  padding: 10px 22px;\n  font-size: 12px;\n  letter-spacing: 0.08em;\n  color: var(--ink);\n  background: var(--paper);\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: background 0.2s, color 0.2s;\n}\n.map-tab + .map-tab { border-left: 1px solid var(--ink); }\n.map-tab[data-active=\"true\"] { background: var(--ink); color: var(--paper); }\n.map-tab:hover[data-active=\"false\"], .map-tab:hover:not([data-active=\"true\"]) { background: rgba(24,33,28,0.06); }\n\n/* Map loading state */\n.map-loading {\n  height: 600px;\n  display: flex; align-items: center; justify-content: center;\n  font-family: var(--serif); font-size: 22px; color: var(--ink-3);\n  font-style: italic;\n}\n.map-loading::before {\n  content: '';\n  width: 24px; height: 24px;\n  border: 2px solid var(--rule-2);\n  border-top-color: var(--clay);\n  border-radius: 50%;\n  margin-right: 14px;\n  animation: spin 0.9s linear infinite;\n}\n@keyframes spin { to { transform: rotate(360deg); } }";
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
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " Dr. Debra A. Canapp"), /*#__PURE__*/React.createElement("div", null, "DVM \xB7 CCRT \xB7 CVA \xB7 Diplomate, ACVSMR"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "/reviewer",
    style: {
      color: 'rgba(244,239,229,0.45)'
    }
  }, "Reviewer access")))));
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
(function(){
/* global React, ReactDOM */
const {
  useState: sUseState,
  useRef: sUseRef
} = React;
function ServicesPage() {
  const ref = sUseRef(null);
  window.useReveal(ref);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React.createElement(window.Nav, {
    current: "services"
  }), /*#__PURE__*/React.createElement(ServicesHero, null), /*#__PURE__*/React.createElement(window.PetOwnerNote, null), /*#__PURE__*/React.createElement(TwoModes, null), /*#__PURE__*/React.createElement(ServicesGrid, null), /*#__PURE__*/React.createElement(RegenerativeSpread, null), /*#__PURE__*/React.createElement(SubmissionProcess, null), /*#__PURE__*/React.createElement(OutsideReferralFees, null), /*#__PURE__*/React.createElement(OnSiteVisits, null), /*#__PURE__*/React.createElement(ServicesCTA, null), /*#__PURE__*/React.createElement(window.Footer, null));
}

/* ============================================================
   HERO
   ============================================================ */
function ServicesHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "Services Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-num"
  }, "\xA7 02"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 24
    }
  }, "Services \xB7 For referring veterinarians"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      maxWidth: 1200,
      textWrap: 'balance'
    }
  }, "Musculoskeletal ultrasound, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "for the referral"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "script",
    style: {
      color: 'var(--clay)',
      fontSize: '0.82em',
      display: 'inline-block',
      transform: 'translateY(-0.04em)',
      margin: '0 0.06em 0 0'
    }
  }, "Veterinarian.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 36,
      maxWidth: 820
    }
  }, "Dr. Canapp works by referral only \u2014 like an MRI referral, not a primary workup. There are two ways to engage: send your own imaging in for a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "remote read"), ", or have Dr. Canapp come to your clinic and perform the ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "ultrasound in person"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#remote",
    className: "btn btn-clay"
  }, "Send a case in ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#onsite",
    className: "btn btn-ghost"
  }, "Or \u2014 request an on-site visit")))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 900px) { .ch-grid { grid-template-columns: 1fr !important; gap:24px !important; } }`)));
}

/* ============================================================
   TWO MODES — Remote read vs In-person ultrasound
   ============================================================ */
function TwoModes() {
  const labelStyle = {
    fontSize: 10.5,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--ink-3)',
    paddingTop: 2
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Two Modes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "\xA7 01 \xB7 Two ways to work together"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "Send the imaging in \u2014 or have Dr. Canapp ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "scan in person.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 800
    }
  }, "Every engagement is by referral. The only difference is who holds the probe: you acquire the images at your clinic and send them for a remote read, or Dr. Canapp comes to you and performs the ultrasound herself."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    },
    className: "modes-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      border: '1px solid var(--ink)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 420,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--clay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 88,
      lineHeight: 0.85,
      color: 'var(--clay)',
      letterSpacing: '-0.04em'
    }
  }, "01"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay-deep, var(--clay))',
      fontWeight: 500,
      textAlign: 'right'
    }
  }, "You send the images")), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.08,
      marginTop: 32,
      letterSpacing: '-0.012em'
    }
  }, "Remote second-opinion read."), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 14,
      color: 'var(--ink-2)'
    }
  }, "You acquire the ultrasound at your own clinic and submit the study through the secure portal. Dr. Canapp reads it and returns a written report \u2014 annotated key frames, diagnosis, and a treatment plan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '6px 14px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: labelStyle
  }, "Turnaround"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "5\u20137 business days"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: labelStyle
  }, "Best for"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Graduates of the MSK course"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: labelStyle
  }, "Route"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Secure referral portal")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#remote",
    className: "link-arrow"
  }, "How a remote read works ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 420,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 88,
      lineHeight: 0.85,
      color: 'var(--ink)',
      letterSpacing: '-0.04em'
    }
  }, "02"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)',
      textAlign: 'right'
    }
  }, "She comes to you")), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.08,
      marginTop: 32,
      letterSpacing: '-0.012em'
    }
  }, "In-person ultrasound at your clinic."), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 14,
      color: 'var(--ink-2)'
    }
  }, "Dr. Canapp travels to your practice and performs the musculoskeletal ultrasound on your patients herself \u2014 scanning, interpreting in real time, and guiding injections alongside your team."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '6px 14px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: labelStyle
  }, "Engagement"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Independent contractor (1099)"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: labelStyle
  }, "Scheduling"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "By the day \xB7 single or recurring"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: labelStyle
  }, "Includes"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "Guided injection, same visit")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#onsite",
    className: "link-arrow"
  }, "How an on-site visit works ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .modes-grid { grid-template-columns: 1fr !important; } }`)));
}

/* ============================================================
   SERVICES GRID — trimmed to 4 items, renumbered
   ============================================================ */
function ServicesGrid() {
  const svcs = [{
    num: '01',
    t: 'Diagnostic MSK Ultrasound',
    d: 'Real-time imaging of tendons, ligaments, muscles, and joint capsules. The primary modality of the practice — performed in person at VOSM (MD) and Circle Oak (CA) by referral, or read remotely from images you acquire.',
    tag: 'Imaging'
  }, {
    num: '02',
    t: 'Ultrasound-Guided Injection',
    d: 'PRP, stem cell, hyaluronic acid, and steroid placement guided by real-time ultrasound — precision into the lesion, not near it. Performed in person at referral sites.',
    tag: 'Therapeutic'
  }, {
    num: '03',
    t: 'Regenerative Medicine Planning',
    d: 'Case-by-case protocol for autologous regenerative therapies — selection criteria, dosing, follow-up imaging. Recommended in the read or in a follow-up consult.',
    tag: 'Therapeutic'
  }, {
    num: '04',
    t: 'Second-Opinion Imaging Reads',
    d: 'Submit your MSK ultrasound, CT, or MRI imaging through the portal for expert interpretation, with a written report and annotated key frames.',
    tag: 'Consultation'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      background: 'var(--paper-deep)'
    },
    "data-screen-label": "Services Grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "\xA7 02 \xB7 The clinical service list",
    num: "\xA7 02"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "Imaging, intervention, and the second-opinion read \u2014 ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "one practitioner,"), " one workflow."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '1px',
      background: 'var(--rule-2)',
      border: '1px solid var(--rule-2)'
    },
    className: "svc-grid"
  }, svcs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.num,
    style: {
      background: 'var(--paper)',
      padding: '36px 40px',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "\u2116 ", s.num), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(26px,2.4vw,34px)',
      lineHeight: 1.1,
      marginTop: 14,
      letterSpacing: '-0.012em'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 14,
      color: 'var(--ink-3)',
      maxWidth: 540
    }
  }, s.d)), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, s.tag)))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .svc-grid { grid-template-columns: 1fr !important; } }`)));
}

/* ============================================================
   REGENERATIVE SPREAD — the therapeutic edge (kept)
   ============================================================ */
function RegenerativeSpread() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink section-pad",
    "data-screen-label": "Regenerative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 80,
      alignItems: 'center'
    },
    className: "regen-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 24
    }
  }, "\xA7 03 \xB7 The therapeutic edge"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      textWrap: 'balance'
    }
  }, "When the lesion is ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--tan)'
    }
  }, "visible"), ", the injection can be ", /*#__PURE__*/React.createElement("span", {
    className: "script",
    style: {
      color: 'var(--clay)',
      fontSize: '0.7em',
      display: 'inline-block'
    }
  }, "precise.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 32,
      maxWidth: 600
    }
  }, "The diagnostic edge converts directly to a therapeutic one. Ultrasound guidance lets PRP, stem cell, and regenerative protocols land inside the lesion \u2014 not near it. The same modality that found the injury is the one that delivers the treatment."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: "PRP placement"
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "Stem-cell injection"
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "Hyaluronic acid"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/portal",
    className: "link-arrow",
    style: {
      color: 'var(--paper)',
      borderBottomColor: 'rgba(244,239,229,0.4)'
    }
  }, "Discuss a regenerative case ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'rgba(244,239,229,0.06)',
      border: '1px solid rgba(244,239,229,0.18)',
      aspectRatio: '4/3',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6a17bfbf0751a89e9e8b9bdc/6a1b668550966f1b31bd1501_probe-doberman-black.png",
    alt: "Diagnostic MSK ultrasound probe with canine patient",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--tan)',
      fontWeight: 500
    }
  }, "MSK Ultrasound \xB7 ultrasound-guided injection")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(244,239,229,0.6)',
      fontWeight: 500
    }
  }, "Probe placement \u2014 long-axis assessment"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .regen-grid { grid-template-columns: 1fr !important; gap:48px !important; } }`)));
}
function Pill({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderTop: '1px solid rgba(244,239,229,0.3)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      fontFamily: 'var(--serif)',
      fontSize: 24,
      lineHeight: 1
    }
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 18,
      lineHeight: 1.1
    }
  }, label));
}

/* ============================================================
   ON-SITE CLINIC VISITS — Dr. Canapp travels to your practice
   ============================================================ */
function OnSiteVisits() {
  return /*#__PURE__*/React.createElement("section", {
    id: "onsite",
    className: "section-pad",
    "data-screen-label": "On-Site Clinic Visits",
    style: {
      background: 'var(--paper)',
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "\xA7 06 \xB7 In-person ultrasound at your clinic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "Dr. Canapp performs the ultrasound \u2014 ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "in your"), " building."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 760
    }
  }, "For clinics that would rather not acquire and ship imaging themselves, Dr. Canapp travels on-site and performs the diagnostic musculoskeletal ultrasound on your patients in person \u2014 alongside your team."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 64,
      alignItems: 'start'
    },
    className: "onsite-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.1
    }
  }, "How an on-site day works"), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Dr. Canapp scans your scheduled MSK cases in person, on your floor', 'Real-time interpretation with your team at the table', 'Ultrasound-guided injections performed the same visit, where indicated', 'Findings and recommendations documented for each patient', 'A standing day can be arranged for clinics with recurring caseload'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      fontFamily: 'var(--serif)',
      fontSize: 22,
      lineHeight: 1,
      marginTop: -2
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com?subject=On-site%20MSK%20ultrasound%20inquiry",
    className: "btn btn-clay"
  }, "Inquire about an on-site visit ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      border: '1px solid var(--ink)',
      padding: 36,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--clay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "The arrangement"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, [['Engagement', 'Independent contractor (1099)'], ['Where', 'Your clinic, your equipment or hers'], ['Scope', 'Diagnostic MSK ultrasound & guided injection'], ['Scheduling', 'By the day, single or recurring'], ['Next step', 'A short call to scope the fit']].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '110px 1fr',
      gap: 20,
      padding: '14px 0',
      borderTop: i ? '1px solid var(--rule)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--clay)',
      paddingTop: 4
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 18,
      lineHeight: 1.3
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--rule)',
      color: 'var(--ink-3)',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "Dr. Canapp works with host clinics as a 1099 independent contractor. If on-site coverage is something your practice is considering, reach out and we'll talk through what it would look like."))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .onsite-grid { grid-template-columns: 1fr !important; gap:40px !important; } }`)));
}

/* ============================================================
   SUBMISSION PROCESS — for course graduates
   ============================================================ */
function SubmissionProcess() {
  return /*#__PURE__*/React.createElement("section", {
    id: "remote",
    className: "section-pad",
    "data-screen-label": "Submission Process",
    style: {
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "\xA7 04 \xB7 How a remote read works",
    num: "\xA7 04"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "The five-day arc from ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "your upload"), " to report."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 760
    }
  }, "You acquire the ultrasound at your own clinic and submit the study through the secure referral portal. Dr. Canapp reads it and sends a report back \u2014 the workflow is the same every time. Best suited to graduates of the MSK course, whose acquisition matches how the read is structured."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    },
    className: "rr-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.1
    }
  }, "What you'll receive"), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Written diagnostic interpretation, by anatomical region', 'Annotated key frames with measurements', 'Differential diagnosis ranked by likelihood', 'Treatment recommendations & rehabilitation framework', 'Optional follow-up call to discuss the case'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      fontFamily: 'var(--serif)',
      fontSize: 22,
      lineHeight: 1,
      marginTop: -2
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/portal",
    className: "btn btn-clay"
  }, "Open the portal ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      border: '1px solid var(--ink)',
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "Plate \u2116 01 \xB7 Standard timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, [['Day 0', 'You upload clips via secure portal'], ['Day 1', 'Dr. Canapp triages & confirms receipt'], ['Day 3', 'Imaging reviewed; report drafted'], ['Day 4', 'Report returned to your inbox'], ['Day 5+', 'Optional follow-up call if requested']].map(([d, x], i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr',
      gap: 20,
      padding: '14px 0',
      borderTop: i ? '1px solid var(--rule)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--clay)',
      paddingTop: 3
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 18,
      lineHeight: 1.3
    }
  }, x)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .rr-grid { grid-template-columns: 1fr !important; gap:32px !important; } }`)));
}

/* ============================================================
   OUTSIDE REFERRAL FEES — the pricing plate
   ============================================================ */
function OutsideReferralFees() {
  return /*#__PURE__*/React.createElement("section", {
    id: "outside-fees",
    className: "bg-forest section-pad",
    "data-screen-label": "Outside Referral Fees"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 24
    }
  }, "\xA7 05 \xB7 Outside referrals \xB7 Fee structure"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      color: 'var(--paper)',
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "Already performing your own MSK ultrasound, and want a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tan)',
      fontStyle: 'italic'
    }
  }, "second opinion?")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 32,
      maxWidth: 760
    }
  }, "You don't need to have trained with Dr. Canapp to send a case in. Outside referrals are welcome and reviewed individually. One caveat: because your acquisition technique may differ from the protocol she teaches, a submission isn't guaranteed to be readable or to yield a fully diagnostic report."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 0
    },
    className: "fee-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(244,239,229,0.3)',
      borderBottom: '1px solid rgba(244,239,229,0.3)',
      padding: '36px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'baseline',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 10
    }
  }, "Per site read"), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    }
  }, "One bilateral region.")), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 'clamp(72px,7vw,108px)',
      lineHeight: 0.9,
      letterSpacing: '-0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.4em',
      verticalAlign: '0.65em',
      color: 'var(--tan)',
      fontWeight: 300,
      marginRight: 4
    }
  }, "$"), "500")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid rgba(244,239,229,0.3)',
      padding: '36px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'baseline',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 10
    }
  }, "Unreadable images"), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    }
  }, "Return fee, if the imaging can't be reviewed.")), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 'clamp(72px,7vw,108px)',
      lineHeight: 0.9,
      letterSpacing: '-0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.4em',
      verticalAlign: '0.65em',
      color: 'var(--tan)',
      fontWeight: 300,
      marginRight: 4
    }
  }, "$"), "100"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(244,239,229,0.04)',
      border: '1px solid rgba(244,239,229,0.18)',
      padding: 36,
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 18
    }
  }, "What counts as a \"site\""), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(244,239,229,0.86)',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "A ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--tan)'
    }
  }, "site"), " is one bilateral region. Pricing examples:"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, [['Both shoulders', '1 site · $500'], ['Both shoulders + both elbows', '2 sites · $1,000'], ['Both stifles + both tarsi + both shoulders', '3 sites · $1,500'], ['Single unilateral region', '1 site · $500']].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 20,
      padding: '14px 0',
      borderTop: '1px solid rgba(244,239,229,0.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 16,
      lineHeight: 1.3
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--tan)',
      paddingTop: 3
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid rgba(244,239,229,0.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 10
    }
  }, "The $100 return, in plain language"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(244,239,229,0.7)',
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "Assessed when imaging cannot be reviewed for technical reasons \u2014 non-standard acquisition angles, insufficient resolution, or artifact obscuring the structure of interest. It covers the time already spent attempting the read.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      borderTop: '1px solid rgba(244,239,229,0.2)',
      paddingTop: 32,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    },
    className: "fee-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 14
    }
  }, "If you find yourself referring often"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(244,239,229,0.82)',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "The course exists precisely to remove this uncertainty. Course graduates submit at the standard rate, with readability all but assured because the imaging was acquired the way the read is structured."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "link-arrow",
    style: {
      color: 'var(--paper)',
      borderBottomColor: 'rgba(244,239,229,0.4)'
    }
  }, "Explore the course ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 14
    }
  }, "To request an outside-referral read"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(244,239,229,0.82)',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "Email us a brief case summary and a representative will reach out shortly to get you started."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-clay"
  }, "Email info@drdebracanapp.com ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width:1000px){
            .fee-grid { grid-template-columns: 1fr !important; }
            .fee-foot { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `)));
}

/* ============================================================
   COURSE CTA (kept — Or, learn to do it yourself)
   ============================================================ */
function ServicesCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Services Course CTA",
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 80,
      alignItems: 'center'
    },
    className: "svcta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "\xA7 07 \xB7 Or \u2014 learn to do it yourself"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 980,
      textWrap: 'balance'
    }
  }, "Many referring vets eventually become the reader."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 680
    }
  }, "The same diagnostic workup Dr. Canapp performs in clinic is taught \u2014 step by step \u2014 in the canine MSK ultrasound course. If you find yourself referring the same kinds of cases out, the course is built for you."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn"
  }, "Explore the course ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream)',
      border: '1px solid var(--rule-2)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "Course at a glance"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, [['Modules', '6'], ['Lessons', '121'], ['Remote read access', 'Included'], ['À la carte', 'From $250'], ['All-inclusive', '$7,975']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px dashed var(--rule-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 20
    }
  }, v)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .svcta-grid { grid-template-columns: 1fr !important; gap:48px !important; } }`)));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/services']=ServicesPage;
})();
(function(){
/* global React, ReactDOM */

function CoursePage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "course-page"
  }, /*#__PURE__*/React.createElement(window.Nav, {
    current: "course"
  }), /*#__PURE__*/React.createElement(CourseHero, null), /*#__PURE__*/React.createElement(CoursePromise, null), /*#__PURE__*/React.createElement(CourseCurriculum, null), /*#__PURE__*/React.createElement(CourseProcess, null), /*#__PURE__*/React.createElement(CoursePricing, null), /*#__PURE__*/React.createElement(CourseAccess, null), /*#__PURE__*/React.createElement(CourseFAQ, null), /*#__PURE__*/React.createElement(CourseEnroll, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
function CourseHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "Course Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-num"
  }, "\xA7 04"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 24
    }
  }, "The Canine MSK Ultrasound Course \u2014 Continuing Education"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      maxWidth: 1200,
      textWrap: 'balance'
    }
  }, "Learn the modality", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "that quietly"), /*#__PURE__*/React.createElement("span", {
    className: "script",
    style: {
      color: 'var(--clay)',
      fontSize: '0.78em',
      display: 'inline-block',
      transform: 'translateY(-0.04em)',
      margin: '0 0.12em'
    }
  }, "changed"), /*#__PURE__*/React.createElement("br", null), "veterinary sports medicine."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 64,
      alignItems: 'end'
    },
    className: "ch-bottom"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      maxWidth: 680
    }
  }, "An online, modular curriculum in canine diagnostic musculoskeletal ultrasound \u2014 built and personally taught by Dr. Debra Canapp, one of the first veterinarians in North America to adopt the modality clinically."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    className: "btn btn-clay"
  }, "Enroll ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#curriculum",
    className: "btn btn-ghost"
  }, "Curriculum")), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Hosted on Thinkific \xB7 Self-paced"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 32,
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--rule-2)',
      padding: '28px 0'
    },
    className: "ch-stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "121",
    l: "lessons"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "5",
    l: "anatomical modules"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "6",
    l: "case-driven units"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "12mo",
    l: "initial course access"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "90+",
    l: "students worldwide"
  })))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 900px) {
            .ch-grid, .ch-bottom { grid-template-columns: 1fr !important; gap: 24px !important; }
            .ch-stats { grid-template-columns: repeat(2,1fr) !important; }
          }
        `)));
}
function Stat({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(40px,4vw,64px)',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 10
    }
  }, l));
}

/* ============================================================
   PROMISE — "you will be able to..."
   ============================================================ */
function CoursePromise() {
  const items = [{
    n: '01',
    t: 'Acquire diagnostic-quality images',
    d: 'Standardized probe positioning for shoulder, elbow, iliopsoas, stifle, tarsus, and carpus. No more "I can\'t find the structure."'
  }, {
    n: '02',
    t: 'Read fibrillar architecture',
    d: 'Recognize normal tendinous and ligamentous patterns — and the disruption that signals injury — at clinically useful magnification.'
  }, {
    n: '03',
    t: 'Localize the lesion',
    d: 'Layer-by-layer evaluation strategies that turn vague lameness into a specific, anatomically localized diagnosis.'
  }, {
    n: '04',
    t: 'Guide regenerative therapy',
    d: 'Use real-time ultrasound to place PRP, stem cell, and steroid injections precisely where they need to be.'
  }, {
    n: '05',
    t: 'Submit a remote read',
    d: 'After completion, send cases to Dr. Canapp for expert second-opinion — a feedback loop most CE never offers.'
  }, {
    n: '06',
    t: 'Talk to clients with images',
    d: 'Sit down with the owner of an athlete and explain what you found — with the actual scan in hand.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      background: 'var(--paper)'
    },
    "data-screen-label": "Course Promise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "By the end of the course",
    num: "\xA7 01"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "Six capabilities that will ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "quietly"), " reshape how you practice."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '1px',
      background: 'var(--rule-2)',
      border: '1px solid var(--rule-2)'
    },
    className: "promise-grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      background: 'var(--paper)',
      padding: 36,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 24
    }
  }, it.n), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: '-0.012em'
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 14,
      color: 'var(--ink-3)'
    }
  }, it.d)))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 900px) { .promise-grid { grid-template-columns: 1fr !important; } }
        `)));
}

/* ============================================================
   CURRICULUM — module table
   ============================================================ */
function CourseCurriculum() {
  const modules = [{
    id: 'introduction',
    num: '01',
    name: 'Introduction',
    desc: 'Physics, probe handling, machine setup, normal canine anatomy.',
    meta: '7 lessons · INTRO',
    price: '$250',
    hasHomework: '+ $500 homework'
  }, {
    id: 'shoulder',
    num: '02',
    name: 'Shoulder',
    desc: 'Biceps, supraspinatus, infraspinatus, subscapularis, medial glenohumeral ligament.',
    meta: '32 lessons · CORE',
    price: '$1,500',
    hasHomework: '+ $500 homework'
  }, {
    id: 'iliopsoas',
    num: '03',
    name: 'Iliopsoas',
    desc: 'Iliopsoas strain & enthesopathy — one of the most overlooked sport injuries in canine athletes.',
    meta: '18 lessons · CORE',
    price: '$1,500',
    hasHomework: '+ $500 homework'
  }, {
    id: 'stifle',
    num: '04',
    name: 'Stifle',
    desc: 'Patellar tendon, cruciate evaluation, meniscal interrogation, collateral ligaments.',
    meta: '22 lessons · CORE',
    price: '$1,500',
    hasHomework: '+ $500 homework'
  }, {
    id: 'tarsus',
    num: '05',
    name: 'Tarsus',
    desc: 'Achilles complex, gastrocnemius, superficial digital flexor — pre-rupture detection.',
    meta: '20 lessons · CORE',
    price: '$1,500',
    hasHomework: '+ $500 homework'
  }, {
    id: 'carpus',
    num: '06',
    name: 'Carpus',
    desc: 'Hyperextension injury, palmar carpal ligament, dorsal & medial structures.',
    meta: '22 lessons · CORE',
    price: '$1,500',
    hasHomework: '+ $500 homework'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "curriculum",
    style: {
      background: 'var(--cream)'
    },
    "data-screen-label": "Curriculum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Curriculum",
    num: "\xA7 02"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "Six modules. Sequential. Personally graded."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 760
    }
  }, "Each module unlocks the next. Homework \u2014 your own imaging, submitted as video clips \u2014 is graded by Dr. Canapp directly. The \"all inclusive\" bundle is the most efficient path."))), /*#__PURE__*/React.createElement("div", null, modules.map(m => /*#__PURE__*/React.createElement("a", {
    key: m.id,
    id: m.id,
    href: "#pricing",
    className: "module-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mod-num"
  }, "\u2116 ", m.num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mod-name"
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "mod-meta",
    style: {
      marginTop: 8
    }
  }, m.meta)), /*#__PURE__*/React.createElement("div", {
    className: "mod-desc"
  }, m.desc), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6,
      color: 'var(--ink-3)'
    }
  }, "Includes"), /*#__PURE__*/React.createElement("div", {
    className: "small",
    style: {
      color: 'var(--ink-2)'
    }
  }, "Lectures \xB7 video labs \xB7 graded HW \xB7 remote read add-on")), /*#__PURE__*/React.createElement("div", {
    className: "mod-price"
  }, m.price, /*#__PURE__*/React.createElement("span", {
    className: "mod-hw",
    style: {
      display: 'block',
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--ink-3)',
      marginTop: 6,
      whiteSpace: 'nowrap'
    }
  }, m.hasHomework))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--ink-3)',
      maxWidth: 560
    }
  }, "\xC0 la carte, the full curriculum \u2014 six modules plus graded homework \u2014 runs ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, "$10,750"), ". ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Enroll all together and it's $7,975"), " \u2014 you save nearly ", /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 24,
      color: 'var(--clay)'
    }
  }, "$2,800"), "."), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    className: "link-arrow"
  }, "See full pricing & bundles ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))));
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
function CourseProcess() {
  const steps = [{
    n: '01',
    t: 'Enroll',
    d: 'Pick a single module to test the waters, or the all-inclusive bundle.',
    icon: '⌬'
  }, {
    n: '02',
    t: 'Lectures',
    d: 'Self-paced video lectures and demonstrations. Re-watch anytime.',
    icon: '▶'
  }, {
    n: '03',
    t: 'Practice',
    d: 'Image your own patients with guided protocols. Build a clip library.',
    icon: '◇'
  }, {
    n: '04',
    t: 'Submit homework',
    d: 'Send your imaging via the platform. Dr. Canapp personally grades and gives feedback.',
    icon: '⬢'
  }, {
    n: '05',
    t: 'Unlock the next',
    d: 'Each completed module unlocks the next, in clinical order of difficulty.',
    icon: '◐'
  }, {
    n: '06',
    t: 'Remote reads',
    d: 'After completion, optionally submit live cases to Dr. Canapp for a second-opinion read.',
    icon: '✦'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink section-pad",
    "data-screen-label": "How It Works"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "How it works",
    num: "\xA7 03"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "The first CE program where the instructor ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--tan)'
    }
  }, "actually sees"), " your work."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 0,
      border: '1px solid rgba(244,239,229,0.2)'
    },
    className: "process-grid"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: '32px 22px',
      borderRight: i < steps.length - 1 ? '1px solid rgba(244,239,229,0.16)' : 'none',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 32,
      lineHeight: 1,
      color: 'var(--clay)'
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginTop: 18
    }
  }, "Step ", s.n), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 24,
      marginTop: 8,
      lineHeight: 1.1
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      color: 'rgba(244,239,229,0.7)',
      marginTop: 10
    }
  }, s.d)))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 1100px) { .process-grid { grid-template-columns: repeat(3,1fr) !important; }
            .process-grid > div:nth-child(3) { border-right: none !important; }
            .process-grid > div:nth-child(n+4) { border-top: 1px solid rgba(244,239,229,0.16); }
          }
          @media (max-width: 700px) { .process-grid { grid-template-columns: 1fr !important; }
            .process-grid > div { border-right: none !important; }
            .process-grid > div + div { border-top: 1px solid rgba(244,239,229,0.16); }
          }
        `)));
}

/* ============================================================
   PRICING
   ============================================================ */
function CoursePricing() {
  const tiers = [{
    kicker: 'Try a module',
    name: 'Introduction',
    price: '$250',
    desc: 'For the curious. Physics, anatomy, probe handling, and what the modality can do.',
    features: ['7 video lessons', 'Anatomy reference plates', 'No homework grading', '12 months of access'],
    cta: 'Start here',
    featured: false
  }, {
    kicker: 'Most popular',
    name: 'All-Inclusive Bundle',
    price: '$7,975',
    desc: 'Every module, every piece of homework, every region — graded directly by Dr. Canapp.',
    features: ['All 6 modules (121 lessons)', 'Homework graded for every region', 'Remote read access included', '12 months of mentorship'],
    cta: 'Enroll in full curriculum',
    featured: true
  }, {
    kicker: 'Targeted depth',
    name: 'Single Region + Remote Reads',
    price: '$2,500',
    desc: 'Pick one region (shoulder, iliopsoas, etc.) — get the module, homework, and remote-read pathway.',
    features: ['1 anatomical module', 'Homework graded & feedback', 'Remote read submissions', 'Add additional regions à la carte'],
    cta: 'Configure region',
    featured: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "pricing",
    "data-screen-label": "Pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Pricing & enrollment",
    num: "\xA7 04"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance'
    }
  }, "Three honest ", /*#__PURE__*/React.createElement("span", {
    className: "script",
    style: {
      color: 'var(--clay)',
      fontSize: '0.7em',
      display: 'inline-block',
      transform: 'translateY(-0.04em)'
    }
  }, "paths"), " in."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    },
    className: "pricing-grid"
  }, tiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      border: t.featured ? '1px solid var(--ink)' : '1px solid var(--rule-2)',
      background: t.featured ? 'var(--ink)' : 'var(--cream)',
      color: t.featured ? 'var(--paper)' : 'var(--ink)',
      padding: 36,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: t.featured ? 'var(--tan)' : 'var(--clay)',
      marginBottom: 14
    }
  }, t.kicker), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.05,
      letterSpacing: '-0.012em'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 64,
      lineHeight: 1,
      marginTop: 24,
      letterSpacing: '-0.03em'
    }
  }, t.price), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 16,
      color: t.featured ? 'rgba(244,239,229,0.78)' : 'var(--ink-3)'
    }
  }, t.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, t.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 14,
      lineHeight: 1.4,
      color: t.featured ? 'rgba(244,239,229,0.85)' : 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.featured ? 'var(--clay)' : 'var(--clay)',
      fontFamily: 'var(--serif)',
      fontSize: 18,
      lineHeight: 1,
      marginTop: -1
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://canapp-sports-medicine.thinkific.com/",
    target: "_blank",
    rel: "noreferrer",
    className: `btn ${t.featured ? 'btn-clay' : ''}`,
    style: {
      width: '100%',
      justifyContent: 'center',
      ...(t.featured ? {} : {
        background: 'transparent',
        color: 'var(--ink)',
        borderColor: 'var(--ink)'
      })
    }
  }, t.cta, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width: 1000px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        `), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 36,
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "All pricing in USD. Course access runs for 12 months from enrollment; extensions are available in 3- or 6-month intervals. Homework grading and remote reads are bound by Dr. Canapp's clinical schedule \u2014 feedback is typically returned within 14 days.")));
}

/* ============================================================
   ACCESS & EXTENSIONS
   ============================================================ */
function CourseAccess() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "access",
    "data-screen-label": "Access & Extensions",
    style: {
      background: 'var(--paper-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Access & extensions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "Twelve months of course access. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "Extend if life happens.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 720
    }
  }, "Every enrollment includes 12 months of full access to lectures, video labs, anatomy reference plates, and homework submission. If you need more time, course access can be extended in 3- or 6-month intervals."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    },
    className: "ext-grid"
  }, [{
    n: '3',
    label: '3-month extension',
    price: '$300',
    desc: 'A focused stretch — finish the homework cycle or revisit a module before remote-read submission.'
  }, {
    n: '6',
    label: '6-month extension',
    price: '$500',
    desc: 'A longer runway — useful for residents, working clinicians, and anyone balancing the course alongside a busy practice.'
  }].map(t => /*#__PURE__*/React.createElement("a", {
    key: t.n,
    href: `/extensions?plan=${t.n}`,
    style: {
      display: 'block',
      background: 'var(--cream)',
      border: '1px solid var(--rule-2)',
      padding: 36,
      position: 'relative',
      transition: 'border-color 0.25s, transform 0.25s'
    },
    className: "ext-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "Extension"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "+", t.n, " months")), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(28px,2.6vw,40px)',
      lineHeight: 1.05,
      letterSpacing: '-0.012em',
      marginTop: 18
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(48px,5vw,72px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      marginTop: 24
    }
  }, t.price), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 18,
      color: 'var(--ink-3)',
      maxWidth: 440
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 20,
      borderTop: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "link-arrow"
  }, "Add to your enrollment ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "One-time fee"))))), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 36,
      color: 'var(--ink-3)',
      maxWidth: 780
    }
  }, "Extensions are stackable and can be added at any point during your access window, including immediately before expiration. Homework grading and remote-read submissions during the extended period are billed per the original enrollment terms."), /*#__PURE__*/React.createElement("style", null, `
          .ext-card:hover { border-color: var(--ink) !important; transform: translateY(-2px); }
          @media (max-width: 900px) { .ext-grid { grid-template-columns: 1fr !important; } }
        `)));
}

/* ============================================================
   FAQ
   ============================================================ */
function CourseFAQ() {
  const faqs = [{
    q: 'I have a busy practice. Can I still take this?',
    a: 'Yes. The entire course is online and self-paced — module access runs for 12 months from enrollment, lessons can be re-watched as many times as you like during that window, and homework is submitted on your schedule. If you need more time, access can be extended in 3- or 6-month intervals.'
  }, {
    q: 'Do I need to own an ultrasound machine?',
    a: 'For lectures, no. For homework submission, yes — you\'ll need access to a linear probe machine. We can help you spec a unit if you\'re evaluating a purchase.'
  }, {
    q: 'How does the homework work?',
    a: 'Each module has imaging assignments. You record your scans (DICOM clips or video), upload them through the platform, and Dr. Canapp personally reviews each submission — both your technique and your image interpretation.'
  }, {
    q: 'What is a "remote read"?',
    a: 'After successfully completing a region\'s module + homework, you unlock the ability to submit live clinical cases from your own practice for Dr. Canapp to review and report on. It\'s second-opinion access, on demand.'
  }, {
    q: 'Is this appropriate for residents and specialists?',
    a: 'Yes. The course is taken regularly by sports medicine residents, rehabilitation therapists, surgeons, and general practitioners alike. The pacing accommodates a wide range of starting points.'
  }, {
    q: 'Do you offer hands-on labs?',
    a: 'A limited number of in-person hands-on labs are offered annually at rotating regional venues. Course graduates are notified first when seats open.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      background: 'var(--paper)'
    },
    "data-screen-label": "FAQ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Questions",
    num: "\xA7 05"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance'
    }
  }, "The honest answers."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement(FAQItem, {
    key: i,
    q: f.q,
    a: f.a,
    idx: i + 1
  })))));
}
function FAQItem({
  q,
  a,
  idx
}) {
  const [open, setOpen] = hUseState(idx === 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--rule-2)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '80px 1fr 60px',
      gap: 24,
      padding: '28px 0',
      textAlign: 'left',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "\u2116 ", String(idx).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(22px,2.2vw,30px)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 32,
      lineHeight: 1,
      textAlign: 'right',
      color: 'var(--clay)',
      transition: 'transform 0.25s',
      transform: open ? 'rotate(45deg)' : 'none'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.35s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-large",
    style: {
      paddingBottom: 32,
      paddingLeft: 104,
      paddingRight: 84,
      color: 'var(--ink-2)',
      maxWidth: 900
    }
  }, a))));
}

/* ============================================================
   ENROLL CTA
   ============================================================ */
function CourseEnroll() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-forest section-pad",
    "data-screen-label": "Enroll CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 24
    }
  }, "Enrollment is rolling"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      color: 'var(--paper)',
      maxWidth: 1200,
      margin: '0 auto',
      textWrap: 'balance'
    }
  }, "Become the vet other vets ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'var(--tan)'
    }
  }, "refer"), /*#__PURE__*/React.createElement("span", {
    className: "script",
    style: {
      color: 'var(--clay)',
      fontSize: '0.8em',
      display: 'inline-block',
      transform: 'translateY(-0.05em)',
      margin: '0 0.08em'
    }
  }, "their"), "shoulder cases to."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.78)',
      marginTop: 32,
      maxWidth: 680,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "The MSK ultrasound course on Thinkific is open year-round. Start with Introduction; commit to the full curriculum when you're ready."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://canapp-sports-medicine.thinkific.com/",
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-clay"
  }, "Enroll on Thinkific ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-ghost",
    style: {
      borderColor: 'rgba(244,239,229,0.4)',
      color: 'var(--paper)'
    }
  }, "Ask a question first"))));
}
const {
  useState: hUseState
} = React;
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/course']=CoursePage;
})();
(function(){
/* global React, ReactDOM */
const {
  useState: lcUseState
} = React;

/* ============================================================
   ENGAGEMENTS
   ============================================================ */
const UPCOMING = [{
  id: 'ecvsmr-2026',
  status: 'upcoming',
  featured: true,
  eventLong: '7th ECVSMR Scientific Meeting',
  event: 'ECVSMR 2026',
  role: 'Invited lecturer',
  title: 'Canine Diagnostic Musculoskeletal Ultrasound — Clinical Pearls & Pitfalls',
  location: 'Heesch / \u2019s-Hertogenbosch, Netherlands',
  venue: 'Hooge Wijststraat 7, 5384 RC Heesch · Oude Engelenseweg 1, 5222 AA \u2019s-Hertogenbosch',
  dateStart: 'Oct 16, 2026',
  dateEnd: 'Oct 17, 2026',
  sessions: [{
    day: 'Day 1 · Oct 16',
    time: '10:00 – 11:30',
    t: 'Lecture · MSK Ultrasound: a clinical framework for the shoulder and elbow'
  }, {
    day: 'Day 1 · Oct 16',
    time: '14:00 – 17:00',
    t: 'Wetlab · Hands-on imaging of the canine shoulder & iliopsoas (limited seats)'
  }, {
    day: 'Day 2 · Oct 17',
    time: '09:30 – 11:00',
    t: 'Lecture · Stifle, tarsus, carpus — what ultrasound shows when films stay quiet'
  }],
  audience: 'European College of Veterinary Sports Medicine & Rehabilitation diplomates, residents, and invited guests.',
  website: 'https://www.ecvsmr2026.com/',
  note: 'Dr. Canapp\u2019s participation is confirmed. Final session topics, room assignments, and wetlab registration open via the ECVSMR 2026 program portal.',
  tags: ['Lecture', 'Wetlab', 'International']
}];
const PAST = [{
  year: 2025,
  event: 'FVMA Annual Conference 2025',
  title: 'Diagnostic MSK Ultrasound — invited speaker',
  location: 'Hilton Orlando Bonnet Creek · FL, USA'
}, {
  year: 2025,
  event: 'ACVS Surgery Summit 2025',
  title: 'Laboratory Instructor — Canine Sports Medicine wet lab (with Dr. Sherman Canapp, Dr. Britt Carr Benson, Dr. Kristal Turner)',
  location: 'USA'
}, {
  year: 2023,
  event: 'WVC 2023 · Western Veterinary Conference',
  title: 'Team Canapp: Shoulder Pain Part 1 — It Must Be the Biceps!',
  location: 'Las Vegas, NV · USA'
}, {
  year: 2023,
  event: 'WVC 2023 · Western Veterinary Conference',
  title: 'Team Canapp: Shoulder Pain Part 2 — The Supraspinatus & Infraspinatus',
  location: 'Las Vegas, NV · USA'
}, {
  year: 2023,
  event: 'IAVRPT Symposium',
  title: 'Diagnostic MSK Ultrasound for the Iliopsoas Tendon',
  location: 'International'
}, {
  year: 2022,
  event: 'ACVR Annual Scientific Conference',
  title: 'Keynote speaker — American College of Veterinary Radiology',
  location: 'Reno, NV · USA'
}, {
  year: 2022,
  event: 'Companion Animal Health · Case-Based Exploration',
  title: 'The Problematic Hock',
  location: 'Online · Global'
}, {
  year: 2022,
  event: 'Companion Animal Health · Case-Based Exploration',
  title: 'Achilles Tendon',
  location: 'Online · Global'
}, {
  year: 2021,
  event: '2nd ECVSMR Scientific Meeting',
  title: 'What\'s new in pathogenesis and diagnosis of tendinopathy in the canine athlete',
  location: 'Europe'
}, {
  year: 2021,
  event: 'Companion Animal Health · Case-Based Exploration series',
  title: 'Shoulder OCD · Medial Shoulder Syndrome · Supraspinatus Tendinopathy · Biceps Injury · The Elbow · Carpal Hyperextension',
  location: 'Online · Global'
}, {
  year: 2020,
  event: 'Clean Run Learning Center',
  title: 'Nutraceuticals, Supplementation for Agility/Sporting/Working Dogs',
  location: 'Online · Global'
}, {
  year: 2019,
  event: 'Western Veterinary Conference',
  title: 'MSK ultrasound, regenerative medicine & rehabilitation — multiple sessions',
  location: 'Las Vegas, NV · USA'
}, {
  year: 2019,
  event: 'National Veterinary Clinicians Group · Cape Break',
  title: 'Diagnostic MSK Ultrasound + Rehabilitation Therapy + Nutraceuticals',
  location: 'Cape Town · South Africa'
}, {
  year: 2018,
  event: 'IAVRPT',
  title: 'Rehabilitation after Treatment with Biologic Therapies',
  location: 'Knoxville, TN · USA'
}, {
  year: 2018,
  event: 'Veterinary Osteoarthritis Alliance',
  title: 'MSK Ultrasound for Monitoring Regenerative Medicine Treatments in Tendinopathies',
  location: 'Cambridge · United Kingdom'
}, {
  year: 2018,
  event: 'Gent University · 1st Annual Sports Medicine & Rehab Seminar',
  title: 'Rehabilitation Therapy for the Neurologic Patient',
  location: 'Gent · Belgium'
}, {
  year: 2018,
  event: 'ACVS Surgery Summit',
  title: 'Advanced Canine Sports Medicine & Regenerative Medicine Lab',
  location: 'Phoenix, AZ · USA'
}, {
  year: 2017,
  event: 'Sports Medicine Workshop',
  title: 'Sports medicine evaluations, MSK ultrasound, regenerative medicine, intra-articular injections (with Drs. Sherman Canapp & Tiiu Toijala)',
  location: 'Helsinki · Finland'
}, {
  year: 2017,
  event: '1st Annual International Veterinary Point-of-Care Ultrasound Symposium',
  title: 'Ultrasound-Guided Injections for Soft Tissue Injuries · MSK Ultrasound as a Guide for Rehab',
  location: 'Austin, TX · USA'
}, {
  year: 2017,
  event: '2nd ECVSMR Scientific Meeting',
  title: 'Canine Tendinopathies — Diagnostic Ultrasound & Regenerative Considerations',
  location: 'Europe'
}, {
  year: 2016,
  event: 'ACVS Surgery Summit',
  title: 'Sports Medicine Workshop + Ultrasound-Guided Injection for Soft Tissue Injury',
  location: 'Seattle, WA · USA'
}, {
  year: 2016,
  event: 'Centre for Veterinary Education · University of Sydney',
  title: 'Sports Medicine Workshop + Nutraceuticals + MSK Ultrasound for Sports Injuries',
  location: 'Sydney · Australia'
}, {
  year: 2016,
  event: 'CVC East',
  title: 'MSK Ultrasound + Rehabilitation of Forelimb & Hind Limb (5 sessions)',
  location: 'Virginia Beach, VA · USA'
}, {
  year: 2015,
  event: 'European College of Veterinary Surgeons · 24th Annual Scientific Meeting',
  title: 'Diagnostic Ultrasound for Shoulder Disease and Follow-Up During Recovery',
  location: 'Berlin · Germany'
}, {
  year: 2015,
  event: 'AVMA Annual Conference',
  title: 'MSK Ultrasound, Orthopedic Devices, Nutraceuticals, Rehab Exam & Modalities',
  location: 'Boston, MA · USA'
}, {
  year: 2015,
  event: 'North American Veterinary Conference',
  title: 'Diagnostic MSK Ultrasound Approach to the Canine + Stifle Braces for CCL Injury',
  location: 'Orlando, FL · USA'
}, {
  year: 2014,
  event: 'ACVS Surgery Summit',
  title: 'Behind the Scenes: Small Animal Sports Medicine + MSK Ultrasound as a Guide for Rehab',
  location: 'San Diego, CA · USA'
}, {
  year: 2014,
  event: 'ESVOT 17th Congress · European Society of Veterinary Orthopedics & Traumatology',
  title: 'Post-operative Rehabilitation for Shoulder & Stifle + MSK Ultrasound as a Guide',
  location: 'Venice · Italy'
}, {
  year: 2014,
  event: 'IAVRPT 8th International Symposium',
  title: 'Diagnostic MSK Ultrasound in the Canine',
  location: 'Oregon State University · Corvallis, OR'
}, {
  year: 2013,
  event: 'ACVS Symposium',
  title: 'Orthotics + Subtotal Amputations & Prosthetics (Technicians Program)',
  location: 'San Antonio, TX · USA'
}, {
  year: 2013,
  event: 'Animal Clinic Kobayashi',
  title: 'Diagnostic MSK Ultrasound in Small Animals — Lecture & Demonstration',
  location: 'Saitama · Japan'
}, {
  year: 2012,
  event: 'AVO Conference Berlin',
  title: 'Sports Medicine Conditions and Regenerative Medicine',
  location: 'Berlin · Germany'
}, {
  year: 2010,
  event: 'IAVRPT',
  title: 'Canine Lameness Laboratory — objective gait assessment',
  location: 'Auburn University, AL · USA'
}, {
  year: 2010,
  event: 'AVMA Annual Conference',
  title: 'Canine Orthopedic Diagnostics — objective gait + orthopedic devices',
  location: 'Atlanta, GA · USA'
}];

/* ============================================================
   PAGE
   ============================================================ */
function LecturesPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "lectures"
  }), /*#__PURE__*/React.createElement(LecturesHero, null), /*#__PURE__*/React.createElement(UpcomingBlock, null), /*#__PURE__*/React.createElement(PastBlock, null), /*#__PURE__*/React.createElement(BookingCTA, null), /*#__PURE__*/React.createElement(window.Footer, null));
}

/* ============================================================
   HERO
   ============================================================ */
function LecturesHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "\xA7 Lectures & Wetlabs")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero-eyebrow"
  }, "Where to find Dr. Canapp in person"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display hero-name",
    style: {
      textWrap: 'balance',
      maxWidth: 1280,
      marginTop: 24
    }
  }, "Upcoming", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "line-2",
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "lectures & wetlabs.")), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-lede",
    style: {
      marginTop: 36,
      maxWidth: 780
    }
  }, "Dr. Canapp teaches internationally \u2014 congress lectures, symposia, hands-on wetlabs, and university visits. This is where she'll be next, and a selected record of where she's been."))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .ch-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`)));
}

/* ============================================================
   UPCOMING
   ============================================================ */
function UpcomingBlock() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Upcoming",
    style: {
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Upcoming"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "On the calendar."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 720
    }
  }, "The next confirmed appearance. Wetlab seats are typically capacity-limited and registration runs through each meeting's program portal."))), UPCOMING.map(e => /*#__PURE__*/React.createElement(FeaturedEvent, {
    key: e.id,
    e: e
  })), UPCOMING.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 0',
      textAlign: 'center',
      fontFamily: 'var(--serif)',
      fontSize: 24,
      fontStyle: 'italic',
      color: 'var(--ink-3)'
    }
  }, "Between engagements \u2014 check back soon or email to invite Dr. Canapp.")));
}
function FeaturedEvent({
  e
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: 0
    },
    className: "featured-event"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '48px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)',
      marginBottom: 18
    }
  }, e.status === 'upcoming' ? '· Upcoming · Confirmed' : 'Past'), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 18,
      color: 'var(--tan)',
      marginBottom: 8
    }
  }, e.event), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 'clamp(40px,4vw,64px)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      marginTop: 12
    }
  }, e.dateStart), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--tan)',
      fontSize: 22,
      fontStyle: 'italic',
      marginTop: 6
    }
  }, "through ", e.dateEnd)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid rgba(244,239,229,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 8
    }
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 20,
      lineHeight: 1.3
    }
  }, e.location), /*#__PURE__*/React.createElement("div", {
    className: "small",
    style: {
      color: 'rgba(244,239,229,0.6)',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, e.venue))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)',
      marginBottom: 14
    }
  }, e.role), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(28px,3vw,44px)',
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      textWrap: 'balance',
      maxWidth: 680
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 20
    }
  }, e.tags && e.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '4px 12px',
      border: '1px solid var(--rule-2)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Sessions"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule)'
    }
  }, e.sessions && e.sessions.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '170px 130px 1fr',
      gap: 24,
      padding: '14px 0',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'baseline'
    },
    className: "session-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, s.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, s.time), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 17,
      lineHeight: 1.35
    }
  }, s.t))))), e.audience && /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 24,
      color: 'var(--ink-3)',
      maxWidth: 580,
      fontStyle: 'italic',
      fontFamily: 'var(--serif)',
      fontSize: 15
    }
  }, e.audience), e.note && /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 24,
      color: 'var(--ink-3)',
      maxWidth: 580
    }
  }, e.note), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, e.website && /*#__PURE__*/React.createElement("a", {
    href: e.website,
    target: "_blank",
    rel: "noreferrer",
    className: "btn"
  }, "Open program ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-ghost"
  }, "Inquire about session"))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width:1000px) {
          .featured-event { grid-template-columns: 1fr !important; }
        }
        @media (max-width:700px) {
          .session-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `));
}

/* ============================================================
   PAST
   ============================================================ */
function PastBlock() {
  const [showAll, setShowAll] = lcUseState(false);
  const visible = showAll ? PAST : PAST.slice(0, 5);
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Past"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Past appearances"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1000
    }
  }, "Selected past engagements."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, visible.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 200px 1fr 200px',
      gap: 32,
      padding: '24px 0',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'baseline'
    },
    className: "past-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, p.year), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, p.event), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(20px,1.6vw,24px)',
      lineHeight: 1.25,
      letterSpacing: '-0.01em'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "small",
    style: {
      color: 'var(--ink-3)',
      textAlign: 'right'
    }
  }, p.location)))), PAST.length > 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowAll(!showAll),
    className: "link-arrow"
  }, showAll ? 'Show fewer' : `Show all ${PAST.length} past engagements`, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, showAll ? '↑' : '↓'))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .past-row { grid-template-columns: 1fr !important; gap: 6px !important; } .past-row > div:last-child { text-align: left !important; } }`)));
}

/* ============================================================
   BOOKING CTA
   ============================================================ */
function BookingCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-forest section-pad",
    "data-screen-label": "Booking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 80,
      alignItems: 'center'
    },
    className: "booking-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 24
    }
  }, "Invitations"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      textWrap: 'balance'
    }
  }, "Inviting Dr. Canapp to your meeting, congress, or wetlab."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 24,
      maxWidth: 540
    }
  }, "Dr. Canapp accepts a limited number of speaking and teaching invitations each year. Email with the meeting brief, dates, expected audience, and topic of interest \u2014 typical response within five working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-clay"
  }, "Send an invitation ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 18
    }
  }, "Please include"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['Meeting / wetlab name and host organization', 'Proposed dates and city', 'Expected audience (residents, GPs, specialists, students)', 'Topic of interest — anatomical region or theme', 'Format (keynote / breakout / hands-on / panel)', 'Sponsorship or speaker honorarium terms'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      color: 'rgba(244,239,229,0.86)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      fontFamily: 'var(--serif)',
      fontSize: 20,
      lineHeight: 1
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, x)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .booking-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`)));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/lectures']=LecturesPage;
})();
(function(){
/* global React, ReactDOM */
const {
  useState: acUseState,
  useMemo: acUseMemo
} = React;

/* ============================================================
   PUBLICATIONS (real, from public record)
   ============================================================ */
const PUBLICATIONS = [{
  year: 2024,
  authors: 'Turner KF, Canapp SO Jr, Canapp DA, Sutton AM, Canapp A, Jimenez IA, Gerardi J',
  title: 'Client-based evaluation of the effects of localized vibration therapy on pain and mobility scores in dogs with radiographic bilateral hip dysplasia',
  journal: 'Frontiers in Veterinary Science, 11:1424373',
  topic: 'Rehabilitation',
  status: 'published',
  month: 'August'
}, {
  year: 2023,
  authors: 'Sack D, Canapp DA, Canapp SO, Majeski S, Curry J, Sutton A, Cullen R',
  title: 'Iliopsoas strain demographics, concurrent injuries, and grade determined by musculoskeletal ultrasound in 72 agility dogs',
  journal: 'Canadian Journal of Veterinary Research, 87(3): 196–201',
  topic: 'Iliopsoas',
  status: 'published',
  month: 'July'
}, {
  year: 2023,
  authors: 'Tsoi H, Canapp DA, Canapp SO',
  title: 'Ultrasonographic detection of cranial cruciate ligament pathology in canine stifles without cranio-caudal instability',
  journal: 'Veterinary Evidence',
  topic: 'Stifle',
  status: 'published',
  month: 'March'
}, {
  year: 2021,
  authors: 'Toijala TM, Canapp DA, Canapp SO',
  title: 'Ultrasonography findings in the proximal sciatic nerve and deep gluteal muscles in 29 dogs with suspected sciatic neuritis',
  journal: 'Frontiers in Veterinary Science, 8:704904',
  topic: 'MSK Ultrasound',
  status: 'published'
}, {
  year: 2021,
  authors: 'Stokes R, Canapp DA, Canapp SO, Ferrell J',
  title: 'Evaluation of carpal injuries with diagnostic musculoskeletal ultrasound in the canine',
  journal: 'Journal of the American Veterinary Medical Association (JAVMA)',
  topic: 'Carpus',
  status: 'published'
}, {
  year: 2019,
  authors: 'Canapp SO, Canapp DA, Chun N',
  title: 'New Treatment Options for Agility Dogs with Arthritis',
  journal: 'Clean Run Magazine',
  topic: 'Clinical Writing',
  status: 'published',
  month: 'June'
}, {
  year: 2018,
  authors: 'Carr BJ, Canapp SO, Petrovitch JL, Campana D, Canapp DA, Leasure CS',
  title: 'Retrospective Study on External Canine Limb Prosthesis used in 24 Patients',
  journal: 'Veterinary Evidence, 3(1)',
  topic: 'Sports Medicine',
  status: 'published'
}, {
  year: 2018,
  authors: 'McDougal RA, Canapp SO, Canapp DA',
  title: 'Ultrasonographic findings in 41 dogs treated with bone marrow aspirate concentrate and platelet-rich plasma for a supraspinatus tendinopathy: A retrospective study',
  journal: 'Frontiers in Veterinary Science, 5:98',
  topic: 'Regenerative Medicine',
  status: 'published'
}, {
  year: 2017,
  authors: 'Cullen R, Canapp DA, Dycus D, Carr B, Ibrahim V, Canapp SO',
  title: 'Clinical evaluation of iliopsoas strain with findings from diagnostic musculoskeletal ultrasound in agility performance canines — 73 cases',
  journal: 'Veterinary Evidence, 2(2)',
  topic: 'Iliopsoas',
  status: 'published',
  note: 'Seminal paper on MSK ultrasound for iliopsoas evaluation.'
}, {
  year: 2017,
  authors: 'Gamble LJ, Canapp DA, Canapp SO',
  title: 'Evaluation of Achilles Tendon Injuries with Findings from Diagnostic Musculoskeletal Ultrasound in Canines — 43 Cases',
  journal: 'Veterinary Evidence, 2(3)',
  topic: 'Tarsus',
  status: 'published',
  month: 'September'
}, {
  year: 2017,
  authors: 'Canapp DA, Canapp SO',
  title: 'Tendinopathies — diagnostic ultrasound and regenerative considerations',
  journal: '2nd ECVSMR Scientific Meeting Proceedings',
  topic: 'Tendinopathy',
  status: 'published'
}, {
  year: 2016,
  authors: 'Carr BJ, Canapp SO, Canapp DA, Gamble LJ, Dycus D',
  title: 'Adhesive Capsulitis in Eight Dogs: Diagnosis and Management',
  journal: 'Veterinary Sciences, 3:55',
  topic: 'Tendinopathy',
  status: 'published',
  month: 'July'
}, {
  year: 2016,
  authors: 'Canapp SO, Canapp DA, Ibrahim V, Carr BJ, Cox C, Barrett JG',
  title: 'The use of adipose-derived progenitor cells and platelet-rich plasma combination for the treatment of supraspinatus tendinopathy in 55 dogs: A retrospective study',
  journal: 'Frontiers in Veterinary Science (DOI: 10.3389/fvets.2016.00061)',
  topic: 'Regenerative Medicine',
  status: 'published'
}, {
  year: 2016,
  authors: 'Canapp SO, Canapp DA, Carr BJ, Cox C, Barrett JG',
  title: 'Supraspinatus Tendinopathy in 327 Dogs: A Retrospective Study',
  journal: 'Veterinary Evidence, 1(3)',
  topic: 'Tendinopathy',
  status: 'published'
}, {
  year: 2013,
  authors: 'Canapp DA',
  title: 'Forelimb Rehabilitation Techniques — chapter in Canine Sports Medicine and Rehabilitation (Zink & Van Dyke, eds.)',
  journal: 'Blackwell Publishing — textbook',
  topic: 'Book Chapter',
  status: 'published'
}, {
  year: 2013,
  authors: 'Canapp DA',
  title: 'Canine Osteoarthritis',
  journal: 'Clinician\'s Brief',
  topic: 'Clinical Writing',
  status: 'published',
  month: 'August'
}, {
  year: 2013,
  authors: 'Canapp DA',
  title: 'Diagnostic Musculoskeletal Ultrasound for the Canine Athlete',
  journal: 'Clean Run Magazine',
  topic: 'Clinical Writing',
  status: 'published',
  month: 'December'
}, {
  year: 2010,
  authors: 'Canapp DA',
  title: 'Hydrotherapy for the Canine Athlete',
  journal: 'Clean Run Magazine',
  topic: 'Clinical Writing',
  status: 'published',
  month: 'December'
}, {
  year: 2009,
  authors: 'Canapp SO, Acciani D, Hulse D, Schulz K, Canapp DA',
  title: 'Rehabilitation Therapy for the Elbow in Dogs',
  journal: 'Veterinary Surgery, 38:300–306',
  topic: 'Rehabilitation',
  status: 'published',
  note: 'Foundational peer-reviewed paper on canine elbow rehabilitation.'
}, {
  year: 2008,
  authors: 'Canapp DA, Zink C',
  title: 'Prevention of Injury',
  journal: 'Clean Run Magazine',
  topic: 'Clinical Writing',
  status: 'published',
  month: 'July'
}, {
  year: 2007,
  authors: 'Canapp DA',
  title: 'Modalities in Veterinary Rehabilitation',
  journal: 'Clinical Techniques in Small Animal Practice, 22: 195–205',
  topic: 'Rehabilitation',
  status: 'published',
  note: 'Early peer-reviewed survey of canine rehabilitation modalities.'
}];
const TOPICS = ['All', 'MSK Ultrasound', 'Iliopsoas', 'Stifle', 'Carpus', 'Tarsus', 'Tendinopathy', 'Regenerative Medicine', 'Rehabilitation', 'Sports Medicine', 'Book Chapter', 'Clinical Writing'];

/* ============================================================
   PAGE
   ============================================================ */
function AchievementsPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "achievements"
  }), /*#__PURE__*/React.createElement(AchievementsHero, null), /*#__PURE__*/React.createElement(ByTheNumbers, null), /*#__PURE__*/React.createElement(Publications, null), /*#__PURE__*/React.createElement(ServiceAndReview, null), /*#__PURE__*/React.createElement(RecognitionCTA, null), /*#__PURE__*/React.createElement(window.Footer, null));
}

/* ============================================================
   HERO
   ============================================================ */
function AchievementsHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "\xA7 Achievements")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero-eyebrow"
  }, "A career in print"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display hero-name",
    style: {
      textWrap: 'balance',
      maxWidth: 1280,
      marginTop: 24
    }
  }, "Two decades.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "line-2",
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "A growing body of evidence.")), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-lede",
    style: {
      marginTop: 36,
      maxWidth: 780
    }
  }, "Peer-reviewed publications, conference proceedings, and editorial contributions \u2014 the scholarly trail behind the practice. Dr. Canapp's research focuses on canine musculoskeletal ultrasound, sports-related soft tissue injury, and the rehabilitation that gets the patient back to work."))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .ch-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`)));
}

/* ============================================================
   BY THE NUMBERS
   ============================================================ */
function ByTheNumbers() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Numbers",
    style: {
      background: 'var(--paper-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "By the numbers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "A measurable contribution to ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "the field.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)'
    },
    className: "numbers-grid"
  }, /*#__PURE__*/React.createElement(NumBlock, {
    n: 21,
    suffix: "",
    l: "Peer-reviewed & clinical publications",
    f: "Selected listing below"
  }), /*#__PURE__*/React.createElement(NumBlock, {
    n: 6,
    suffix: "",
    l: "Anatomical regions covered in research",
    f: "From iliopsoas to carpus"
  }), /*#__PURE__*/React.createElement(NumBlock, {
    n: 20,
    suffix: "+",
    l: "Years of clinical research",
    f: "Continuously since 2005"
  }), /*#__PURE__*/React.createElement(NumBlock, {
    n: "30+",
    suffix: "",
    l: "Countries with course graduates",
    f: "Global teaching footprint"
  })), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .numbers-grid { grid-template-columns: repeat(2,1fr) !important; } .numbers-grid > div + div { border-left: none !important; } }`)));
}
function NumBlock({
  n,
  suffix,
  l,
  f
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 32px',
      borderLeft: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(56px,7vw,108px)',
      lineHeight: 0.9,
      letterSpacing: '-0.03em'
    }
  }, typeof n === 'number' ? /*#__PURE__*/React.createElement(window.CountUp, {
    to: n,
    suffix: suffix
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, n, suffix)), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 18,
      fontStyle: 'italic',
      marginTop: 18,
      color: 'var(--ink-2)',
      maxWidth: 240,
      lineHeight: 1.3
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 12,
      color: 'var(--ink-3)'
    }
  }, f));
}

/* ============================================================
   PUBLICATIONS LIST
   ============================================================ */
function Publications() {
  const [topic, setTopic] = acUseState('All');
  const [sort, setSort] = acUseState('newest');
  const filtered = acUseMemo(() => {
    let list = PUBLICATIONS.filter(p => topic === 'All' || p.topic === topic);
    list.sort((a, b) => sort === 'newest' ? b.year - a.year : a.year - b.year);
    return list;
  }, [topic, sort]);
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Publications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Publications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance'
    }
  }, "The papers."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      maxWidth: 720
    }
  }, "A chronological listing of Dr. Canapp's peer-reviewed publications, chapters, and proceedings \u2014 filterable by anatomical region or research topic."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, TOPICS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTopic(t),
    style: {
      padding: '8px 14px',
      border: topic === t ? '1px solid var(--ink)' : '1px solid var(--rule-2)',
      background: topic === t ? 'var(--ink)' : 'var(--paper)',
      color: topic === t ? 'var(--paper)' : 'var(--ink-2)',
      fontSize: 12,
      letterSpacing: '0.04em',
      cursor: 'pointer',
      transition: 'background 0.2s, color 0.2s, border-color 0.2s'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Sort"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSort('newest'),
    style: {
      padding: '6px 10px',
      textDecoration: sort === 'newest' ? 'underline' : 'none',
      color: sort === 'newest' ? 'var(--ink)' : 'var(--ink-3)'
    }
  }, "Newest first"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSort('oldest'),
    style: {
      padding: '6px 10px',
      textDecoration: sort === 'oldest' ? 'underline' : 'none',
      color: sort === 'oldest' ? 'var(--ink)' : 'var(--ink-3)'
    }
  }, "Oldest first"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, filtered.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 160px',
      gap: 36,
      padding: '28px 0',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'start'
    },
    className: "pub-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(40px,3.5vw,56px)',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, p.year), p.month && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 8,
      color: 'var(--ink-3)'
    }
  }, p.month)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(22px,1.9vw,28px)',
      lineHeight: 1.25,
      letterSpacing: '-0.012em',
      textWrap: 'balance'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "small",
    style: {
      marginTop: 10,
      color: 'var(--ink-2)'
    }
  }, p.authors), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      marginTop: 8,
      fontSize: 15,
      fontStyle: 'italic',
      color: 'var(--ink-3)'
    }
  }, p.journal), p.note && /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 12,
      color: 'var(--ink-3)',
      maxWidth: 680,
      fontSize: 14
    }
  }, p.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 10px',
      border: '1px solid var(--rule-2)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--clay)',
      fontWeight: 500
    }
  }, p.topic))))), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 32,
      color: 'var(--ink-3)',
      maxWidth: 760
    }
  }, "Listing reflects publications where Dr. Canapp is an author or named contributor. For complete citation details, reprint requests, or the full bibliographic record, contact info@drdebracanapp.com."), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .pub-row { grid-template-columns: 1fr !important; gap: 12px !important; } .pub-row > div:last-child { text-align: left !important; } }`)));
}

/* ============================================================
   EDITORIAL SERVICE / PEER REVIEW
   ============================================================ */
function ServiceAndReview() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink section-pad",
    "data-screen-label": "Service"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Beyond publication"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "Peer review, board service, and mentorship."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 24,
      maxWidth: 680
    }
  }, "Dr. Canapp serves as a peer reviewer for veterinary journals, has served on the ACVSMR specialty board's exam committee, and has mentored an entire generation of sports medicine residents and rehabilitation interns."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 0,
      border: '1px solid rgba(244,239,229,0.2)'
    },
    className: "service-grid"
  }, [['Peer review', 'Editorial reviewer for Clinician\'s Brief (2013–present), DVM 360 (2012–present), and Veterinary Surgery (2008–present).'], ['ACVSMR specialty board service', 'Canine Chair of the ACVSMR Exam Committee (2013–2015) and Exam Committee member (2012–2015) — the diplomate certification body for veterinary sports medicine & rehabilitation.'], ['Mentorship & education', 'Personally grades course homework and mentors trained clinicians through the remote-read pathway. Faculty advisor to numerous ACVSMR residents and VOSM sports medicine interns over the past decade.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '36px 32px',
      borderRight: '1px solid rgba(244,239,229,0.16)'
    },
    className: "service-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 18
    }
  }, d)))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width:900px){ .service-grid { grid-template-columns: 1fr !important; } .service-cell { border-right: none !important; } .service-cell + .service-cell { border-top: 1px solid rgba(244,239,229,0.16); } }
        `)));
}

/* ============================================================
   CTA
   ============================================================ */
function RecognitionCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)',
      marginBottom: 18
    }
  }, "Continuing scholarship"), /*#__PURE__*/React.createElement("h2", {
    className: "h-display",
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      textWrap: 'balance'
    }
  }, "Reprint requests, research collaboration, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "invitations welcome.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn"
  }, "Email Dr. Canapp ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/lectures",
    className: "btn btn-ghost"
  }, "Upcoming lectures"))));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/achievements']=AchievementsPage;
})();
(function(){
/* global React, ReactDOM */
const {
  useState: aUseState
} = React;
function AboutPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "about"
  }), /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(AboutBio, null), /*#__PURE__*/React.createElement(AboutTimeline, null), /*#__PURE__*/React.createElement(AboutCreds, null), /*#__PURE__*/React.createElement(AboutTeaching, null), /*#__PURE__*/React.createElement(AboutClose, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
function AboutHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "About Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-num"
  }, "\xA7 03"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 24
    }
  }, "About \u2014 Dr. Debra A. Canapp"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      textWrap: 'balance',
      maxWidth: 1280
    }
  }, "Twenty years of ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "looking"), " at", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      fontStyle: 'italic'
    }
  }, "soft tissue"), /*#__PURE__*/React.createElement("span", {
    className: "script",
    style: {
      fontSize: '0.5em',
      color: 'var(--ink-3)',
      margin: '0 0.1em',
      display: 'inline-block',
      transform: 'translateY(-0.4em)'
    }
  }, "\u2014"), "under the skin."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 36,
      maxWidth: 780
    }
  }, "Dr. Debra A. Canapp, DVM, CCRT, CVA, Diplomate of the American College of Veterinary Sports Medicine & Rehabilitation, is internationally recognized as a pioneer in musculoskeletal ultrasound diagnostics for companion and performance dogs."), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 32,
      color: 'var(--ink-3)'
    }
  }, "DVM \xB7 CCRT \xB7 CVA \xB7 Diplomate, ACVSMR"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .ch-grid { grid-template-columns: 1fr !important; gap:24px !important; } }`)));
}

/* ============================================================
   BIO — portrait + paragraphs
   ============================================================ */
function AboutBio() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 80,
      alignItems: 'start'
    },
    className: "bio-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6a17bfbf0751a89e9e8b9bdc/6a1b66828b7d2d08a16a30aa_portrait-doberman.png",
    alt: "Dr. Debra Canapp",
    style: {
      width: '100%',
      display: 'block',
      filter: 'saturate(0.95)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -1,
      left: -1,
      right: -1,
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '18px 22px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "script",
    style: {
      color: 'var(--tan)',
      fontSize: 28,
      lineHeight: 1
    }
  }, "Debra Canapp"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'rgba(244,239,229,0.6)',
      marginTop: 6
    }
  }, "With \"Ygritte\" \xB7 2021")), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "Plate \u2116 001")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "\xA7 01 \xB7 Biography"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 760,
      textWrap: 'balance'
    }
  }, "A career built one anatomical region at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-large",
    style: {
      color: 'var(--ink-2)'
    }
  }, "Dr. Canapp began her journey in sports medicine and rehabilitation with her certification in canine rehabilitation through the Canine Rehabilitation Institute in 2005 \u2014 at a time when the discipline was still considered specialty curiosity rather than standard of care."), /*#__PURE__*/React.createElement("p", {
    className: "body-large",
    style: {
      color: 'var(--ink-2)'
    }
  }, "She has since continued an exclusive career working in small animal sports and rehabilitation medicine. To expand the rehabilitative services available to her patients, she became certified in traditional Chinese veterinary medicine and acupuncture in 2006, and in stem cell therapy in 2007."), /*#__PURE__*/React.createElement("p", {
    className: "body-large",
    style: {
      color: 'var(--ink-2)'
    }
  }, "In 2010\u20132011, her interests turned toward ", /*#__PURE__*/React.createElement("em", null, "diagnostic musculoskeletal ultrasound"), " \u2014 the modality that would come to define her practice. She is currently utilizing this tool, as a leader in the small animal field, both diagnostically and therapeutically through ultrasound-guided regenerative medicine injections."), /*#__PURE__*/React.createElement("p", {
    className: "body-large",
    style: {
      color: 'var(--ink-2)'
    }
  }, "In 2012 she became a board-certified Diplomate of the (then newly recognized) American College of Veterinary Sports Medicine and Rehabilitation. She has been published and lectures internationally on osteoarthritis, sports medicine, regenerative medicine, musculoskeletal ultrasound, and rehabilitation therapy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      padding: '28px 0',
      borderTop: '1px solid var(--rule-2)',
      borderBottom: '1px solid var(--rule-2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "pullquote serif-it",
    style: {
      fontSize: 'clamp(24px,2.6vw,36px)',
      color: 'var(--ink)',
      maxWidth: 780
    }
  }, "\"I gravitated toward ultrasound because it's the one modality that lets you watch the tissue you're trying to heal \u2014 in real time, while the patient is awake.\""), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 18,
      color: 'var(--clay)'
    }
  }, "\u2014 Dr. Debra Canapp")))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .bio-grid { grid-template-columns: 1fr !important; gap:48px !important; } .bio-grid > div:first-child { position:static !important; } }`)));
}

/* ============================================================
   TIMELINE
   ============================================================ */
function AboutTimeline() {
  const events = [{
    y: '2005',
    t: 'Certified in canine rehabilitation',
    d: 'Canine Rehabilitation Institute, Loxahatchee, Florida.'
  }, {
    y: '2006',
    t: 'Certified in TCVM acupuncture',
    d: 'International Veterinary Acupuncture Society. Integrated immediately into sports medicine practice.'
  }, {
    y: '2007',
    t: 'Certified in stem cell therapy',
    d: 'Among the early practitioners adopting regenerative medicine for canine athletes.'
  }, {
    y: '2010',
    t: 'Advanced training in MSK ultrasound',
    d: 'Dr. Canapp\'s focus turns to diagnostic musculoskeletal ultrasound — the modality that will define her practice.'
  }, {
    y: '2011',
    t: 'First clinical adoption of MSK US',
    d: 'Becomes one of the first small-animal practitioners in North America to integrate MSK ultrasound clinically.'
  }, {
    y: '2012',
    t: 'Board-certified Diplomate, ACVSMR',
    d: 'American College of Veterinary Sports Medicine & Rehabilitation — at the inaugural cohort of the new specialty.'
  }, {
    y: '2015',
    t: 'International lecturer',
    d: 'Begins lecturing domestically and abroad on MSK ultrasound and sports medicine — a practice that continues today.'
  }, {
    y: '2020',
    t: 'Online MSK ultrasound course launched',
    d: 'The Thinkific-hosted course opens to veterinarians worldwide, with personally-graded homework.'
  }, {
    y: 'Today',
    t: 'Internationally mobile specialist practice',
    d: 'Diagnostic MSK ultrasound by referral, telemedicine reads, and continuing education — reaching veterinarians and patients wherever the work takes her.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-paper-deep section-pad",
    "data-screen-label": "Timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Career timeline",
    num: "\xA7 02"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1100
    }
  }, "Two decades, one ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "line of inquiry.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '108px',
      top: 0,
      bottom: 0,
      width: 1,
      background: 'var(--ink)'
    },
    className: "timeline-line"
  }), events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.y,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 36px 1fr',
      gap: 24,
      padding: '28px 0',
      borderBottom: i === events.length - 1 ? 'none' : '1px solid var(--rule)'
    },
    className: "timeline-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 13,
      letterSpacing: '0.18em',
      color: 'var(--clay)',
      paddingTop: 8,
      fontWeight: 500
    }
  }, e.y), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--paper-deep)',
      border: '2px solid var(--ink)',
      borderRadius: '50%',
      position: 'relative',
      zIndex: 1
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(24px,2.4vw,32px)',
      lineHeight: 1.15,
      letterSpacing: '-0.012em',
      maxWidth: 780
    }
  }, e.t), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginTop: 10,
      color: 'var(--ink-3)',
      maxWidth: 780
    }
  }, e.d))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:700px){ .timeline-line { left:32px !important; } .timeline-row { grid-template-columns: 64px 24px 1fr !important; } }`)));
}

/* ============================================================
   CREDENTIALS GRID
   ============================================================ */
function AboutCreds() {
  const groups = [{
    label: 'Board certifications',
    items: ['Diplomate, American College of Veterinary Sports Medicine and Rehabilitation (ACVSMR)', 'Doctor of Veterinary Medicine (DVM)']
  }, {
    label: 'Specialty certifications',
    items: ['Certified Canine Rehabilitation Therapist (CCRT)', 'Certified Veterinary Acupuncture, IVAS (CVA)', 'Stem Cell Therapy Certification', 'Diagnostic Musculoskeletal Ultrasound, advanced training']
  }, {
    label: 'Professional activity',
    items: ['International lecturer · 20+ years', 'Peer reviewer · scientific veterinary journals', 'Grant committee reviewer', 'Clinical trials investigator · sports medicine & rehabilitation']
  }, {
    label: 'Recognition',
    items: ['Internationally recognized leader in canine MSK ultrasound', 'Published author · OA, sports & regenerative medicine', 'Pioneer · small-animal MSK ultrasound adoption', 'Lecturer · WVC, ACVSMR symposia, and international meetings']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Credentials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Credentials & recognition",
    num: "\xA7 03"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance'
    }
  }, "The receipts."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 48
    },
    className: "cred-grid"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18,
      color: 'var(--clay)'
    }
  }, g.label), /*#__PURE__*/React.createElement("ul", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, g.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: '18px 0',
      borderBottom: '1px solid var(--rule)',
      fontSize: 17,
      lineHeight: 1.4,
      color: 'var(--ink-2)'
    },
    className: "serif"
  }, it)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .cred-grid { grid-template-columns: 1fr !important; gap:32px !important; } }`)));
}

/* ============================================================
   TEACHING / WHAT SHE TEACHES
   ============================================================ */
function AboutTeaching() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink section-pad",
    "data-screen-label": "Teaching"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 80,
      alignItems: 'start'
    },
    className: "teach-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 18
    }
  }, "\xA7 04 \xB7 Teaching"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      textWrap: 'balance'
    }
  }, "The clinician who teaches the way she ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--tan)'
    }
  }, "wishes she'd been taught.")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 32,
      maxWidth: 540
    }
  }, "Dr. Canapp actively trains veterinarians in rehabilitation medicine and diagnostic musculoskeletal ultrasound through lectures, telemedicine, webinars, and online educational platforms. Her course on Thinkific has reached vets in over 30 countries."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn btn-clay"
  }, "See the course ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(244,239,229,0.3)'
    }
  }, [['Online course', 'Self-paced, modular, personally graded'], ['In-person labs', 'Annual hands-on labs hosted regionally'], ['Telemedicine mentoring', '1:1 case mentoring for course graduates'], ['Conference lectures', 'WVC · ACVSMR · IAVRPT · international symposia'], ['Journal contributions', 'Peer-reviewed publications on OA, MSK US, regenerative medicine']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 24,
      padding: '18px 0',
      borderBottom: '1px solid rgba(244,239,229,0.18)'
    },
    className: "teach-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 18,
      lineHeight: 1.3
    }
  }, v)))))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width:1000px){ .teach-grid { grid-template-columns:1fr !important; gap:48px !important; } }
          @media (max-width:700px){ .teach-row { grid-template-columns:1fr !important; gap:6px !important; } }
        `)));
}

/* ============================================================
   CLOSE
   ============================================================ */
function AboutClose() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "About Close"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "script",
    style: {
      fontSize: 'clamp(56px,7vw,120px)',
      color: 'var(--clay)',
      lineHeight: 1.05
    }
  }, "Debra Canapp"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 14,
      color: 'var(--ink-3)'
    }
  }, "DVM \xB7 CCRT \xB7 CVA \xB7 Diplomate, ACVSMR"), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 36,
      maxWidth: 680,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "A practice, a course, a remote-read pathway \u2014 all under one clinician who has spent two decades looking exclusively at canine soft tissue."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/services",
    className: "btn"
  }, "Refer a case ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn btn-ghost"
  }, "Take the course"))));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/about']=AboutPage;
})();
(function(){
/* global React, ReactDOM */
const {
  useState: eUseState,
  useEffect: eUseEffect
} = React;
const PLANS = {
  '3': {
    months: 3,
    price: 300,
    label: '3-month extension',
    desc: 'A focused stretch — finish the homework cycle or revisit a module before remote-read submission.'
  },
  '6': {
    months: 6,
    price: 500,
    label: '6-month extension',
    desc: 'A longer runway — useful for residents, working clinicians, and anyone balancing the course alongside a busy practice.'
  }
};
function ExtensionsPage() {
  // Read plan from URL ?plan=3 or ?plan=6
  const initialPlan = (() => {
    const m = window.location.search.match(/[?&]plan=([36])/);
    return m ? m[1] : '6';
  })();
  const [plan, setPlan] = eUseState(initialPlan);
  const [step, setStep] = eUseState('cart'); // cart | paid

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "course"
  }), /*#__PURE__*/React.createElement(ExtensionsHero, null), step === 'cart' ? /*#__PURE__*/React.createElement(CheckoutLayout, {
    plan: plan,
    setPlan: setPlan,
    onPaid: () => setStep('paid')
  }) : /*#__PURE__*/React.createElement(Receipt, {
    plan: plan
  }), /*#__PURE__*/React.createElement(FAQBlock, null), /*#__PURE__*/React.createElement(window.Footer, null));
}

/* ============================================================
   HERO
   ============================================================ */
function ExtensionsHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "\xA7 Extension")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero-eyebrow"
  }, "Canine MSK Ultrasound Course \xB7 Add access"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display hero-name",
    style: {
      textWrap: 'balance',
      maxWidth: 1200,
      marginTop: 24
    }
  }, "Extend your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "line-2",
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "course access.")), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-lede",
    style: {
      marginTop: 36,
      maxWidth: 780
    }
  }, "Every enrollment runs for 12 months. If you need more time to finish modules, complete homework, or revisit material, add an extension in 3- or 6-month intervals."))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .ch-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`)));
}

/* ============================================================
   CHECKOUT LAYOUT — plan selector + form
   ============================================================ */
function CheckoutLayout({
  plan,
  setPlan,
  onPaid
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Checkout",
    style: {
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64,
      alignItems: 'start'
    },
    className: "checkout-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18,
      color: 'var(--clay)'
    }
  }, "1 \xB7 Choose extension"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, Object.entries(PLANS).map(([k, p]) => /*#__PURE__*/React.createElement(PlanCard, {
    key: k,
    k: k,
    p: p,
    active: plan === k,
    onSelect: () => setPlan(k)
  }))), /*#__PURE__*/React.createElement(OrderSummary, {
    plan: plan
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18,
      color: 'var(--clay)'
    }
  }, "2 \xB7 Payment details"), /*#__PURE__*/React.createElement(PaymentForm, {
    plan: plan,
    onPaid: onPaid
  }))), /*#__PURE__*/React.createElement("style", null, `
          @media (max-width:1000px) {
            .checkout-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .checkout-grid > div:last-child { position: static !important; }
          }
        `)));
}
function PlanCard({
  k,
  p,
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onSelect,
    style: {
      textAlign: 'left',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 24,
      padding: '24px 28px',
      border: active ? '1px solid var(--ink)' : '1px solid var(--rule-2)',
      background: active ? 'var(--paper)' : 'var(--cream)',
      cursor: 'pointer',
      transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
      position: 'relative'
    },
    className: `plan-card ${active ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      border: active ? '6px solid var(--clay)' : '1.5px solid var(--rule-2)',
      background: active ? 'var(--paper)' : 'transparent',
      marginTop: 6,
      flexShrink: 0,
      transition: 'all 0.2s'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(22px,2vw,28px)',
      lineHeight: 1.1,
      letterSpacing: '-0.012em'
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      marginTop: 6,
      color: 'var(--ink-3)',
      fontSize: 14,
      maxWidth: 340
    }
  }, p.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 'clamp(28px,2.6vw,40px)',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "$", p.price), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, "One-time")));
}
function OrderSummary({
  plan
}) {
  const p = PLANS[plan];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      padding: '28px 32px',
      background: 'var(--ink)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 18
    }
  }, "Order summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid rgba(244,239,229,0.15)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 18
    }
  }, p.label), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 18
    }
  }, "$", p.price, ".00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid rgba(244,239,229,0.15)',
      color: 'rgba(244,239,229,0.7)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "Adds to your existing window"), /*#__PURE__*/React.createElement("span", null, "+", p.months, " months")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '18px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 36,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "$", p.price, ".00", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(244,239,229,0.6)',
      marginLeft: 8
    }
  }, "USD"))));
}

/* ============================================================
   PAYMENT FORM
   ============================================================ */
function PaymentForm({
  plan,
  onPaid
}) {
  const p = PLANS[plan];
  const [vals, setVals] = eUseState({
    name: '',
    email: '',
    studentEmail: '',
    card: '',
    expiry: '',
    cvc: '',
    zip: ''
  });
  const [processing, setProcessing] = eUseState(false);
  const set = k => e => setVals({
    ...vals,
    [k]: e.target.value
  });
  const cardFmt = v => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const expFmt = v => v.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(\d{1,2})/, '$1 / $2');
  const submit = e => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onPaid();
    }, 1400);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      padding: 36
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    value: vals.name,
    onChange: set('name'),
    required: true,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email for receipt",
    value: vals.email,
    onChange: set('email'),
    required: true,
    type: "email",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email on your course enrollment",
    value: vals.studentEmail,
    onChange: set('studentEmail'),
    required: true,
    type: "email",
    placeholder: "If different from above"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px -4px 16px',
      padding: '14px 0',
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Card information"), /*#__PURE__*/React.createElement(CardBrands, null)), /*#__PURE__*/React.createElement(Field, {
    label: "Card number",
    value: vals.card,
    onChange: e => setVals({
      ...vals,
      card: cardFmt(e.target.value)
    }),
    required: true,
    placeholder: "0000 0000 0000 0000",
    autoComplete: "cc-number"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Expiry",
    value: vals.expiry,
    onChange: e => setVals({
      ...vals,
      expiry: expFmt(e.target.value)
    }),
    required: true,
    placeholder: "MM / YY",
    autoComplete: "cc-exp"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "CVC",
    value: vals.cvc,
    onChange: e => setVals({
      ...vals,
      cvc: e.target.value.replace(/\D/g, '').slice(0, 4)
    }),
    required: true,
    placeholder: "123",
    autoComplete: "cc-csc"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "ZIP",
    value: vals.zip,
    onChange: set('zip'),
    required: true,
    autoComplete: "postal-code"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: processing,
    className: "btn btn-clay",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 28,
      padding: '18px 22px',
      fontSize: 14,
      letterSpacing: '0.06em'
    }
  }, processing ? /*#__PURE__*/React.createElement(React.Fragment, null, "Processing", /*#__PURE__*/React.createElement("span", {
    className: "dots",
    style: {
      marginLeft: 6
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, "Pay $", p.price, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "6",
    width: "10",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 6V4a3 3 0 0 1 6 0v2"
  })), "Secured via TLS \xB7 payment processor placeholder for prototype"), /*#__PURE__*/React.createElement("style", null, `
        .dots::after { content: '...'; animation: dots 1.4s steps(4,end) infinite; }
        @keyframes dots { 0% { content: ''; } 25% { content: '.'; } 50% { content: '..'; } 75% { content: '...'; } }
      `));
}
function Field({
  label,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
  autoComplete
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 6,
      fontWeight: 500
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    required: required,
    placeholder: placeholder || '',
    autoComplete: autoComplete,
    style: {
      width: '100%',
      padding: '12px 14px',
      border: '1px solid var(--rule-2)',
      background: 'var(--cream)',
      fontFamily: 'var(--sans)',
      fontSize: 15,
      color: 'var(--ink)',
      outline: 'none',
      transition: 'border-color 0.2s, background 0.2s'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--ink)';
      e.target.style.background = 'var(--paper)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--rule-2)';
      e.target.style.background = 'var(--cream)';
    }
  }));
}
function CardBrands() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      opacity: 0.7
    }
  }, ['VISA', 'MC', 'AMEX', 'DC'].map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      fontFamily: 'var(--sans)',
      fontSize: 9,
      letterSpacing: '0.1em',
      fontWeight: 700,
      padding: '4px 6px',
      border: '1px solid var(--rule-2)',
      color: 'var(--ink-3)'
    }
  }, b)));
}

/* ============================================================
   RECEIPT (after pseudo-payment)
   ============================================================ */
function Receipt({
  plan
}) {
  const p = PLANS[plan];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Receipt",
    style: {
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--ink)',
      padding: '56px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)',
      marginBottom: 18
    }
  }, "Confirmation"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 560
    }
  }, "Your course window just grew by ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, p.months, " months"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 24,
      color: 'var(--ink-2)'
    }
  }, "A receipt is on its way to your email. Your existing access window has been extended automatically \u2014 no further action required on Thinkific."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      padding: '24px 0',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Plan"), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 18
    }
  }, p.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Added"), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 18
    }
  }, "+", p.months, " months")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Charged"), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 18
    }
  }, "$", p.price, ".00 USD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://canapp-sports-medicine.thinkific.com/",
    target: "_blank",
    rel: "noreferrer",
    className: "btn"
  }, "Open your course ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn btn-ghost"
  }, "Back to course")))));
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQBlock() {
  const faqs = [{
    q: 'When can I purchase an extension?',
    a: 'Any time. Extensions stack on top of any time remaining in the initial 12 month period.'
  }, {
    q: 'Are extensions refundable?',
    a: 'Extension fees are non-refundable once applied.'
  }, {
    q: 'Can I extend more than once?',
    a: 'Yes. Extensions can be stacked — buy a 6-month extension, then add a 3-month extension later if you need it.'
  }, {
    q: 'What happens after my extended access ends?',
    a: 'Access pauses. You can purchase an extension to regain access. All progress remains in your records.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      background: 'var(--paper)'
    },
    "data-screen-label": "FAQ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "Extension questions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance'
    }
  }, "The short answers."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '40% 1fr',
      gap: 36,
      padding: '28px 0',
      borderBottom: '1px solid var(--rule)'
    },
    className: "faq-row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 'clamp(22px,1.8vw,26px)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    }
  }, f.q), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--ink-2)'
    }
  }, f.a)))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:800px){ .faq-row { grid-template-columns: 1fr !important; gap: 12px !important; } }`)));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/extensions']=ExtensionsPage;
})();
(function(){
/* global React, ReactDOM, d3, topojson */
const {
  useState: nUseState,
  useEffect: nUseEffect,
  useRef: nUseRef,
  useMemo: nUseMemo
} = React;

/* ============================================================
   CLINIC DATA — Dr. Canapp's 2 primary practices + trained-and-endorsed clinicians
   ============================================================ */
const CLINICS = [{
  id: 'md-vosm',
  type: 'primary',
  name: 'Dr. Debra Canapp',
  creds: 'DVM · CCRT · CVA · DACVSMR',
  clinic: 'VOSM — Veterinary Orthopedic & Sports Medicine Group',
  city: 'Annapolis Junction',
  region: 'Maryland',
  country: 'USA',
  countryId: 840,
  stateFips: 24,
  lat: 39.13,
  lng: -76.79,
  website: 'https://www.thrivepetcare.com/locations/maryland/annapolis-junction/veterinary-orthopedic-sports-medicine-group',
  phone: null,
  tag: 'Primary practice',
  note: 'Dr. Canapp\'s East-coast home base for diagnostic MSK ultrasound referrals.',
  specialties: ['MSK Ultrasound', 'Regenerative Med', 'Sports Med']
}, {
  id: 'ca-circleoak',
  type: 'primary',
  name: 'Dr. Debra Canapp',
  creds: 'DVM · CCRT · CVA · DACVSMR',
  clinic: 'Circle Oak Rehabilitation',
  city: 'Petaluma',
  region: 'California',
  country: 'USA',
  countryId: 840,
  stateFips: 6,
  lat: 38.23,
  lng: -122.63,
  website: 'https://www.circleoakrehabilitation.com/',
  phone: null,
  tag: 'Primary practice',
  note: 'Dr. Canapp\'s West-coast practice — by referral, for MSK ultrasound reads.',
  specialties: ['MSK Ultrasound', 'Rehab', 'Acupuncture']
}, {
  id: 'va-4strongpaws',
  type: 'trained',
  name: 'Dr. Stephanie Weddle, DVM',
  creds: 'CCMT · Canine Rehab Therapy',
  clinic: '4STRONG PAWS Mobile Veterinary Physical Rehabilitation',
  city: 'Richmond · Central Virginia',
  region: 'Virginia',
  country: 'USA',
  countryId: 840,
  stateFips: 51,
  lat: 37.54,
  lng: -77.43,
  website: 'https://4strongpawsvetrehab.com/',
  phone: null,
  tag: 'Trained & Endorsed',
  note: 'Completed the All-Inclusive Canine Diagnostic MSK Ultrasound Course with Dr. Canapp. Mobile rehabilitation across Greater Richmond and Central Virginia.',
  specialties: ['MSK Ultrasound', 'CCMT', 'PiezoWave', 'Mobile Rehab']
}, {
  id: 'va-paws',
  type: 'trained',
  name: 'Dr. Stephanie Patterson, DVM',
  creds: 'Canine Rehab Certified',
  clinic: 'P.A.W.S. For Rehabilitation',
  city: 'Virginia Beach',
  region: 'Virginia',
  country: 'USA',
  countryId: 840,
  stateFips: 51,
  lat: 36.85,
  lng: -76.10,
  website: 'https://pawsforrehab.com/',
  phone: '+1 (757) 472-8400',
  tag: 'Trained & Endorsed',
  note: 'Veterinary physical rehabilitation clinic serving the greater Hampton Roads area. Diagnostic ultrasound, PRP, acupuncture, hydrotherapy.',
  specialties: ['MSK Ultrasound', 'PRP', 'Acupuncture', 'Rehab']
}, {
  id: 'fl-mocean',
  type: 'trained',
  name: 'Dr. Kristal Turner, DVM',
  creds: 'CVA · CCRT · DACVSMR',
  clinic: 'mOcean mobility + wellness for animals',
  city: 'Jacksonville Beach',
  region: 'Florida',
  country: 'USA',
  countryId: 840,
  stateFips: 12,
  lat: 30.29,
  lng: -81.39,
  website: 'https://www.moceanvet.com/',
  phone: '+1 (904) 241-8869',
  tag: 'Trained & Endorsed',
  note: 'Integrative mobility and wellness practice combining MSK ultrasound diagnostics with rehabilitation, regenerative therapy and TCVM.',
  specialties: ['MSK Ultrasound', 'Acupuncture', 'Shockwave', 'TCVM']
}, {
  id: 'wa-sunsethill',
  type: 'trained',
  name: 'Dr. Alycia Lamb, DVM',
  creds: 'CCRT',
  clinic: 'Sunset Hill Veterinary & Rehabilitation Center',
  city: 'Seattle',
  region: 'Washington',
  country: 'USA',
  countryId: 840,
  stateFips: 53,
  lat: 47.69,
  lng: -122.37,
  website: 'https://sunsethillvet.com/',
  phone: '+1 (206) 706-7800',
  tag: 'Trained & Endorsed',
  note: 'Seattle\'s first veterinary rehabilitation specialist practice. Dr. Lamb trained under Drs. Sherman and Deb Canapp in advanced MSK ultrasound and needle arthroscopy.',
  specialties: ['MSK Ultrasound', 'Needle Arthroscopy', 'Stem Cell', 'PRP']
}, {
  id: 'az-thrive',
  type: 'trained',
  name: 'Dr. Nicole Chun, DVM',
  creds: 'Sports Medicine & Rehab',
  clinic: 'Thrive Pet Healthcare Specialists North Scottsdale (AMSC)',
  city: 'Scottsdale',
  region: 'Arizona',
  country: 'USA',
  countryId: 840,
  stateFips: 4,
  lat: 33.69,
  lng: -111.92,
  website: 'https://www.thrivepetcare.com/locations/arizona/scottsdale/animal-medical-and-surgical-center/tphs-north-scottsdale-emergency-care',
  phone: '+1 (480) 502-4400',
  tag: 'Trained & Endorsed',
  note: 'AAHA-accredited 24/7 referral and specialty hospital with a Sports Medicine and Rehabilitation team serving the greater Phoenix area.',
  specialties: ['MSK Ultrasound', 'Sports Med', 'Surgery', 'Neurology']
}, {
  id: 'sc-libertyhighway',
  type: 'trained',
  name: 'Dr. Britt Carr Benson, DVM',
  creds: 'CCRT · DACVSMR',
  clinic: 'The Animal Hospital at Liberty Highway',
  city: 'Anderson',
  region: 'South Carolina',
  country: 'USA',
  countryId: 840,
  stateFips: 45,
  lat: 34.50,
  lng: -82.66,
  website: 'https://www.libertyhighwayvet.com/sports-medicine-rehab',
  phone: '+1 (864) 226-0025',
  tag: 'Trained & Endorsed',
  note: 'Diplomate of ACVSMR leading the Canine Sports Medicine and Rehabilitation Center at Liberty Highway. Focused on working and performance dog diagnostics and return-to-sport.',
  specialties: ['MSK Ultrasound', 'Regenerative Med', 'Working Dogs', 'Sports Med']
}, {
  id: 'fi-avec',
  type: 'trained',
  name: 'Dr. Tiiu Toijala',
  creds: 'Veterinarian',
  clinic: 'AVEC Eläinklinikka',
  city: 'Helsinki',
  region: 'Uusimaa',
  country: 'Finland',
  countryId: 246,
  stateFips: null,
  lat: 60.17,
  lng: 24.94,
  website: 'https://avec.vet/henkilokunta/elainlaakarit/tiiu-toijala',
  phone: null,
  tag: 'Trained & Endorsed',
  note: 'Trained by Dr. Canapp in canine diagnostic musculoskeletal ultrasound. Practicing at the AVEC veterinary group in Finland — the first international clinician on the network.',
  specialties: ['MSK Ultrasound', 'Small Animal']
}, {
  id: 'au-vicvet',
  type: 'trained',
  name: 'Dr. Malcolm Ware',
  creds: 'Veterinarian',
  clinic: 'VicVet',
  city: 'Victoria',
  region: 'Victoria',
  country: 'Australia',
  countryId: 36,
  stateFips: null,
  lat: -37.86,
  lng: 145.06,
  website: 'https://vicvet.au/rehabilitation-centre/',
  phone: null,
  tag: 'Trained & Endorsed',
  note: 'Trained by Dr. Canapp in diagnostic MSK ultrasound. Leads the rehabilitation centre at Vic Vet in Victoria, Australia.',
  specialties: ['MSK Ultrasound', 'Rehabilitation']
}, {
  id: 'ca-vca',
  type: 'trained',
  name: 'Dr. Joanne Fagnou',
  creds: 'Veterinarian',
  clinic: '404 Veterinary Emergency and Referral Hospital (VCA Canada)',
  city: 'Newmarket',
  region: 'Ontario',
  country: 'Canada',
  countryId: 124,
  stateFips: null,
  lat: 44.06,
  lng: -79.46,
  website: 'https://vcacanada.com/404emerg',
  phone: null,
  tag: 'Trained & Endorsed',
  note: 'Trained by Dr. Canapp in diagnostic MSK ultrasound. Practicing within the VCA Canada network.',
  specialties: ['MSK Ultrasound']
}, {
  id: 'ca-trilake',
  type: 'trained',
  name: 'Dr. Tara Edwards',
  creds: 'Veterinarian',
  clinic: 'Trilake Animal Hospital (VCA Canada)',
  city: 'Sherwood Park',
  region: 'Alberta',
  country: 'Canada',
  countryId: 124,
  stateFips: null,
  lat: 53.54,
  lng: -113.30,
  website: 'https://vcacanada.com/trilake/primary/team/tara-edwards',
  phone: null,
  tag: 'Trained & Endorsed',
  note: 'Trained by Dr. Canapp in diagnostic MSK ultrasound and eligible to submit cases for remote-read interpretation.',
  specialties: ['MSK Ultrasound']
}, {
  id: 'us-animalia',
  type: 'graduate',
  name: 'Dr. Carly Hubbard',
  creds: 'Veterinarian',
  clinic: 'Animalia Wellness',
  city: 'Franklin',
  region: 'Tennessee',
  country: 'USA',
  countryId: 840,
  stateFips: 47,
  lat: 35.92,
  lng: -86.87,
  website: 'https://www.animaliawellness.com/',
  phone: null,
  tag: 'Course Graduate',
  note: 'Completed the All-Inclusive Canine MSK Ultrasound course with Dr. Canapp and performs the modality in independent practice. Remote-read pathway not yet established.',
  specialties: ['MSK Ultrasound']
}, {
  id: 'az-aawc',
  type: 'graduate',
  name: 'Dr. Diane Paster',
  creds: 'Veterinarian',
  clinic: 'Arizona Animal Wellness Center',
  city: 'Scottsdale',
  region: 'Arizona',
  country: 'USA',
  countryId: 840,
  stateFips: 4,
  lat: 33.49,
  lng: -111.93,
  website: 'https://www.arizonaanimalwellnesscenter.com/',
  phone: null,
  tag: 'Course Graduate',
  note: 'Completed the All-Inclusive Canine MSK Ultrasound course with Dr. Canapp. Practicing MSK ultrasound independently at Arizona Animal Wellness Center.',
  specialties: ['MSK Ultrasound', 'Integrative Med']
}, {
  id: 'uk-summerhill',
  type: 'graduate',
  name: 'Dr. Jane Feneley',
  creds: 'Veterinarian',
  clinic: 'Summerhill Vets Fakenham (IVC Evidensia)',
  city: 'Fakenham',
  region: 'Norfolk · England',
  country: 'United Kingdom',
  countryId: 826,
  stateFips: null,
  lat: 52.83,
  lng: 0.85,
  website: 'https://ivc.co.uk/find-a-vet/summerhill-vets-fakenham',
  phone: null,
  tag: 'Course Graduate',
  note: 'Completed the All-Inclusive Canine MSK Ultrasound course with Dr. Canapp. Practicing the modality at Summerhill Vets in Norfolk.',
  specialties: ['MSK Ultrasound']
}, {
  id: 'us-arcata',
  type: 'graduate',
  name: 'Dr. Joy Fox-Beaudet',
  creds: 'Veterinarian',
  clinic: 'Arcata Veterinary Hospital',
  city: 'Arcata',
  region: 'California',
  country: 'USA',
  countryId: 840,
  stateFips: 6,
  lat: 40.87,
  lng: -124.08,
  website: 'https://arcatavet.com/',
  phone: null,
  tag: 'Course Graduate',
  note: 'Completed the All-Inclusive Canine MSK Ultrasound course with Dr. Canapp. Practicing MSK ultrasound independently at Arcata Veterinary Hospital on the North Coast of California.',
  specialties: ['MSK Ultrasound']
}, {
  id: 'xx-acerlux',
  type: 'graduate',
  name: 'Dr. Chris Lee',
  creds: 'Veterinarian',
  clinic: 'Acerlux',
  city: 'Southern California',
  region: 'California',
  country: 'USA',
  countryId: 840,
  stateFips: 6,
  lat: 32.72,
  lng: -117.16,
  website: 'https://acerlux.com/',
  phone: null,
  tag: 'Course Graduate',
  note: 'Completed the All-Inclusive Canine MSK Ultrasound course with Dr. Canapp. Practicing in Southern California.',
  specialties: ['MSK Ultrasound']
}, {
  id: 'uk-eden',
  type: 'graduate',
  name: 'Dr. Georgina Timms',
  creds: 'Veterinarian',
  clinic: 'Eden Vets',
  city: 'Penrith',
  region: 'Cumbria · England',
  country: 'United Kingdom',
  countryId: 826,
  stateFips: null,
  lat: 54.66,
  lng: -2.75,
  website: 'https://eden-vets.co.uk/',
  phone: null,
  tag: 'Course Graduate',
  note: 'Completed the All-Inclusive Canine MSK Ultrasound course with Dr. Canapp. Practicing MSK ultrasound at Eden Vets in the Eden Valley.',
  specialties: ['MSK Ultrasound']
}];
const HIGHLIGHTED_COUNTRY_IDS = new Set(CLINICS.map(c => c.countryId));
const HIGHLIGHTED_STATE_FIPS = new Set(CLINICS.map(c => c.stateFips));
const PRIMARY_STATE_FIPS = new Set(CLINICS.filter(c => c.type === 'primary').map(c => c.stateFips));

/* ============================================================
   PAGE
   ============================================================ */
function NetworkPage() {
  const [selected, setSelected] = nUseState(CLINICS[2]); // default to the trained one
  const [filter, setFilter] = nUseState('all');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "network"
  }), /*#__PURE__*/React.createElement(NetworkHero, null), /*#__PURE__*/React.createElement(MapSection, {
    selected: selected,
    setSelected: setSelected
  }), /*#__PURE__*/React.createElement(DetailCard, {
    clinic: selected
  }), /*#__PURE__*/React.createElement(ClinicList, {
    selected: selected,
    setSelected: setSelected,
    filter: filter,
    setFilter: setFilter
  }), /*#__PURE__*/React.createElement(ApplyBlock, null), /*#__PURE__*/React.createElement(window.Footer, null));
}

/* ============================================================
   PAGE HERO
   ============================================================ */
function NetworkHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-hero section-pad",
    "data-screen-label": "Network Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 48
    },
    className: "ch-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "\xA7 Network")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero-eyebrow"
  }, "Trained & Endorsed by Dr. Debra Canapp"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display hero-name",
    style: {
      textWrap: 'balance',
      maxWidth: 1280,
      marginTop: 24
    }
  }, "Clinicians trained with", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "line-2",
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "Dr. Debra Canapp.")), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-lede",
    style: {
      marginTop: 36,
      maxWidth: 780
    }
  }, "Each veterinarian below has completed extensive training with Dr. Debra Canapp in MSK ultrasound \u2014 by completing structured coursework, anatomically-graded homework, and case-by-case proficiency review. Independently practice and perform complex musculoskeletal ultrasound diagnostics, with the option to submit cases to Dr. Canapp for second-opinion interpretation."), /*#__PURE__*/React.createElement("div", {
    className: "map-legend hero-ctas",
    style: {
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lg-dot primary"
  }), "Where Dr. Canapp practices"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lg-dot trained"
  }), "Trained & endorsed (remote-read access)"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lg-dot graduate"
  }), "Course graduates"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lg-tint"
  }), "Region with endorsed practitioner")))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:900px){ .ch-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`)));
}

/* ============================================================
   MAP SECTION
   ============================================================ */
function MapSection({
  selected,
  setSelected
}) {
  const wrapRef = nUseRef(null);
  const zoomGroupRef = nUseRef(null); // SVG <g> we animate via attribute
  const [view, setView] = nUseState('world'); // 'us' | 'world'
  const [usData, setUsData] = nUseState(null);
  const [worldData, setWorldData] = nUseState(null);
  const [size, setSize] = nUseState({
    w: 1200,
    h: 720
  });
  const [hovered, setHovered] = nUseState(null);
  const [hoverFips, setHoverFips] = nUseState(null);
  const [hoverCountryId, setHoverCountryId] = nUseState(null);
  const [tip, setTip] = nUseState(null);
  // Zoom target: stored as the focused clinic so it survives view changes
  const [focusedId, setFocusedId] = nUseState(null);

  // Live camera state — mutated by requestAnimationFrame for smooth animation.
  // We use SVG transform ATTRIBUTE (not CSS) because CSS transforms on <g>
  // are unreliable across browsers.
  const camRef = nUseRef({
    tx: 0,
    ty: 0,
    k: 1
  });
  const animRef = nUseRef(null);

  // Resize observer
  nUseEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(entries => {
      const r = entries[0].contentRect;
      const ratio = view === 'world' ? 0.5 : 0.58;
      const h = Math.min(720, Math.max(440, r.width * ratio));
      setSize({
        w: r.width,
        h
      });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [view]);

  // Load both atlases
  nUseEffect(() => {
    if (!usData) {
      fetch('https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json').then(r => r.json()).then(setUsData).catch(e => console.error(e));
    }
    if (!worldData) {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then(r => r.json()).then(setWorldData).catch(e => console.error(e));
    }
  }, []);

  // Projection + paths (memoized) — depends on view
  const mapData = nUseMemo(() => {
    if (!window.d3 || !window.topojson) return null;
    if (view === 'us' && usData) {
      const fc = window.topojson.feature(usData, usData.objects.states);
      const borders = window.topojson.mesh(usData, usData.objects.states, (a, b) => a !== b);
      const projection = window.d3.geoAlbersUsa().scale(size.w * 1.18).translate([size.w / 2, size.h / 2]);
      const pathFn = window.d3.geoPath(projection);
      return {
        kind: 'us',
        features: fc.features,
        borders,
        path: pathFn,
        project: projection
      };
    }
    if (view === 'world' && worldData) {
      const fc = window.topojson.feature(worldData, worldData.objects.countries);
      const projection = window.d3.geoNaturalEarth1().scale(size.w / 6.0).translate([size.w / 2, size.h / 2 + 14]);
      const pathFn = window.d3.geoPath(projection);
      return {
        kind: 'world',
        features: fc.features,
        path: pathFn,
        project: projection
      };
    }
    return null;
  }, [view, usData, worldData, size.w, size.h]);

  // Tooltip is hover-only. No zoom on hover.
  const showTip = (e, clinic) => {
    const rect = wrapRef.current.getBoundingClientRect();
    setTip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      clinic
    });
    setHovered(clinic);
    setHoverFips(clinic.stateFips);
    setHoverCountryId(clinic.countryId);
  };
  const moveTip = e => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    setTip(prev => prev ? {
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    } : prev);
  };
  const hideTip = () => {
    setTip(null);
    setHovered(null);
    setHoverFips(null);
    setHoverCountryId(null);
  };

  // Click handler — select + smooth fly-to zoom centered on the pin
  const handleClick = clinic => {
    setSelected(clinic);
    setFocusedId(clinic.id);
  };
  const clearFocus = () => setFocusedId(null);

  // When selection changes from the list (outside the map), follow it.
  // Skip the initial mount so the map starts unzoomed.
  const didMountRef = nUseRef(false);
  nUseEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (!selected) return;
    if (selected.country !== 'USA' && view === 'us') setView('world');
    setFocusedId(selected.id);
  }, [selected]);

  // Compute zoom transform — pan + scale so the focused clinic is dead-center.
  // Driven by requestAnimationFrame against the SVG transform attribute.
  const focusedClinic = focusedId ? CLINICS.find(c => c.id === focusedId) : null;
  const focusedPt = focusedClinic && mapData ? mapData.project([focusedClinic.lng, focusedClinic.lat]) : null;
  const ZOOM_SCALE = focusedClinic?.type === 'primary' ? 3.2 : 4.0;
  const targetTx = focusedPt ? size.w / 2 - ZOOM_SCALE * focusedPt[0] : 0;
  const targetTy = focusedPt ? size.h / 2 - ZOOM_SCALE * focusedPt[1] : 0;
  const targetK = focusedPt ? ZOOM_SCALE : 1;
  const isZoomed = !!focusedPt;

  // Animate the camera toward the target whenever the target changes.
  // Uses setTimeout-based interpolation (works in iframes/background tabs too)
  // with easeOutQuint for buttery glide.
  nUseEffect(() => {
    if (!zoomGroupRef.current) return;
    const easeOutQuint = t => 1 - Math.pow(1 - t, 5);
    const DURATION = 850;
    const FRAME = 16;
    const fromTx = camRef.current.tx;
    const fromTy = camRef.current.ty;
    const fromK = camRef.current.k;
    const toTx = targetTx,
      toTy = targetTy,
      toK = targetK;
    if (fromTx === toTx && fromTy === toTy && fromK === toK) return;
    const start = performance.now();
    if (animRef.current) {
      clearTimeout(animRef.current);
      animRef.current = null;
    }
    const step = () => {
      const now = performance.now();
      const t = Math.min(1, (now - start) / DURATION);
      const e = easeOutQuint(t);
      const tx = fromTx + (toTx - fromTx) * e;
      const ty = fromTy + (toTy - fromTy) * e;
      const k = fromK + (toK - fromK) * e;
      camRef.current = {
        tx,
        ty,
        k
      };
      if (zoomGroupRef.current) {
        zoomGroupRef.current.setAttribute('transform', `translate(${tx},${ty}) scale(${k})`);
      }
      if (t < 1) {
        animRef.current = setTimeout(step, FRAME);
      } else {
        animRef.current = null;
      }
    };
    step(); // first frame immediately
    return () => {
      if (animRef.current) {
        clearTimeout(animRef.current);
        animRef.current = null;
      }
    };
  }, [targetTx, targetTy, targetK]);

  // Filter clinics by what's projectable for the current view.
  // Sort so primary markers render last → drawn on top of others.
  const TYPE_ORDER = {
    trained: 0,
    graduate: 1,
    primary: 2
  };
  const visibleClinics = (view === 'us' ? CLINICS.filter(c => c.country === 'USA') : CLINICS).slice().sort((a, b) => (TYPE_ORDER[a.type] ?? 0) - (TYPE_ORDER[b.type] ?? 0));
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Map"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--rule)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px var(--pad)',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--ink-3)'
    }
  }, "View \u2014 ", view === 'world' ? `${CLINICS.length} clinicians · ${new Set(CLINICS.map(c => c.country)).size} countries` : `${visibleClinics.length} US clinicians · ${new Set(visibleClinics.map(c => c.stateFips)).size} states`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      border: '1px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setView('world');
      clearFocus();
    },
    className: "map-tab",
    "data-active": view === 'world'
  }, "Global"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setView('us');
      clearFocus();
    },
    className: "map-tab",
    "data-active": view === 'us'
  }, "United States")))), /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: "map-wrap",
    style: {
      height: size.h
    },
    onClick: e => {
      if (e.target.tagName === 'svg' || e.target.tagName === 'rect' || e.currentTarget === e.target) clearFocus();
    }
  }, !mapData ? /*#__PURE__*/React.createElement("div", {
    className: "map-loading"
  }, "Loading the network\u2026") : /*#__PURE__*/React.createElement("svg", {
    className: "map-svg",
    viewBox: `0 0 ${size.w} ${size.h}`,
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("g", {
    ref: zoomGroupRef,
    className: `map-zoom ${isZoomed ? 'is-zoomed' : ''}`
  }, mapData.kind === 'world' && /*#__PURE__*/React.createElement(Graticule, {
    size: size
  }), /*#__PURE__*/React.createElement("g", null, mapData.features.map((f, i) => {
    const id = +f.id;
    const isUs = mapData.kind === 'us';
    const hasClinic = isUs ? HIGHLIGHTED_STATE_FIPS.has(id) : HIGHLIGHTED_COUNTRY_IDS.has(id);
    const isPrimary = isUs ? PRIMARY_STATE_FIPS.has(id) : false;
    const isHover = isUs ? hoverFips === id : hoverCountryId === id;
    return /*#__PURE__*/React.createElement("path", {
      key: `${f.id || 'x'}-${i}`,
      d: mapData.path(f),
      className: ['country-path', hasClinic ? 'has-clinic' : '', isPrimary ? 'is-primary' : '', isHover ? 'is-hover' : ''].join(' ')
    });
  })), mapData.kind === 'us' && mapData.borders && /*#__PURE__*/React.createElement("path", {
    d: mapData.path(mapData.borders),
    fill: "none",
    stroke: "rgba(24,33,28,0.45)",
    strokeWidth: "0.7"
  }), /*#__PURE__*/React.createElement("g", null, visibleClinics.map(c => {
    const pt = mapData.project([c.lng, c.lat]);
    if (!pt) return null;
    const [x, y] = pt;
    const isSel = selected && selected.id === c.id;
    const isHov = hovered && hovered.id === c.id;
    const isFocused = focusedId === c.id;
    return /*#__PURE__*/React.createElement("g", {
      key: c.id,
      className: `marker ${c.type} ${isSel ? 'selected' : ''} ${isHov ? 'hovered' : ''} ${isFocused ? 'focused' : ''}`,
      transform: `translate(${x},${y})`,
      onMouseEnter: e => showTip(e, c),
      onMouseMove: moveTip,
      onMouseLeave: hideTip,
      onClick: e => {
        e.stopPropagation();
        handleClick(c);
      }
    }, c.type === 'primary' && /*#__PURE__*/React.createElement("circle", {
      cx: "0",
      cy: "0",
      r: "8",
      className: "marker-pulse"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "0",
      cy: "0",
      r: c.type === 'primary' ? 18 : c.type === 'graduate' ? 10 : 12,
      className: "marker-ring"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "0",
      cy: "0",
      r: c.type === 'primary' ? 9.5 : c.type === 'graduate' ? 4.5 : 5.5,
      className: "marker-dot"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "0",
      cy: "0",
      r: "14",
      className: "marker-hit"
    }));
  })))), tip && /*#__PURE__*/React.createElement("div", {
    className: "map-tip",
    style: {
      left: tip.x,
      top: tip.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tip-name"
  }, tip.clinic.name), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.85,
      fontSize: 13,
      marginBottom: 8
    }
  }, tip.clinic.clinic), /*#__PURE__*/React.createElement("div", {
    className: "tip-loc"
  }, tip.clinic.city, " \xB7 ", tip.clinic.region, " \xB7 ", tip.clinic.country), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--clay)'
    }
  }, tip.clinic.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(244,239,229,0.55)'
    }
  }, "Click to zoom in")), isZoomed && /*#__PURE__*/React.createElement("button", {
    className: "map-close-zoom",
    onClick: clearFocus,
    "aria-label": "Zoom out"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2190"), " Back to map"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      right: 20,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      fontWeight: 500,
      pointerEvents: 'none'
    }
  }, mapData ? mapData.kind === 'us' ? 'Albers USA' : 'Natural Earth' : '…', " projection")));
}
function Graticule({
  size
}) {
  if (!window.d3) return null;
  const g = window.d3.geoGraticule().step([20, 20])();
  const path = window.d3.geoPath(window.d3.geoNaturalEarth1().scale(size.w / 6.0).translate([size.w / 2, size.h / 2 + 14]));
  return /*#__PURE__*/React.createElement("path", {
    d: path(g),
    fill: "none",
    stroke: "rgba(24,33,28,0.06)",
    strokeWidth: "0.6"
  });
}

/* ============================================================
   DETAIL CARD
   ============================================================ */
function DetailCard({
  clinic
}) {
  if (!clinic) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "map-detail",
    "data-screen-label": "Selected Detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md-num"
  }, String(CLINICS.findIndex(c => c.id === clinic.id) + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "md-eb"
  }, clinic.tag), /*#__PURE__*/React.createElement("div", {
    className: "md-name"
  }, clinic.website ? /*#__PURE__*/React.createElement("a", {
    href: clinic.website,
    target: "_blank",
    rel: "noreferrer",
    className: "md-name-link"
  }, clinic.name) : clinic.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      color: 'var(--tan)',
      fontSize: 14
    }
  }, clinic.website ? /*#__PURE__*/React.createElement("a", {
    href: clinic.website,
    target: "_blank",
    rel: "noreferrer"
  }, clinic.clinic, " \u2197") : clinic.clinic), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      color: 'rgba(244,239,229,0.78)',
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 520
    }
  }, clinic.note)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "md-eb"
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 20,
      lineHeight: 1.4,
      color: 'var(--paper)'
    }
  }, clinic.city, /*#__PURE__*/React.createElement("br", null), clinic.region, " \xB7 ", clinic.country), clinic.specialties && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, clinic.specialties.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      border: '1px solid rgba(244,239,229,0.3)',
      color: 'rgba(244,239,229,0.82)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "md-eb"
  }, "Contact"), clinic.website && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: clinic.website,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontSize: 13
    }
  }, "Visit site \u2192")), clinic.phone && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(244,239,229,0.82)',
      fontSize: 13
    }
  }, clinic.phone)));
}

/* ============================================================
   CLINIC LIST
   ============================================================ */
function ClinicList({
  selected,
  setSelected,
  filter,
  setFilter
}) {
  const filtered = CLINICS.filter(c => {
    if (filter === 'all') return true;
    if (filter === 'primary') return c.type === 'primary';
    if (filter === 'trained') return c.type === 'trained';
    if (filter === 'graduate') return c.type === 'graduate';
    if (filter === 'us') return c.country === 'USA';
    if (filter === 'intl') return c.country !== 'USA';
    return true;
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    "data-screen-label": "Clinic List"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "The roster"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      textWrap: 'balance',
      maxWidth: 1000
    }
  }, "Every clinician on the map, in one list."))), /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, [['all', 'All'], ['primary', 'Where Dr. Canapp practices'], ['trained', 'Trained & endorsed'], ['graduate', 'Course graduates']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `chip ${filter === k ? 'active' : ''}`,
    onClick: () => setFilter(k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "clinic-list"
  }, filtered.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: `clinic-row ${c.type} ${selected && selected.id === c.id ? 'active' : ''}`,
    onClick: () => setSelected(c)
  }, /*#__PURE__*/React.createElement("div", {
    className: "cr-num"
  }, "\u2116 ", String(CLINICS.findIndex(x => x.id === c.id) + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cr-name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "cr-clinic",
    style: {
      marginTop: 4
    }
  }, c.website ? /*#__PURE__*/React.createElement("a", {
    href: c.website,
    target: "_blank",
    rel: "noreferrer",
    className: "cr-link",
    onClick: e => e.stopPropagation()
  }, c.clinic, " ", /*#__PURE__*/React.createElement("span", {
    className: "cr-link-arrow"
  }, "\u2197")) : c.clinic)), /*#__PURE__*/React.createElement("div", {
    className: "cr-loc"
  }, c.city, ", ", c.region), /*#__PURE__*/React.createElement("div", {
    className: "cr-loc"
  }, c.country), /*#__PURE__*/React.createElement("div", {
    className: "cr-tag"
  }, c.tag))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0',
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontStyle: 'italic',
      fontFamily: 'var(--serif)',
      fontSize: 22
    }
  }, "No clinicians match this filter \u2014 yet."))));
}

/* ============================================================
   APPLY / ADD-YOUR-PRACTICE BLOCK
   ============================================================ */
function ApplyBlock() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-ink section-pad",
    "data-screen-label": "Apply"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 80,
      alignItems: 'center'
    },
    className: "apply-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--tan)',
      marginBottom: 24
    }
  }, "The path onto this map"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      color: 'var(--paper)',
      textWrap: 'balance'
    }
  }, "Complete the curriculum. Submit homework. Become a remote-read partner."), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      color: 'rgba(244,239,229,0.82)',
      marginTop: 24,
      maxWidth: 580
    }
  }, "Endorsement isn't given \u2014 it's earned. Veterinarians who complete the all-inclusive Canine MSK Ultrasound course, pass homework review, and demonstrate proficiency become candidates for inclusion on this map."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/course",
    className: "btn btn-clay"
  }, "Start the course ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-ghost",
    style: {
      borderColor: 'rgba(244,239,229,0.4)',
      color: 'var(--paper)'
    }
  }, "Ask about endorsement"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'rgba(244,239,229,0.18)'
    }
  }, [['01', 'Enroll & complete course'], ['02', 'Submit graded homework'], ['03', 'Pass proficiency review'], ['04', 'Join the remote-read network']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: '28px 24px',
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 32,
      color: 'var(--clay)',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      color: 'var(--paper)',
      fontSize: 18,
      marginTop: 12,
      lineHeight: 1.2
    }
  }, l)))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:1000px){ .apply-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`)));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/network']=NetworkPage;
})();
(function(){
/* global React, ReactDOM */
function PortalComingSoon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "portal"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    },
    "data-screen-label": "Portal \u2014 Coming Soon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center',
      maxWidth: 760,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "Referral Portal"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 24,
      fontSize: 'clamp(52px,8vw,104px)'
    }
  }, "Coming", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "soon")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 28,
      maxWidth: 560,
      marginLeft: 'auto',
      marginRight: 'auto',
      textWrap: 'pretty'
    }
  }, "The secure referral portal \u2014 online case submission and diagnostic image review for referring veterinarians \u2014 is in active development. In the meantime, reach out directly and we'll get your case moving."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-clay"
  }, "Email a referral ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/services",
    className: "btn btn-ghost"
  }, "Services & referrals")))), /*#__PURE__*/React.createElement(window.Footer, null));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/portal']=PortalComingSoon;
})();
(function(){
/* global React, ReactDOM */
function ReviewerComingSoon() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    current: "reviewer"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center'
    },
    "data-screen-label": "Reviewer \u2014 Coming Soon"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center',
      maxWidth: 760,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--clay)'
    }
  }, "Image Reviewer"), /*#__PURE__*/React.createElement("h1", {
    className: "h-display",
    style: {
      marginTop: 24,
      fontSize: 'clamp(52px,8vw,104px)'
    }
  }, "Coming", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontWeight: 300,
      color: 'var(--ink-2)'
    }
  }, "soon")), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginTop: 28,
      maxWidth: 560,
      marginLeft: 'auto',
      marginRight: 'auto',
      textWrap: 'pretty'
    }
  }, "The diagnostic image reviewer \u2014 the DICOM reading workspace for remote second-opinion reads \u2014 is in active development. For urgent reads in the meantime, reach out directly."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@drdebracanapp.com",
    className: "btn btn-clay"
  }, "Contact for a read ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "/services",
    className: "btn btn-ghost"
  }, "Remote reads & services")))), /*#__PURE__*/React.createElement(window.Footer, null));
}
window.__ROUTES=window.__ROUTES||{};window.__ROUTES['/reviewer']=ReviewerComingSoon;
})();
  (function go(){ if(!(window.React&&window.ReactDOM&&document.body)){return setTimeout(go,20);} var root=document.getElementById('root'); if(!root){root=document.createElement('div');root.id='root';document.body.insertBefore(root,document.body.firstChild);} var p=location.pathname.replace(/\/+$/,'')||'/'; var C=(window.__ROUTES||{})[p]||(window.__ROUTES||{})['/']; if(C){ReactDOM.createRoot(root).render(React.createElement(C));} })();
})();
