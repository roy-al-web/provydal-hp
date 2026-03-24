/**
 * Provydal - サービス詳細ページ自動生成スクリプト
 * 実行: node install.mjs
 * ※ provydal-hp フォルダの直下で実行してください
 */
import fs from 'fs'
import path from 'path'

// ── ディレクトリ作成 ──
;['src/service/dev','src/service/ai','src/service/line','src/service/sys'].forEach(d => {
  fs.mkdirSync(d, { recursive: true })
})

// ── 共通ナビ ──
function nav() {
  return `
<header class="nav" id="nav">
  <div class="nav__inner">
    <a href="/" class="nav__logo"><span class="nav__logo-bar"></span>Provydal</a>
    <div class="nav__right">
      <a href="/contact/" class="nav__contact-btn">ご相談はこちら</a>
      <button class="nav__burger" id="burger"><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="menu-overlay" id="menuOverlay">
  <div class="menu-overlay__inner">
    <nav class="menu-overlay__nav">
      <a href="/about/"   class="menu-overlay__item" data-close>Company<small>会社概要</small></a>
      <a href="/service/" class="menu-overlay__item" data-close>Service<small>事業内容</small></a>
      <a href="/works/"   class="menu-overlay__item" data-close>Our Works<small>事例・実績</small></a>
      <a href="/news/"    class="menu-overlay__item" data-close>News<small>ニュース</small></a>
      <a href="/career/"  class="menu-overlay__item" data-close>Career<small>採用情報</small></a>
    </nav>
    <div class="menu-overlay__footer">
      <a href="/contact/" class="menu-overlay__contact" data-close>Contact<span>ご相談はこちら</span></a>
    </div>
  </div>
</div>`
}

// ── 共通フッター ──
function footer() {
  return `
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__top">
      <div class="footer__logo"><span class="footer__logo-bar"></span>Provydal</div>
      <nav class="footer__nav">
        <div class="footer__nav-col">
          <p class="footer__nav-label">Who we are</p>
          <a href="/about/">会社概要</a>
        </div>
        <div class="footer__nav-col">
          <p class="footer__nav-label">What we do</p>
          <a href="/service/dev/">受託開発 / Web制作</a>
          <a href="/service/ai/">AI導入支援</a>
          <a href="/service/line/">LINE連携 / 業務自動化</a>
          <a href="/service/sys/">業務システム開発</a>
        </div>
        <div class="footer__nav-col">
          <p class="footer__nav-label">Update</p>
          <a href="/news/">ニュース</a>
          <a href="/career/">採用情報</a>
          <a href="/works/">実績・事例</a>
        </div>
        <div class="footer__nav-col">
          <p class="footer__nav-label">Contact</p>
          <a href="/contact/">お問い合わせ</a>
        </div>
      </nav>
    </div>
    <div class="footer__bottom">
      <p class="footer__address">Tokyo, Japan</p>
      <p class="footer__copy">&copy; 2024 Provydal Inc.</p>
    </div>
  </div>
</footer>`
}

// ── スクリプト ──
function scripts() {
  return `<script type="module">
  import { initNav } from '../../js/nav.js';
  initNav();
  document.querySelectorAll('.fade-up').forEach(function(el) {
    new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if(e.isIntersecting) e.target.classList.add('visible') });
    }, {threshold:0.1}).observe(el);
  });
</script>
</body>
</html>`
}

// ── ページ生成関数 ──
function buildPage(titleStr, cssPath, content) {
  return '<!DOCTYPE html>\n' +
    '<html lang="ja">\n' +
    '<head>\n' +
    '  <meta charset="UTF-8">\n' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '  <title>' + titleStr + ' | Provydal</title>\n' +
    '  <link rel="stylesheet" href="' + cssPath + '">\n' +
    '</head>\n' +
    '<body>\n' +
    nav() + '\n' +
    '<main>' + content + '</main>\n' +
    footer() + '\n' +
    scripts()
}

// ── サービス詳細テンプレート ──
function servicePage(o) {
  var trendsHtml = o.trends.map(function(t) {
    return '<div class="sp-trend fade-up">' +
      '<div class="sp-trend__icon">' + t.icon + '</div>' +
      '<div><h3>' + t.title + '</h3><p>' + t.body + '</p></div>' +
      '</div>'
  }).join('\n')

  var featuresHtml = o.features.map(function(f) {
    return '<div class="sp-feature fade-up">' +
      '<div class="sp-feature__num">' + f.num + '</div>' +
      '<h3>' + f.title + '</h3>' +
      '<p>' + f.body + '</p>' +
      '</div>'
  }).join('\n')

  return (
    '<section class="sp-hero">' +
    '<div class="sp-hero__inner">' +
    '<a href="/service/" class="sp-back fade-up">\u2190 Service\u4e00\u89a7\u3078\u623b\u308b</a>' +
    '<div class="sp-hero__num fade-up">' + o.num + '</div>' +
    '<div class="section-label fade-up">' + o.label + '</div>' +
    '<h1 class="sp-hero__title fade-up">' + o.title + '</h1>' +
    '<p class="sp-hero__lead fade-up">' + o.hero_lead + '</p>' +
    '</div></section>' +

    '<section class="sp-section">' +
    '<div class="sp-section__inner">' +
    '<div class="sp-section__label fade-up">Why it matters</div>' +
    '<h2 class="sp-section__title fade-up">' + o.why_title + '</h2>' +
    '<div class="sp-section__body fade-up">' + o.why_body + '</div>' +
    '</div></section>' +

    '<section class="sp-section sp-section--gray">' +
    '<div class="sp-section__inner">' +
    '<div class="sp-section__label fade-up">Market Trends</div>' +
    '<h2 class="sp-section__title fade-up">' + o.trend_title + '</h2>' +
    '<div class="sp-trends">' + trendsHtml + '</div>' +
    '</div></section>' +

    '<section class="sp-section sp-section--navy">' +
    '<div class="sp-section__inner">' +
    '<div class="sp-section__label fade-up" style="color:rgba(255,255,255,0.45)">How Provydal helps</div>' +
    '<h2 class="sp-section__title fade-up" style="color:#fff">' + o.how_title + '</h2>' +
    '<p class="sp-section__body fade-up" style="color:rgba(255,255,255,0.75)">' + o.how_body + '</p>' +
    '<div class="sp-features">' + featuresHtml + '</div>' +
    '</div></section>' +

    '<section class="cta-band">' +
    '<div class="cta-band__inner">' +
    '<p>' + o.cta + '</p>' +
    '<a href="/contact/" class="btn-fill">\u3054\u76f8\u8ac7\u306f\u3053\u3061\u3089<span>Contact Us</span></a>' +
    '</div></section>'
  )
}

// ────────────────────────────
// 01 受託開発 / Web制作
// ────────────────────────────
fs.writeFileSync('src/service/dev/index.html', buildPage(
  '\u53d7\uク\u958b\u767a / Web\u5236\u4f5c',
  '../../css/main.css',
  servicePage({
    num: '01',
    label: 'Creative &amp; Engineering',
    title: '\u53d7\uク\u958b\u767a /<br>Web\u5236\u4f5c',
    hero_lead: '\u30b3\u30fc\u30dd\u30ec\u30fc\u30c8\u30b5\u30a4\u30c8\u304b\u3089Web\u30a2\u30d7\u30ea\u30fb\u7ba1\u7406\u753b\u9762\u307e\u3067\u3002\u8981\u4ef6\u5b9a\u7fa9\u304b\u3089\u7d0d\u54c1\u30fb\u904b\u7528\u4fdd\u5b88\u307e\u3067\u4e00\u8cab\u3057\u3066\u5bfe\u5fdc\u3057\u307e\u3059\u3002',
    why_title: '\u306a\u305c\u3001\u4eca\u300c\u3061\u3083\u3093\u3068\u3057\u305f\u958b\u767a\u300d\u304c\u91cd\u8981\u306a\u306e\u304b\u3002',
    why_body: '<p>\u300c\u3068\u308a\u3042\u3048\u305a\u4f5c\u3063\u305f\u300d\u30b5\u30a4\u30c8\u3084\u30b7\u30b9\u30c6\u30e0\u304c\u3001\u30d3\u30b8\u30cd\u30b9\u306e\u8db3\u304b\u305b\u306b\u306a\u3063\u3066\u3044\u308b\u30b1\u30fc\u30b9\u304c\u5897\u3048\u3066\u3044\u307e\u3059\u3002\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u306e\u666e\u53ca\u30fb\u7af6\u5408\u306e\u30c7\u30b8\u30bf\u30eb\u5316\u30fb\u9867\u5ba2\u306e\u76ee\u306e\u80a5\u3048\u65b9\u2014\u2014\u3042\u3089\u3086\u308b\u9762\u3067\u3001Web\u306e\u54c1\u8cea\u304c\u76f4\u63a5\u30d3\u30b8\u30cd\u30b9\u306e\u6210\u679c\u306b\u5f71\u97ff\u3059\u308b\u6642\u4ee3\u306b\u306a\u308a\u307e\u3057\u305f\u3002</p><p>\u7279\u306b\u4e2d\u5c0f\u4f01\u696d\u306b\u304a\u3044\u3066\u306f\u3001\u300c\u4e88\u7b97\u304c\u306a\u3044\u304b\u3089\u5b89\u4fa1\u306b\u4f5c\u3063\u305f\u300d\u7d50\u679c\u3001\u4f7f\u308f\u308c\u306a\u3044\u30b7\u30b9\u30c6\u30e0\u3084\u96c6\u5ba2\u3067\u304d\u306a\u3044\u30b5\u30a4\u30c8\u3092\u62b1\u3048\u3066\u3057\u307e\u3046\u30b1\u30fc\u30b9\u304c\u5f8c\u3092\u7d76\u305f\u307e\u305b\u3093\u3002\u6700\u521d\u306b\u6b63\u3057\u304f\u4f5c\u308b\u3053\u3068\u304c\u3001\u9577\u671f\u7684\u306b\u306f\u6700\u3082\u30b3\u30b9\u30c8\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u9ad8\u3044\u9078\u629e\u3067\u3059\u3002</p>',
    trend_title: '\u300c\u4f5c\u308b\u300d\u304b\u3089\u300c\u6210\u679c\u3092\u51fa\u3059\u300d\u6642\u4ee3\u3078',
    trends: [
      { icon: '📱', title: '\u30e2\u30d0\u30a4\u30eb\u30d5\u30a1\u30fc\u30b9\u30c8\u306e\u52a0\u901f', body: '\u56fd\u5185\u306eWeb\u95b2\u89a7\u306e70%\u4ee5\u4e0a\u304c\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u304b\u3089\u306b\u3002\u30ec\u30b9\u30dd\u30f3\u30b7\u30d6\u5bfe\u5fdc\u306f\u3082\u306f\u3084\u6700\u4f4e\u9650\u306e\u8981\u4ef6\u3067\u3059\u3002' },
      { icon: '⚡', title: '\u30da\u30fc\u30b8\u901f\u5ea6\u304c\u96c6\u5ba2\u3092\u5de6\u53f3', body: 'Google\u306e\u8abf\u67fb\u3067\u306f\u3001\u8868\u793a\u901f\u5ea6\u304c3\u79d2\u3092\u8d85\u3048\u308b\u3068\u96e2\u8131\u7387\u304c53%\u5897\u52a0\u3002\u6280\u8853\u7684\u54c1\u8cea\u304cSEO\u3068\u76f4\u7d50\u3057\u3066\u3044\u307e\u3059\u3002' },
      { icon: '🤖', title: 'AI\u6d3b\u7528\u3067\u958b\u767a\u30b3\u30b9\u30c8\u304c\u4f4e\u4e0b', body: '\u751f\u6210AI\u306e\u6d3b\u7528\u306b\u3088\u308a\u3001\u5f93\u6765\u306e\u534a\u5206\u4ee5\u4e0b\u306e\u30b3\u30b9\u30c8\u3067\u9ad8\u54c1\u8cea\u306a\u30d7\u30ed\u30c0\u30af\u30c8\u3092\u5c4a\u3051\u3089\u308c\u308b\u74b0\u5883\u304c\u6574\u3044\u3064\u3064\u3042\u308a\u307e\u3059\u3002' },
      { icon: '🔒', title: '\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af\u306e\u5897\u5927', body: '\u30b5\u30a4\u30d0\u30fc\u653b\u6483\u306e\u6a19\u7684\u306f\u5927\u4f01\u696d\u3060\u3051\u3067\u306a\u304f\u4e2d\u5c0f\u4f01\u696d\u306b\u3082\u62e1\u5927\u3002\u30bb\u30ad\u30e5\u30a2\u306a\u958b\u767a\u304c\u5fc5\u9808\u306e\u6642\u4ee3\u3067\u3059\u3002' },
    ],
    how_title: 'Provydal\u304c\u300c\u4f7f\u308f\u308c\u308b\u30d7\u30ed\u30c0\u30af\u30c8\u300d\u3092\u5c4a\u3051\u308b\u307e\u3067',
    how_body: '\u8981\u4ef6\u5b9a\u7fa9\u304b\u3089\u8a2d\u8a08\u30fb\u958b\u767a\u30fb\u30c6\u30b9\u30c8\u30fb\u7d0d\u54c1\u30fb\u904b\u7528\u4fdd\u5b88\u307e\u3067\u4e00\u6c17\u901a\u8cab\u3067\u5bfe\u5fdc\u3002\u300c\u4f5c\u3063\u3066\u7d42\u308f\u308a\u300d\u3067\u306f\u306a\u304f\u3001\u30d3\u30b8\u30cd\u30b9\u6210\u679c\u306b\u3064\u306a\u304c\u308b\u30d7\u30ed\u30c0\u30af\u30c8\u3092\u5c4a\u3051\u308b\u3053\u3068\u306b\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002',
    features: [
      { num: 'STEP 01', title: '\u8981\u4ef6\u5b9a\u7fa9\u30fb\u30d2\u30a2\u30ea\u30f3\u30b0', body: '\u300c\u4f55\u3092\u4f5c\u308b\u304b\u300d\u3067\u306f\u306a\u304f\u300c\u4f55\u3092\u89e3\u6c7a\u3059\u308b\u304b\u300d\u304b\u3089\u59cb\u3081\u307e\u3059\u3002\u30d3\u30b8\u30cd\u30b9\u8ab2\u984c\u3092\u4e01\u5be7\u306b\u30d2\u30a2\u30ea\u30f3\u30b0\u3057\u3001\u6700\u9069\u306a\u6280\u8853\u9078\u5b9a\u3068\u4ed5\u69d8\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002' },
      { num: 'STEP 02', title: 'UI/UX\u30c7\u30b6\u30a4\u30f3', body: '\u30e6\u30fc\u30b6\u30fc\u304c\u8ff7\u308f\u305a\u3001\u6c17\u6301\u3061\u3088\u304f\u4f7f\u3048\u308b\u30c7\u30b6\u30a4\u30f3\u3092\u8ffd\u6c42\u3002\u30ef\u30a4\u30e4\u30fc\u30d5\u30ec\u30fc\u30e0\u304b\u3089\u30d3\u30b8\u30e5\u30a2\u30eb\u30c7\u30b6\u30a4\u30f3\u307e\u3067\u4e00\u8cab\u3057\u3066\u62c5\u5f53\u3057\u307e\u3059\u3002' },
      { num: 'STEP 03', title: '\u958b\u767a\u30fb\u5b9f\u88c5', body: 'React / Next.js / Node.js \u3092\u4e2d\u5fc3\u306b\u3001\u8981\u4ef6\u306b\u5fdc\u3058\u305f\u6280\u8853\u30b9\u30bf\u30c3\u30af\u3067\u958b\u767a\u3002\u30b3\u30fc\u30c9\u54c1\u8cea\u3068\u4fdd\u5b88\u6027\u306b\u3053\u3060\u308f\u308a\u307e\u3059\u3002' },
      { num: 'STEP 04', title: '\u7d0d\u54c1\u30fb\u904b\u7528\u4fdd\u5b88', body: '\u7d0d\u54c1\u5f8c\u3082\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u3057\u3066\u4f34\u8d70\u3002\u6a5f\u80fd\u8ffd\u52a0\u30fb\u6539\u5584\u30fb\u969c\u5bb3\u5bfe\u5fdc\u307e\u3067\u9577\u671f\u7684\u306b\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002' },
    ],
    cta: '\u958b\u767a\u306e\u3054\u76f8\u8ac7\u30fb\u304a\u898b\u7a4d\u3082\u308a\u306f\u304a\u6c17\u8efd\u306b'
  })
))

// ────────────────────────────
// 02 AI導入支援
// ────────────────────────────
fs.writeFileSync('src/service/ai/index.html', buildPage(
  'AI\u5c0e\u5165\u652f\u63f4',
  '../../css/main.css',
  servicePage({
    num: '02',
    label: 'AI Integration',
    title: 'AI\u5c0e\u5165\u652f\u63f4',
    hero_lead: 'ChatGPT\u3092\u306f\u3058\u3081\u3068\u3059\u308b\u751f\u6210AI\u306e\u696d\u52d9\u6d3b\u7528\u3092\u652f\u63f4\u3002PoC\u8a2d\u8a08\u304b\u3089\u793e\u5185\u5c55\u958b\u307e\u3067\u4f34\u8d70\u3057\u307e\u3059\u3002',
    why_title: 'AI\u3092\u300c\u4f7f\u3063\u3066\u307f\u305f\u300d\u3067\u7d42\u308f\u3089\u305b\u306a\u3044\u3002',
    why_body: '<p>\u751f\u6210AI\u306e\u767b\u5834\u306f\u3001\u30d3\u30b8\u30cd\u30b9\u306e\u751f\u7523\u6027\u3092\u6839\u672c\u304b\u3089\u5909\u3048\u308b\u53ef\u80fd\u6027\u3092\u79d8\u3081\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u591a\u304f\u306e\u4f01\u696d\u3067\u300c\u89e6\u3063\u3066\u306f\u307f\u305f\u304c\u3001\u696d\u52d9\u306b\u5b9a\u7740\u3057\u306a\u3044\u300d\u300c\u3069\u306e\u696d\u52d9\u306b\u4f7f\u3048\u3070\u3044\u3044\u304b\u308f\u304b\u3089\u306a\u3044\u300d\u3068\u3044\u3046\u72b6\u614b\u304c\u7d9a\u3044\u3066\u3044\u307e\u3059\u3002</p><p>AI\u30c4\u30fc\u30eb\u306f\u9053\u5177\u306b\u904e\u304e\u307e\u305b\u3093\u3002\u91cd\u8981\u306a\u306e\u306f\u3001\u81ea\u793e\u306e\u3069\u306e\u8ab2\u984c\u306b\u30fb\u3069\u3046\u4f7f\u3048\u3070\u6210\u679c\u304c\u51fa\u308b\u304b\u3092\u8a2d\u8a08\u3059\u308b\u3053\u3068\u3002Provydal\u306f\u6280\u8853\u3068\u696d\u52d9\u306e\u4e21\u9762\u304b\u3089\u3001\u300c\u4f7f\u3048\u308bAI\u6d3b\u7528\u300d\u3092\u4e00\u7dd2\u306b\u4f5c\u308a\u307e\u3059\u3002</p>',
    trend_title: '\u751f\u6210AI\u6d3b\u7528\u306f\u3001\u3082\u306f\u3084\u7af6\u4e89\u512a\u4f4d\u3067\u306f\u306a\u304f\u300c\u524d\u63d0\u300d\u306b\u306a\u308a\u3064\u3064\u3042\u308b',
    trends: [
      { icon: '📈', title: '\u4f01\u696d\u306eAI\u6d3b\u7528\u7387\u304c\u6025\u901f\u306b\u62e1\u5927', body: '2024\u5e74\u6642\u70b9\u3067\u56fd\u5185\u5927\u624b\u4f01\u696d\u306e\u7d0460%\u304c\u751f\u6210AI\u3092\u696d\u52d9\u6d3b\u7528\u4e2d\u3002\u4e2d\u5c0f\u4f01\u696d\u3068\u306e\u5dee\u304c\u5e83\u304c\u3063\u3066\u3044\u307e\u3059\u3002' },
      { icon: '⏰', title: '1\u4eba\u3042\u305f\u308a\u6708\u5e733\u301c5\u6642\u9593\u306e\u696d\u52d9\u524a\u6e1b', body: '\u8b70\u4e8b\u9332\u4f5c\u6210\u30fb\u8cc7\u6599\u4f5c\u6210\u30fb\u30e1\u30fc\u30eb\u5bfe\u5fdc\u306a\u3069\u3001\u5b9a\u578b\u696d\u52d9\u3092AI\u306b\u59d4\u306d\u308b\u3053\u3068\u3067\u751f\u307e\u308c\u308b\u6642\u9593\u306f\u60f3\u50cf\u4ee5\u4e0a\u3067\u3059\u3002' },
      { icon: '💼', title: 'AI\u30ea\u30c6\u30e9\u30b7\u30fc\u304c\u63a1\u7528\u30fb\u8a55\u4fa1\u306e\u57fa\u6e96\u306b', body: '\u300cAI\u3092\u4f7f\u3044\u3053\u306a\u305b\u308b\u4eba\u6750\u300d\u306e\u9700\u8981\u304c\u6025\u5897\u3002\u7d44\u7e54\u5168\u4f53\u306e\u30ea\u30b9\u30ad\u30ea\u30f3\u30b0\u304c\u6025\u52d9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002' },
      { icon: '🔑', title: '\u30ab\u30b9\u30bf\u30de\u30a4\u30ba AI\u304c\u5dee\u5225\u5316\u306e\u9375\u306b', body: '\u6c4e\u7528\u30c4\u30fc\u30eb\u3092\u4f7f\u3046\u3060\u3051\u3067\u306a\u304f\u3001\u81ea\u793e\u30c7\u30fc\u30bf\u30fb\u696d\u52d9\u30d5\u30ed\u30fc\u306b\u7279\u5316\u3057\u305fAI\u3092\u6301\u3064\u3053\u3068\u304c\u6b21\u306e\u7af6\u4e89\u8ef8\u306b\u306a\u308a\u307e\u3059\u3002' },
    ],
    how_title: 'Provydal\u306e\u300c\u4f7f\u3048\u308bAI\u300d\u5c0e\u5165\u30b9\u30c6\u30c3\u30d7',
    how_body: '\u300c\u4f55\u304b\u3089\u59cb\u3081\u308c\u3070\u3044\u3044\uff1f\u300d\u3068\u3044\u3046\u6bb5\u968e\u304b\u3089\u4f34\u8d70\u3057\u307e\u3059\u3002\u696d\u52d9\u5206\u6790\u30fbPoC\u8a2d\u8a08\u30fb\u30c4\u30fc\u30eb\u9078\u5b9a\u30fb\u793e\u5185\u5c55\u958b\u30fb\u52b9\u679c\u6e2c\u5b9a\u307e\u3067\u3001AI\u3092\u672c\u5f53\u306b\u4f7f\u3048\u308b\u72b6\u614b\u306b\u3059\u308b\u307e\u3067\u4e00\u7dd2\u306b\u9032\u3081\u307e\u3059\u3002',
    features: [
      { num: 'PHASE 01', title: '\u696d\u52d9\u5206\u6790\u30fb\u6d3b\u7528\u8a2d\u8a08', body: '\u73fe\u72b6\u306e\u696d\u52d9\u30d5\u30ed\u30fc\u3092\u6574\u7406\u3057\u3001AI\u3067\u4ee3\u66ff\u30fb\u52b9\u7387\u5316\u3067\u304d\u308b\u7b87\u6240\u3092\u7279\u5b9a\u3002\u512a\u5148\u9806\u4f4d\u3092\u3064\u3051\u305f\u5c0e\u5165\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002' },
      { num: 'PHASE 02', title: 'PoC\u30fb\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u958b\u767a', body: '\u307e\u305a\u5c0f\u3055\u304f\u8a66\u3059\u3002ChatGPT API\u3084LangChain\u3092\u4f7f\u3063\u305f\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3092\u7d20\u65e9\u304f\u69cb\u7bc9\u3057\u3001\u52b9\u679c\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002' },
      { num: 'PHASE 03', title: '\u30c4\u30fc\u30eb\u30fb\u30b7\u30b9\u30c6\u30e0\u69cb\u7bc9', body: '\u691c\u8a3c\u7d50\u679c\u3092\u3082\u3068\u306b\u3001\u5b9f\u696d\u52d9\u306b\u7d44\u307f\u8fbc\u3081\u308b\u5f62\u3067\u30b7\u30b9\u30c6\u30e0\u5316\u3002\u793e\u5185\u30c4\u30fc\u30eb\u9023\u643a\u30fb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u3082\u542b\u3081\u3066\u5bfe\u5fdc\u3057\u307e\u3059\u3002' },
      { num: 'PHASE 04', title: '\u793e\u5185\u5c55\u958b\u30fb\u7814\u4fee\u30fb\u5b9a\u7740\u652f\u63f4', body: '\u300c\u4f7f\u308f\u306a\u3044\u300d\u3067\u7d42\u308f\u3089\u306a\u3044\u3088\u3046\u3001\u793e\u5185\u7814\u4fee\u30fb\u30de\u30cb\u30e5\u30a2\u30eb\u4f5c\u6210\u30fb\u5b9a\u7740\u30d5\u30a9\u30ed\u30fc\u307e\u3067\u4e00\u6c17\u901a\u8cab\u3067\u652f\u63f4\u3057\u307e\u3059\u3002' },
    ],
    cta: 'AI\u6d3b\u7528\u306e\u3054\u76f8\u8ac7\u3001\u307e\u305a\u306f\u7121\u6599\u3067\u304a\u8a71\u3057\u307e\u3057\u3087\u3046'
  })
))

// ────────────────────────────
// 03 LINE連携 / 業務自動化
// ────────────────────────────
fs.writeFileSync('src/service/line/index.html', buildPage(
  'LINE\u9023\u643a / \u696d\u52d9\u81ea\u52d5\u5316',
  '../../css/main.css',
  servicePage({
    num: '03',
    label: 'LINE &amp; Automation',
    title: 'LINE\u9023\u643a /<br>\u696d\u52d9\u81ea\u52d5\u5316',
    hero_lead: 'LINE\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6d3b\u7528\u3057\u305f\u554f\u3044\u5408\u308f\u305b\u81ea\u52d5\u5316\u30fb\u9867\u5ba2\u5bfe\u5fdc\u52b9\u7387\u5316\u30fb\u793e\u5185\u901a\u77e5\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002',
    why_title: '\u300c\u4eba\u624b\u3067\u3084\u3063\u3066\u3044\u308b\u7e70\u308a\u8fd4\u3057\u4f5c\u696d\u300d\u304c\u3001\u4f01\u696d\u306e\u6210\u9577\u3092\u6b62\u3081\u3066\u3044\u308b\u3002',
    why_body: '<p>\u554f\u3044\u5408\u308f\u305b\u5bfe\u5fdc\u30fb\u4e88\u7d04\u78ba\u8a8d\u30fb\u30ea\u30de\u30a4\u30f3\u30c9\u9001\u4fe1\u30fb\u793e\u5185\u5831\u544a\u2026\u2026\u3002\u6bce\u65e5\u7e70\u308a\u8fd4\u3055\u308c\u308b\u5b9a\u578b\u696d\u52d9\u306b\u3001\u512a\u79c0\u306a\u30b9\u30bf\u30c3\u30d5\u306e\u6642\u9593\u304c\u5954\u308f\u308c\u3066\u3044\u307e\u305b\u3093\u304b\uff1f\u3053\u308c\u3089\u306e\u696d\u52d9\u306e\u591a\u304f\u306f\u3001\u9069\u5207\u306a\u30b7\u30b9\u30c6\u30e0\u3092\u7d44\u3081\u3070\u81ea\u52d5\u5316\u3067\u304d\u307e\u3059\u3002</p><p>\u7279\u306bLINE\u306f\u56fd\u5185\u5229\u7528\u80069\uff0c700\u4e07\u4eba\u8d85\u30fb\u958b\u5c01\u738770%\u4ee5\u4e0a\u3068\u3044\u3046\u5727\u5012\u7684\u306a\u30ea\u30fc\u30c1\u3092\u6301\u3064\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3002\u9867\u5ba2\u63a5\u70b9\u3068\u3057\u3066LINE\u3092\u6d3b\u7528\u3057\u306a\u304c\u3089\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u81ea\u52d5\u51e6\u7406\u3092\u8d70\u3089\u305b\u308b\u3053\u3068\u3067\u3001\u5c11\u4eba\u6570\u3067\u3082\u5927\u304d\u306a\u6210\u679c\u3092\u51fa\u305b\u308b\u4ed5\u7d44\u307f\u304c\u4f5c\u308c\u307e\u3059\u3002</p>',
    trend_title: 'LINE\u306f\u300c\u9023\u7d61\u30c4\u30fc\u30eb\u300d\u304b\u3089\u300c\u30d3\u30b8\u30cd\u30b9\u30a4\u30f3\u30d5\u30e9\u300d\u3078',
    trends: [
      { icon: '💬', title: 'LINE\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5229\u7528\u4f01\u696d\u304c\u6025\u5897', body: '\u4e2d\u5c0f\u4f01\u696d\u3092\u542b\u3080\u505050\u4e07\u793e\u4ee5\u4e0a\u304cLINE\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6d3b\u7528\u3002\u9867\u5ba2\u63a5\u70b9\u3068\u3057\u3066\u306e\u91cd\u8981\u6027\u304c\u6025\u4e0a\u6607\u3057\u3066\u3044\u307e\u3059\u3002' },
      { icon: '📊', title: '\u30e1\u30fc\u30eb\u3088\u308a\u5727\u5012\u7684\u306b\u8aad\u307e\u308c\u308b', body: '\u30e1\u30fc\u30eb\u306e\u958b\u5c01\u7387\u304c\u7d4020%\u306b\u5bfe\u3057\u3001LINE\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u958b\u5c01\u7387\u306f\u7d4070%\u3002\u9867\u5ba2\u3078\u306e\u30ea\u30fc\u30c1\u52b9\u7387\u304c\u5168\u304f\u7570\u306a\u308a\u307e\u3059\u3002' },
      { icon: '🔄', title: '\u30ce\u30fc\u30b3\u30fc\u30c9\u81ea\u52d5\u5316\u30c4\u30fc\u30eb\u306e\u666e\u53ca', body: 'Make\uff08\u65e7Integromat\uff09\u3084Zapier\u306e\u666e\u53ca\u306b\u3088\u308a\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4e0d\u8981\u3067\u696d\u52d9\u81ea\u52d5\u5316\u3067\u304d\u308b\u7bc4\u56f2\u304c\u5927\u5e45\u306b\u62e1\u5927\u3057\u307e\u3057\u305f\u3002' },
      { icon: '👥', title: '\u4eba\u624b\u4e0d\u8db3\u6642\u4ee3\u306e\u696d\u52d9\u8a2d\u8a08', body: '\u63a1\u7528\u96e3\u304c\u7d9a\u304f\u4e2d\u3001\u300c\u4eba\u304c\u3084\u3089\u306a\u304f\u3066\u3044\u3044\u4ed5\u4e8b\u3092\u6e1b\u3089\u3059\u300d\u696d\u52d9\u8a2d\u8a08\u304c\u7d4c\u55b6\u306e\u6700\u512a\u5148\u8ab2\u984c\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002' },
    ],
    how_title: 'Provydal\u304c\u4f5c\u308b\u300c\u4ed5\u7d44\u307f\u304c\u52d5\u304d\u7d9a\u3051\u308b\u300d\u30b7\u30b9\u30c6\u30e0',
    how_body: '\u5358\u306b\u300c\u81ea\u52d5\u8fd4\u4fe1\u3067\u304d\u308b\u300d\u3060\u3051\u3067\u306a\u304f\u3001\u9867\u5ba2\u4f53\u9a13\u3092\u640d\u306a\u308f\u306a\u3044\u81ea\u7136\u306a\u5bfe\u8a71\u30d5\u30ed\u30fc\u3068\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u9023\u643a\u307e\u3067\u8a2d\u8a08\u3057\u307e\u3059\u3002',
    features: [
      { num: '\u6a5f\u80fd 01', title: 'LINE\u554f\u3044\u5408\u308f\u305b\u81ea\u52d5\u5fdc\u7b54', body: '\u3088\u304f\u3042\u308b\u8cea\u554f\u3078\u306e\u81ea\u52d5\u56de\u7b54\u30fb\u55b6\u696d\u6642\u9593\u5916\u5bfe\u5fdc\u30fb\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\u306e\u81ea\u52d5\u632f\u308a\u5206\u3051\u3092\u69cb\u7bc9\u3002\u5bfe\u5fdc\u5de5\u6570\u3092\u5927\u5e45\u306b\u524a\u6e1b\u3057\u307e\u3059\u3002' },
      { num: '\u6a5f\u80fd 02', title: '\u4e88\u7d04\u30fb\u30ea\u30de\u30a4\u30f3\u30c9\u81ea\u52d5\u5316', body: '\u4e88\u7d04\u53d7\u4ed8\u2192\u78ba\u8a8d\u30e1\u30c3\u30bb\u30fc\u30b8\u2192\u524d\u65e5\u30ea\u30de\u30a4\u30f3\u30c9\u2192\u30ad\u30e3\u30f3\u30bb\u30eb\u51e6\u7406\u307e\u3067\u3001LINE\u3092\u8ef8\u306b\u3057\u305f\u4e88\u7d04\u30d5\u30ed\u30fc\u3092\u81ea\u52d5\u5316\u3057\u307e\u3059\u3002' },
      { num: '\u6a5f\u80fd 03', title: '\u793e\u5185\u901a\u77e5\u30fb\u5831\u544a\u81ea\u52d5\u5316', body: '\u58f2\u4e0a\u5831\u544a\u30fb\u5728\u5eab\u30a2\u30e9\u30fc\u30c8\u30fb\u52e4\u6020\u901a\u77e5\u306a\u3069\u3001\u793e\u5185\u306e\u60c5\u5831\u5171\u6709\u3092LINE\u30b0\u30eb\u30fc\u30d7\u306b\u81ea\u52d5\u9001\u4fe1\u3057\u307e\u3059\u3002' },
      { num: '\u6a5f\u80fd 04', title: 'CRM\u30fb\u57fa\u5e79\u30b7\u30b9\u30c6\u30e0\u9023\u643a', body: 'LINE\u3067\u306e\u9867\u5ba2\u5bfe\u5fdc\u5c65\u6b74\u3092CRM\u306b\u81ea\u52d5\u8a18\u9332\u3002\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u30fbNotion\u30fb\u72ec\u81eaDB\u3068\u306e\u9023\u643a\u3082\u67d4\u8edf\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002' },
    ],
    cta: '\u307e\u305a\u306f\u81ea\u52d5\u5316\u3067\u304d\u308b\u696d\u52d9\u3092\u4e00\u7dd2\u306b\u6574\u7406\u3057\u307e\u3057\u3087\u3046'
  })
))

// ────────────────────────────
// 04 業務システム開発
// ────────────────────────────
fs.writeFileSync('src/service/sys/index.html', buildPage(
  '\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u958b\u767a',
  '../../css/main.css',
  servicePage({
    num: '04',
    label: 'Business System',
    title: '\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u958b\u767a',
    hero_lead: '\u7ba1\u7406\u753b\u9762\u30fb\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u30fb\u793e\u5185\u30c4\u30fc\u30eb\u306a\u3069\u3001\u73fe\u5834\u306e\u8ab2\u984c\u306b\u5408\u308f\u305b\u305f\u30ab\u30b9\u30bf\u30e0\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u3092\u958b\u767a\u3057\u307e\u3059\u3002',
    why_title: '\u300c\u65e2\u88fd\u54c1\u3067\u5996\u5354\u300d\u304c\u3001\u696d\u52d9\u306e\u975e\u52b9\u7387\u3092\u751f\u307f\u7d9a\u3051\u308b\u3002',
    why_body: '<p>\u5e02\u8ca9\u306eSaaS\u30c4\u30fc\u30eb\u306f\u4fbf\u5229\u3067\u3059\u304c\u3001\u81ea\u793e\u306e\u696d\u52d9\u30d5\u30ed\u30fc\u306b\u5b8c\u5168\u306b\u5408\u3046\u30c4\u30fc\u30eb\u306f\u307b\u3068\u3093\u3069\u5b58\u5728\u3057\u307e\u305b\u3093\u3002\u300c\u3053\u306e\u30c4\u30fc\u30eb\u306e\u4f7f\u3044\u65b9\u306b\u5408\u308f\u305b\u3066\u696d\u52d9\u3092\u5909\u3048\u305f\u300d\u3068\u3044\u3046\u672c\u672b\u8ee2\u5012\u306a\u72b6\u614b\u306b\u964d\u3063\u3066\u3044\u308b\u4f01\u696d\u306f\u5c11\u306a\u304f\u3042\u308a\u307e\u305b\u3093\u3002</p><p>\u30ab\u30b9\u30bf\u30e0\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u306f\u300c\u9ad8\u305d\u3046\u300d\u3068\u3044\u3046\u30a4\u30e1\u30fc\u30b8\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u751f\u6210AI\u306e\u6d3b\u7528\u306b\u3088\u308a\u958b\u767a\u30b3\u30b9\u30c8\u306f\u5927\u5e45\u306b\u4e0b\u304c\u3063\u3066\u3044\u307e\u3059\u3002\u81ea\u793e\u306e\u696d\u52d9\u30d5\u30ed\u30fc\u306b\u5b8c\u5168\u306b\u5408\u3063\u305f\u30b7\u30b9\u30c6\u30e0\u3092\u6301\u3064\u3053\u3068\u304c\u3001\u9577\u671f\u7684\u306a\u751f\u7523\u6027\u3068\u7af6\u4e89\u529b\u306e\u6e90\u6cc9\u306b\u306a\u308a\u307e\u3059\u3002</p>',
    trend_title: 'SaaS\u306e\u9650\u754c\u3068\u30ab\u30b9\u30bf\u30e0\u958b\u767a\u306e\u518d\u8a55\u4fa1',
    trends: [
      { icon: '📦', title: 'SaaS\u75b2\u308c\u304c\u5e83\u304c\u3063\u3066\u3044\u308b', body: '\u8907\u6570\u306eSaaS\u30c4\u30fc\u30eb\u3092\u4f7f\u3044\u5206\u3051\u308b\u3053\u3068\u306b\u3088\u308b\u64cd\u4f5c\u30b3\u30b9\u30c8\u30fb\u6708\u984d\u8cbb\u7528\u306e\u7a4d\u307f\u4e0a\u304c\u308a\u306b\u8ab2\u984c\u3092\u611f\u3058\u308b\u4f01\u696d\u304c\u5897\u52a0\u3057\u3066\u3044\u307e\u3059\u3002' },
      { icon: '🏗️', title: '\u30ed\u30fc\u30b3\u30fc\u30c9\u958b\u767a\u306e\u9032\u5316', body: 'Next.js\u30fbPrisma\u30fbSupabase\u306a\u3069\u306e\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u304c\u6210\u719f\u3057\u3001\u9ad8\u54c1\u8cea\u306a\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u3092\u3088\u308a\u77ed\u671f\u9593\u30fb\u4f4e\u30b3\u30b9\u30c8\u3067\u69cb\u7bc9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002' },
      { icon: '📱', title: '\u30e2\u30d0\u30a4\u30eb\u5bfe\u5fdc\u304c\u5f53\u305f\u308a\u524d\u306b', body: '\u73fe\u5834\u62c5\u5f53\u8005\u304c\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3067\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u3046\u5834\u9762\u304c\u6025\u5897\u3002PC\u524d\u63d0\u306e\u8a2d\u8a08\u306f\u6642\u4ee3\u9045\u308c\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002' },
      { icon: '🔗', title: 'API\u9023\u643a\u3067\u300c\u3064\u306a\u304c\u308b\u30b7\u30b9\u30c6\u30e0\u300d\u304c\u6a19\u6e96\u306b', body: 'LINE\u3084Slack\u30fb\u4f1a\u8a08\u30bd\u30d5\u30c8\u30fbEC\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3068\u306eAPI\u9023\u643a\u304c\u3001\u696d\u52d9\u30b7\u30b9\u30c6\u30e0\u306e\u5f53\u305f\u308a\u524d\u306b\u306a\u308a\u3064\u3064\u3042\u308a\u307e\u3059\u3002' },
    ],
    how_title: 'Provydal\u304c\u8a2d\u8a08\u3059\u308b\u300c\u73fe\u5834\u306b\u99a8\u3080\u30b7\u30b9\u30c6\u30e0\u300d',
    how_body: '\u73fe\u5834\u306e\u58f0\u3092\u4e01\u5be7\u306b\u30d2\u30a2\u30ea\u30f3\u30b0\u3057\u3001\u300c\u4f7f\u308f\u308c\u308b\u30b7\u30b9\u30c6\u30e0\u300d\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002UI\u306e\u4f7f\u3044\u3084\u3059\u3055\u30fb\u51e6\u7406\u901f\u5ea6\u30fb\u62e1\u5f35\u6027\u307e\u3067\u8003\u616e\u3057\u305f\u958b\u767a\u3067\u3001\u9577\u304f\u4f7f\u3044\u7d9a\u3051\u3089\u308c\u308b\u30b7\u30b9\u30c6\u30e0\u3092\u5c4a\u3051\u307e\u3059\u3002',
    features: [
      { num: '\u5bfe\u5fdc 01', title: '\u7ba1\u7406\u753b\u9762\u30fb\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9', body: '\u6848\u4ef6\u7ba1\u7406\u30fb\u9867\u5ba2\u7ba1\u7406\u30fb\u5728\u5eab\u7ba1\u7406\u30fb\u58f2\u4e0a\u5206\u6790\u306a\u3069\u3001\u696d\u52d9\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u4e00\u5143\u7ba1\u7406\u3067\u304d\u308b\u7ba1\u7406\u753b\u9762\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002' },
      { num: '\u5bfe\u5fdc 02', title: '\u4e88\u7d04\u30fb\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u7ba1\u7406', body: '\u98f2\u98df\u30fb\u7f8e\u5bb9\u30fb\u533b\u7642\u30fb\u6559\u5ba4\u306a\u3069\u3001\u696d\u7a2e\u7279\u6709\u306e\u4e88\u7d04\u30d5\u30ed\u30fc\u306b\u5bfe\u5fdc\u3057\u305f\u30ab\u30b9\u30bf\u30e0\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u3092\u958b\u767a\u3057\u307e\u3059\u3002' },
      { num: '\u5bfe\u5fdc 03', title: '\u793e\u5185\u30dd\u30fc\u30bf\u30eb\u30fb\u30ef\u30fc\u30af\u30d5\u30ed\u30fc', body: '\u7533\u8acf\u30fb\u627f\u8a8d\u30d5\u30ed\u30fc\u30fb\u60c5\u5831\u5171\u6709\u30fb\u30de\u30cb\u30e5\u30a2\u30eb\u7ba1\u7406\u306a\u3069\u3001\u793e\u5185\u696d\u52d9\u3092\u52b9\u7387\u5316\u3059\u308b\u30dd\u30fc\u30bf\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002' },
      { num: '\u5bfe\u5fdc 04', title: '\u65e2\u5b58\u30b7\u30b9\u30c6\u30e0\u306e\u6539\u5584\u30fb\u30ea\u30d7\u30ec\u30a4\u30b9', body: '\u300c\u4f7f\u3044\u306b\u304f\u3044\u300d\u300c\u9045\u3044\u300d\u300c\u30b9\u30de\u30db\u3067\u898b\u3089\u308c\u306a\u3044\u300d\u65e2\u5b58\u30b7\u30b9\u30c6\u30e0\u306e\u6539\u5584\u30fb\u30e2\u30c0\u30f3\u5316\u306b\u3082\u5bfe\u5fdc\u3057\u307e\u3059\u3002' },
    ],
    cta: '\u300c\u3053\u3093\u306a\u30b7\u30b9\u30c6\u30e0\u304c\u6b32\u3057\u3044\u300d\u3092\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044'
  })
))

// ── CSS追記 ──
var spCss = `
/* == Service Individual Pages == */
.sp-hero{padding:160px 48px 100px;background:var(--white);}
.sp-hero__inner{max-width:1100px;margin:0 auto;}
.sp-back{display:inline-block;font-size:13px;color:var(--navy);margin-bottom:32px;opacity:0.6;transition:opacity 0.2s;}
.sp-back:hover{opacity:1;}
.sp-hero__num{font-family:var(--font);font-size:120px;font-weight:700;color:rgba(26,58,140,0.06);line-height:1;margin-bottom:-20px;}
.sp-hero__title{font-family:var(--font);font-size:clamp(44px,7vw,88px);font-weight:700;color:var(--navy);line-height:1.05;letter-spacing:-2px;margin:8px 0 32px;}
.sp-hero__lead{font-size:18px;line-height:1.8;color:#444;max-width:680px;}
.sp-section{padding:120px 48px;}
.sp-section--gray{background:var(--gray);}
.sp-section--navy{background:var(--navy);}
.sp-section__inner{max-width:1100px;margin:0 auto;}
.sp-section__label{font-family:var(--font);font-size:12px;font-weight:700;color:var(--navy);letter-spacing:3px;text-transform:uppercase;margin-bottom:20px;}
.sp-section__title{font-family:var(--font);font-size:clamp(26px,4vw,44px);font-weight:700;color:var(--navy);line-height:1.2;margin-bottom:40px;}
.sp-section--navy .sp-section__title{color:#fff;}
.sp-section__body{font-size:16px;line-height:2;color:#444;max-width:760px;}
.sp-section__body p{margin-bottom:20px;}
.sp-trends{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:48px;}
@media(max-width:768px){.sp-trends{grid-template-columns:1fr;gap:24px;}}
.sp-trend{display:flex;gap:24px;align-items:flex-start;background:#fff;padding:32px;border-left:3px solid var(--navy);}
.sp-trend__icon{font-size:32px;flex-shrink:0;}
.sp-trend h3{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:8px;}
.sp-trend p{font-size:14px;line-height:1.8;color:#555;}
.sp-features{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:56px;}
@media(max-width:768px){.sp-features{grid-template-columns:1fr;}}
.sp-feature{background:rgba(255,255,255,0.07);padding:40px 36px;border-top:1px solid rgba(255,255,255,0.12);transition:background 0.2s;}
.sp-feature:hover{background:rgba(255,255,255,0.12);}
.sp-feature__num{font-family:var(--font);font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:2px;margin-bottom:16px;}
.sp-feature h3{font-size:17px;font-weight:700;color:#fff;margin-bottom:12px;}
.sp-feature p{font-size:14px;line-height:1.8;color:rgba(255,255,255,0.65);}
.service-card-link{display:block;text-decoration:none;color:inherit;}
.service-detail--link{cursor:pointer;transition:opacity 0.2s;position:relative;}
.service-detail--link::after{content:'\u8a73\u7d30\u3092\u898b\u308b \u2192';position:absolute;bottom:32px;right:40px;font-size:13px;color:rgba(255,255,255,0.5);font-family:var(--font);transition:color 0.2s;}
.service-card-link:hover .service-detail--link{opacity:0.88;}
.service-card-link:hover .service-detail--link::after{color:rgba(255,255,255,0.9);}
@media(max-width:768px){.sp-hero{padding:120px 24px 60px;}.sp-section{padding:80px 24px;}.sp-hero__num{font-size:72px;}.service-detail--link::after{display:none;}}
`

var existingCss = fs.readFileSync('src/css/main.css', 'utf8')
if (!existingCss.includes('sp-hero')) {
  fs.appendFileSync('src/css/main.css', spCss)
  console.log('CSS追記完了')
}

// ── service/index.html のカードにリンクを貼る ──
var svcPath = 'src/service/index.html'
if (fs.existsSync(svcPath)) {
  var svcHtml = fs.readFileSync(svcPath, 'utf8')
  // すでにリンク済みでなければ処理
  if (!svcHtml.includes('service-card-link')) {
    svcHtml = svcHtml
      .replace(/<section class="service-detail" id="dev">/g,
        '<a href="/service/dev/" class="service-card-link"><section class="service-detail service-detail--link" id="dev">')
      .replace(/<section class="service-detail service-detail--alt" id="ai">/g,
        '</a><a href="/service/ai/" class="service-card-link"><section class="service-detail service-detail--alt service-detail--link" id="ai">')
      .replace(/<section class="service-detail" id="line">/g,
        '</a><a href="/service/line/" class="service-card-link"><section class="service-detail service-detail--link" id="line">')
      .replace(/<section class="service-detail service-detail--alt" id="sys">/g,
        '</a><a href="/service/sys/" class="service-card-link"><section class="service-detail service-detail--alt service-detail--link" id="sys">')
    // 最後の</section>の後にも閉じる
    svcHtml = svcHtml.replace(/(<\/section>\s*<section class="cta-band">)/, '</section></a>\n  <section class="cta-band">')
    fs.writeFileSync(svcPath, svcHtml)
    console.log('service/index.html リンク追加完了')
  } else {
    console.log('service/index.html は既にリンク済みです')
  }
}

console.log('')
console.log('全サービス詳細ページ生成完了！')
console.log('  /service/dev/  → 受託開発 / Web制作')
console.log('  /service/ai/   → AI導入支援')
console.log('  /service/line/ → LINE連携 / 業務自動化')
console.log('  /service/sys/  → 業務システム開発')
