import fs from 'fs'

// ── 共通ヘッダー/フッター ──
const nav = (active='') => `
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

const footer = () => `
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__top">
      <div class="footer__logo"><span class="footer__logo-bar"></span>Provydal</div>
      <nav class="footer__nav">
        <div class="footer__nav-col">
          <p class="footer__nav-label">Who we are</p>
          <a href="/about/">会社概要</a>
          <a href="/about/#vision">ビジョン・ミッション</a>
        </div>
        <div class="footer__nav-col">
          <p class="footer__nav-label">What we do</p>
          <a href="/service/#dev">受託開発 / Web制作</a>
          <a href="/service/#ai">AI導入支援</a>
          <a href="/service/#line">LINE連携 / 業務自動化</a>
          <a href="/service/#sys">業務システム開発</a>
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

const head = (title, css='../css/main.css') => `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Provydal</title>
  <link rel="stylesheet" href="${css}">
</head>
<body>`

const scripts = (js='../js/nav.js') => `<script type="module">
  import { initNav } from '${js}';
  initNav();
  document.querySelectorAll('.fade-up').forEach(el => {
    new IntersectionObserver(([e]) => { if(e.isIntersecting) e.target.classList.add('visible') }, {threshold:0.1}).observe(el);
  });
</script>
</body></html>`

// ── About ──
fs.writeFileSync('src/about/index.html', head('会社概要','../css/main.css') + nav('about') + `
<main>
  <section class="page-hero">
    <div class="page-hero__inner">
      <div class="section-label fade-up">Company</div>
      <h1 class="page-hero__title fade-up">あらゆる課題に、<br>必要な開発を。</h1>
      <p class="page-hero__sub fade-up">株式会社プロバイダル（Provydal）は、受託開発・AI導入支援・業務自動化を通じて、企業のデジタル化を支援するデジタルクリエイティブスタジオです。</p>
    </div>
  </section>

  <section class="about-vision" id="vision">
    <div class="about-vision__inner">
      <div class="about-block fade-up">
        <div class="section-label">Vision</div>
        <h2>課題に合わせて、<br>必要な開発を。</h2>
        <p>テクノロジーの力で、あらゆる企業の課題を解決する。大企業だけでなく、中小企業・スタートアップにとっても、デジタルが当たり前の武器になる世界をつくります。</p>
      </div>
      <div class="about-block fade-up">
        <div class="section-label">Mission</div>
        <h2>伴走型の開発で、<br>成果をつくる。</h2>
        <p>「作って終わり」ではなく、要件定義から納品・運用まで一気通貫でサポート。クライアントのビジネス成果にコミットする開発パートナーであり続けます。</p>
      </div>
    </div>
  </section>

  <section class="about-profile" id="company">
    <div class="about-profile__inner">
      <div class="section-label fade-up">Company Profile</div>
      <table class="profile-table fade-up">
        <tr><th>会社名</th><td>株式会社プロバイダル（Provydal Inc.）</td></tr>
        <tr><th>代表取締役</th><td>所 和哉（Kazuya Tokoro）</td></tr>
        <tr><th>所在地</th><td>東京都</td></tr>
        <tr><th>事業内容</th><td>受託開発・Web制作・AI導入支援・LINE連携・業務システム開発</td></tr>
        <tr><th>URL</th><td><a href="https://provydal.com" target="_blank">provydal.com</a></td></tr>
      </table>
    </div>
  </section>

  <section class="cta-band">
    <div class="cta-band__inner">
      <p>開発のご相談・お見積もりはこちら</p>
      <a href="/contact/" class="btn-fill">Contact<span>お問い合わせ</span></a>
    </div>
  </section>
</main>
` + footer() + scripts())

// ── Service ──
fs.writeFileSync('src/service/index.html', head('事業内容','../css/main.css') + nav('service') + `
<main>
  <section class="page-hero">
    <div class="page-hero__inner">
      <div class="section-label fade-up">Service</div>
      <h1 class="page-hero__title fade-up">テック・デザイン・ビジネスの<br>専門チームによる事業共創</h1>
      <p class="page-hero__sub fade-up">Provydalは、受託開発からAI導入支援・LINE自動化まで、デジタル化に必要なすべてをワンストップで提供します。</p>
    </div>
  </section>

  <section class="service-detail" id="dev">
    <div class="service-detail__inner">
      <div class="service-detail__label fade-up">01</div>
      <div class="service-detail__body">
        <div class="section-label fade-up">Creative &amp; Engineering</div>
        <h2 class="fade-up">受託開発 / Web制作</h2>
        <p class="fade-up">コーポレートサイトからWebアプリ・管理画面まで。要件定義から設計・開発・納品・運用保守まで一貫して対応します。デザインの質にこだわりながら、使いやすく成果につながるプロダクトを届けます。</p>
        <ul class="service-detail__tags fade-up">
          <li>コーポレートサイト</li><li>Webアプリ開発</li><li>管理画面・ダッシュボード</li><li>LP制作</li><li>ECサイト</li>
        </ul>
        <a href="/contact/" class="btn-outline">相談する<span>まずはお気軽に</span></a>
      </div>
    </div>
  </section>

  <section class="service-detail service-detail--alt" id="ai">
    <div class="service-detail__inner">
      <div class="service-detail__label fade-up">02</div>
      <div class="service-detail__body">
        <div class="section-label fade-up">AI Integration</div>
        <h2 class="fade-up">AI導入支援</h2>
        <p class="fade-up">ChatGPTをはじめとする生成AIの業務活用を支援。PoC設計・プロンプト設計・社内ツール連携・導入研修まで伴走します。「AIを使ってみたいが何から始めればいいかわからない」という企業に最適です。</p>
        <ul class="service-detail__tags fade-up">
          <li>生成AI活用コンサル</li><li>ChatGPT業務組み込み</li><li>AI研修・ワークショップ</li><li>RAG・カスタムGPT構築</li>
        </ul>
        <a href="/contact/" class="btn-outline">相談する<span>まずはお気軽に</span></a>
      </div>
    </div>
  </section>

  <section class="service-detail" id="line">
    <div class="service-detail__inner">
      <div class="service-detail__label fade-up">03</div>
      <div class="service-detail__body">
        <div class="section-label fade-up">LINE &amp; Automation</div>
        <h2 class="fade-up">LINE連携 / 業務自動化</h2>
        <p class="fade-up">LINE公式アカウントを活用した問い合わせ自動化・顧客対応効率化・社内通知システムを構築します。繰り返し作業を自動化し、人的リソースをより価値ある業務へ。</p>
        <ul class="service-detail__tags fade-up">
          <li>LINE Messaging API</li><li>問い合わせ自動応答</li><li>予約・リマインド自動化</li><li>社内通知ボット</li>
        </ul>
        <a href="/contact/" class="btn-outline">相談する<span>まずはお気軽に</span></a>
      </div>
    </div>
  </section>

  <section class="service-detail service-detail--alt" id="sys">
    <div class="service-detail__inner">
      <div class="service-detail__label fade-up">04</div>
      <div class="service-detail__body">
        <div class="section-label fade-up">Business System</div>
        <h2 class="fade-up">業務システム開発</h2>
        <p class="fade-up">管理画面・予約システム・社内ツールなど、現場の課題に合わせたカスタム業務システムを開発します。既製品では対応できない独自フローも、ゼロから設計・構築します。</p>
        <ul class="service-detail__tags fade-up">
          <li>案件管理システム</li><li>予約・シフト管理</li><li>社内ダッシュボード</li><li>顧客管理（CRM）</li>
        </ul>
        <a href="/contact/" class="btn-outline">相談する<span>まずはお気軽に</span></a>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="cta-band__inner">
      <p>どのサービスが合うかわからない場合もお気軽にご相談ください</p>
      <a href="/contact/" class="btn-fill">Contact<span>無料相談はこちら</span></a>
    </div>
  </section>
</main>
` + footer() + scripts())

// ── Works ──
const works = [
  {tag:'Webアプリ',title:'不動産プラットフォーム開発',client:'RoyAl不動産',desc:'物件検索・詳細表示・管理画面をフルスクラッチで開発。APIと連携したリアルタイム検索や、管理者向けダッシュボードを構築。',progress:'進行中',color:'#d4ddf5'},
  {tag:'AI導入',title:'営業支援AI導入',client:'株式会社未来企画',desc:'営業チームの提案書作成・議事録要約・顧客分析をAIで自動化。ChatGPT APIを活用した社内ツールを開発・導入。',progress:'完了',color:'#c8d8f0'},
  {tag:'LINE連携',title:'LINE問い合わせ自動化',client:'株式会社ネクスト',desc:'LINE公式アカウントからの問い合わせ対応を自動化。FAQボットと担当者への通知システムを構築し、対応時間を大幅削減。',progress:'開発中',color:'#dde6f8'},
  {tag:'業務システム',title:'管理画面改善',client:'山手ホールディングス',desc:'既存の管理画面のUI/UX改善と機能追加。Reactベースで再構築し、操作性と処理速度を大幅に向上。',progress:'テスト中',color:'#e4eaf8'},
  {tag:'Web制作',title:'コーポレートサイト制作',client:'株式会社サンプル',desc:'ブランドイメージに合ったコーポレートサイトを制作。デザインから実装・CMS構築・SEO対策まで一貫して対応。',progress:'完了',color:'#ccd5f0'},
]
const worksCards = works.map(w => `
  <article class="work-card fade-up" style="--card-bg:${w.color}">
    <div class="work-card__bg"></div>
    <div class="work-card__body">
      <div class="work-card__tag">${w.tag}</div>
      <h2 class="work-card__title">${w.title}</h2>
      <p class="work-card__client">${w.client}</p>
      <p class="work-card__desc">${w.desc}</p>
      <span class="work-card__status">${w.progress}</span>
    </div>
  </article>`).join('')

fs.writeFileSync('src/works/index.html', head('事例・実績','../css/main.css') + nav('works') + `
<main>
  <section class="page-hero">
    <div class="page-hero__inner">
      <div class="section-label fade-up">Our Works</div>
      <h1 class="page-hero__title fade-up">事例・実績</h1>
      <p class="page-hero__sub fade-up">Provydalが手がけた開発・導入支援の事例をご紹介します。</p>
      <div class="works-stats fade-up">
        <div class="works-stats__item"><span>50</span><small>+</small><p>Clients</p></div>
        <div class="works-stats__item"><span>100</span><small>+</small><p>Supported Projects</p></div>
      </div>
    </div>
  </section>
  <section class="works-list">
    <div class="works-list__inner">${worksCards}</div>
  </section>
  <section class="cta-band">
    <div class="cta-band__inner">
      <p>あなたの課題も、一緒に解決しましょう</p>
      <a href="/contact/" class="btn-fill">Contact<span>ご相談はこちら</span></a>
    </div>
  </section>
</main>
` + footer() + scripts())

// ── News ──
const newsItems = [
  {tag:'お知らせ',date:'2026/03/20',title:'Provydal、生成AI導入支援サービスの提供を本格開始',body:'ChatGPTをはじめとする生成AIの業務活用を支援する「AI導入支援パッケージ」の提供を開始しました。PoC設計から社内展開まで伴走します。'},
  {tag:'実績',date:'2026/03/10',title:'不動産プラットフォームの開発案件を受注・着工',body:'東京都内の不動産会社RoyAl不動産様より、物件検索プラットフォームの開発を受注。要件定義から設計・開発まで一貫して担当します。'},
  {tag:'お知らせ',date:'2026/02/28',title:'LINE連携・業務自動化パッケージの提供を開始',body:'LINE公式アカウントを活用した問い合わせ自動化・顧客対応効率化パッケージのご提供を開始しました。'},
  {tag:'メディア',date:'2026/02/14',title:'代表・所和哉がAI導入支援についてインタビューに登場',body:'中小企業向けAI活用をテーマにしたメディアに代表・所和哉が登場。現場でのAI導入のポイントについて語りました。'},
  {tag:'実績',date:'2026/01/30',title:'中小企業向けDX支援パッケージを新たにリリース',body:'受託開発・AI導入・業務自動化をセットにした中小企業向けDX支援パッケージを新たに提供開始しました。'},
]
const newsListItems = newsItems.map(n => `
  <li class="news-page__item fade-up">
    <a href="#">
      <div class="news-page__meta">
        <span class="news__tag">${n.tag}</span>
        <span class="news__date">${n.date}</span>
      </div>
      <div class="news-page__text">
        <h3>${n.title}</h3>
        <p>${n.body}</p>
      </div>
      <span class="news-page__arrow">→</span>
    </a>
  </li>`).join('')

fs.writeFileSync('src/news/index.html', head('ニュース','../css/main.css') + nav('news') + `
<main>
  <section class="page-hero">
    <div class="page-hero__inner">
      <div class="section-label fade-up">News</div>
      <h1 class="page-hero__title fade-up">ニュース</h1>
    </div>
  </section>
  <section class="news-page">
    <div class="news-page__inner">
      <ul class="news-page__list">${newsListItems}</ul>
    </div>
  </section>
</main>
` + footer() + scripts())

// ── Career ──
fs.writeFileSync('src/career/index.html', head('採用情報','../css/main.css') + nav('career') + `
<main>
  <section class="page-hero page-hero--navy">
    <div class="page-hero__inner">
      <div class="section-label fade-up" style="color:rgba(255,255,255,0.5)">Career</div>
      <h1 class="page-hero__title fade-up" style="color:#fff">Let's Make it<br>Happen<br>Together!</h1>
      <p class="page-hero__sub fade-up" style="color:rgba(255,255,255,0.7)">「課題に合わせて、必要な開発を。」を一緒に体現する仲間を探しています。</p>
    </div>
  </section>

  <section class="career-values">
    <div class="career-values__inner">
      <div class="section-label fade-up">Our Culture</div>
      <div class="career-values__grid">
        <div class="career-value fade-up">
          <div class="career-value__num">01</div>
          <h3>成果にコミットする</h3>
          <p>「作って終わり」ではなく、クライアントのビジネス成果に向き合い続けます。</p>
        </div>
        <div class="career-value fade-up">
          <div class="career-value__num">02</div>
          <h3>技術で課題を解く</h3>
          <p>最新技術を積極的に取り入れながら、現場の課題に最適な解を提案します。</p>
        </div>
        <div class="career-value fade-up">
          <div class="career-value__num">03</div>
          <h3>フラットに働く</h3>
          <p>職種・経験年数に関係なく、良いアイデアはすぐに実行できる環境です。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="career-jobs">
    <div class="career-jobs__inner">
      <div class="section-label fade-up">Open Positions</div>
      <div class="job-cards">
        <div class="job-card fade-up">
          <div class="job-card__type">エンジニア</div>
          <h3>Webエンジニア（フロント / バックエンド）</h3>
          <p>React・Next.js・Node.jsを使った受託開発をメインで担当。AI・LINE連携プロジェクトにも関わります。</p>
          <ul class="job-card__tags"><li>React</li><li>Node.js</li><li>TypeScript</li><li>AWS</li></ul>
          <a href="/contact/" class="btn-outline">応募する<span>まずは話を聞きたい方もOK</span></a>
        </div>
        <div class="job-card fade-up">
          <div class="job-card__type">デザイナー</div>
          <h3>UI/UXデザイナー</h3>
          <p>コーポレートサイト・Webアプリのデザインを担当。ユーザー視点での設計から実装サポートまで。</p>
          <ul class="job-card__tags"><li>Figma</li><li>UI設計</li><li>HTML/CSS</li></ul>
          <a href="/contact/" class="btn-outline">応募する<span>まずは話を聞きたい方もOK</span></a>
        </div>
        <div class="job-card fade-up">
          <div class="job-card__type">ディレクター</div>
          <h3>Webディレクター / PMO</h3>
          <p>クライアントとの要件定義・進行管理・品質管理を担当。AI・DX案件の推進役として活躍できます。</p>
          <ul class="job-card__tags"><li>PM</li><li>要件定義</li><li>AI活用</li></ul>
          <a href="/contact/" class="btn-outline">応募する<span>まずは話を聞きたい方もOK</span></a>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="cta-band__inner">
      <p>まずはカジュアルに話しましょう</p>
      <a href="/contact/" class="btn-fill">Contact<span>採用についてのお問い合わせ</span></a>
    </div>
  </section>
</main>
` + footer() + scripts())

// ── Contact ──
fs.writeFileSync('src/contact/index.html', head('お問い合わせ','../css/main.css') + nav('contact') + `
<main>
  <section class="page-hero">
    <div class="page-hero__inner">
      <div class="section-label fade-up">Contact</div>
      <h1 class="page-hero__title fade-up">ご相談はこちら</h1>
      <p class="page-hero__sub fade-up">開発のご依頼・AI導入のご相談・お見積もりなど、<br>まずはお気軽にお問い合わせください。</p>
    </div>
  </section>

  <section class="contact-form-section">
    <div class="contact-form-section__inner">
      <form class="contact-form" id="contactForm">
        <div class="form-group fade-up">
          <label>お名前 <span class="required">必須</span></label>
          <input type="text" name="name" placeholder="所 和哉" required>
        </div>
        <div class="form-group fade-up">
          <label>会社名</label>
          <input type="text" name="company" placeholder="株式会社プロバイダル">
        </div>
        <div class="form-group fade-up">
          <label>メールアドレス <span class="required">必須</span></label>
          <input type="email" name="email" placeholder="info@provydal.com" required>
        </div>
        <div class="form-group fade-up">
          <label>お問い合わせ種別 <span class="required">必須</span></label>
          <select name="type" required>
            <option value="">選択してください</option>
            <option>受託開発・Web制作のご依頼</option>
            <option>AI導入支援のご相談</option>
            <option>LINE連携・業務自動化のご相談</option>
            <option>採用についてのお問い合わせ</option>
            <option>その他</option>
          </select>
        </div>
        <div class="form-group fade-up">
          <label>ご予算感</label>
          <select name="budget">
            <option value="">選択してください（任意）</option>
            <option>〜50万円</option>
            <option>50〜100万円</option>
            <option>100〜300万円</option>
            <option>300万円以上</option>
            <option>未定・相談したい</option>
          </select>
        </div>
        <div class="form-group fade-up">
          <label>お問い合わせ内容 <span class="required">必須</span></label>
          <textarea name="message" rows="6" placeholder="ご依頼の背景・課題・希望する機能などをご記入ください" required></textarea>
        </div>
        <div class="form-submit fade-up">
          <button type="submit" class="btn-fill">送信する<span>Send Message</span></button>
        </div>
      </form>
      <div class="contact-info fade-up">
        <div class="contact-info__item">
          <p class="contact-info__label">Email</p>
          <a href="mailto:info@provydal.com">info@provydal.com</a>
        </div>
        <div class="contact-info__item">
          <p class="contact-info__label">Office</p>
          <p>Tokyo, Japan</p>
        </div>
      </div>
    </div>
  </section>
</main>
<script>
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('お問い合わせありがとうございます。内容を確認のうえ、担当者よりご連絡いたします。');
  e.target.reset();
});
</script>
` + footer() + scripts())

// ── 追加CSS（ページ専用スタイル） ──
const extraCss = \`
/* ── Page Hero ── */
.page-hero { padding: 160px 48px 100px; background: var(--white); }
.page-hero--navy { background: var(--navy); }
.page-hero__inner { max-width: 1200px; margin: 0 auto; }
.page-hero__title { font-family: var(--font); font-size: clamp(40px,7vw,88px); font-weight:700; color: var(--navy); line-height:1.05; letter-spacing:-2px; margin-bottom:32px; }
.page-hero--navy .page-hero__title { color: #fff; }
.page-hero__sub { font-size:18px; line-height:1.8; color:#555; max-width:640px; }

/* ── About ── */
.about-vision { padding:120px 48px; background:var(--gray); }
.about-vision__inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; }
@media(max-width:768px){ .about-vision__inner{ grid-template-columns:1fr; gap:48px; } }
.about-block h2 { font-family:var(--font); font-size:clamp(28px,4vw,44px); font-weight:700; color:var(--navy); line-height:1.2; margin:16px 0 24px; }
.about-block p { font-size:15px; line-height:1.9; color:#444; }
.about-profile { padding:120px 48px; background:var(--white); }
.about-profile__inner { max-width:900px; margin:0 auto; }
.profile-table { width:100%; border-collapse:collapse; margin-top:32px; }
.profile-table th,.profile-table td { padding:20px 24px; border-bottom:1px solid #e8e8e8; font-size:15px; text-align:left; vertical-align:top; }
.profile-table th { width:180px; color:#888; font-weight:400; }
.profile-table td { color:#222; }
.profile-table a { color:var(--navy); border-bottom:1px solid var(--navy); }

/* ── Service Detail ── */
.service-detail { padding:100px 48px; background:var(--white); }
.service-detail--alt { background:var(--gray); }
.service-detail__inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:80px 1fr; gap:48px; }
@media(max-width:768px){ .service-detail__inner{ grid-template-columns:1fr; } }
.service-detail__label { font-family:var(--font); font-size:48px; font-weight:700; color:rgba(26,58,140,0.15); padding-top:8px; }
.service-detail__body h2 { font-family:var(--font); font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--navy); margin:12px 0 24px; line-height:1.1; }
.service-detail__body p { font-size:15px; line-height:1.9; color:#444; margin-bottom:32px; max-width:640px; }
.service-detail__tags { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:32px; list-style:none; }
.service-detail__tags li { font-size:12px; border:1px solid var(--navy); color:var(--navy); padding:4px 12px; border-radius:20px; }

/* ── Works ── */
.works-stats { display:flex; gap:48px; margin-top:40px; }
.works-stats__item { display:flex; flex-direction:column; }
.works-stats__item span { font-family:var(--font); font-size:52px; font-weight:700; color:var(--navy); line-height:1; }
.works-stats__item small { font-size:28px; font-weight:700; color:var(--navy); }
.works-stats__item p { font-size:13px; color:#888; margin-top:4px; }
.works-list { padding:80px 48px 120px; }
.works-list__inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:24px; }
@media(max-width:768px){ .works-list__inner{ grid-template-columns:1fr; } }
.work-card { background:var(--card-bg,#d4ddf5); border-radius:2px; overflow:hidden; padding:48px 40px; position:relative; min-height:320px; display:flex; flex-direction:column; justify-content:flex-end; transition:transform 0.3s var(--ease); }
.work-card:hover { transform:translateY(-4px); }
.work-card__tag { font-size:11px; border:1px solid var(--navy); color:var(--navy); padding:3px 10px; border-radius:20px; display:inline-block; margin-bottom:16px; }
.work-card__title { font-family:var(--font); font-size:clamp(20px,3vw,28px); font-weight:700; color:var(--navy); margin-bottom:8px; line-height:1.2; }
.work-card__client { font-size:13px; color:#666; margin-bottom:16px; }
.work-card__desc { font-size:14px; line-height:1.8; color:#444; margin-bottom:20px; }
.work-card__status { font-size:12px; color:var(--navy); border-bottom:1px solid var(--navy); padding-bottom:2px; }

/* ── News Page ── */
.news-page { padding:40px 48px 120px; }
.news-page__inner { max-width:1200px; margin:0 auto; }
.news-page__list { list-style:none; }
.news-page__item { border-bottom:1px solid #e8e8e8; }
.news-page__item a { display:grid; grid-template-columns:auto 1fr auto; gap:32px; align-items:start; padding:32px 0; transition:padding-left 0.2s; }
.news-page__item a:hover { padding-left:8px; }
.news-page__meta { display:flex; flex-direction:column; gap:8px; min-width:120px; }
.news-page__text h3 { font-size:16px; font-weight:600; color:#111; margin-bottom:8px; }
.news-page__text p { font-size:14px; line-height:1.7; color:#666; }
.news-page__arrow { font-size:20px; color:var(--navy); padding-top:4px; }
@media(max-width:768px){ .news-page__item a{ grid-template-columns:1fr; gap:12px; } .news-page__arrow{ display:none; } }

/* ── Career ── */
.career-values { padding:120px 48px; background:var(--white); }
.career-values__inner { max-width:1200px; margin:0 auto; }
.career-values__grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:48px; }
@media(max-width:768px){ .career-values__grid{ grid-template-columns:1fr; } }
.career-value { background:var(--gray); padding:48px 36px; }
.career-value__num { font-family:var(--font); font-size:12px; color:rgba(26,58,140,0.4); margin-bottom:20px; }
.career-value h3 { font-family:var(--font); font-size:22px; font-weight:700; color:var(--navy); margin-bottom:16px; }
.career-value p { font-size:14px; line-height:1.8; color:#555; }
.career-jobs { padding:0 48px 120px; background:var(--white); }
.career-jobs__inner { max-width:1200px; margin:0 auto; }
.career-jobs .section-label { margin-bottom:40px; }
.job-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
@media(max-width:768px){ .job-cards{ grid-template-columns:1fr; } }
.job-card { border:1px solid #e0e6f4; padding:40px 32px; display:flex; flex-direction:column; gap:16px; transition:border-color 0.2s; }
.job-card:hover { border-color:var(--navy); }
.job-card__type { font-size:11px; background:var(--navy); color:#fff; padding:4px 12px; border-radius:20px; display:inline-block; align-self:flex-start; }
.job-card h3 { font-family:var(--font); font-size:18px; font-weight:700; color:var(--navy); line-height:1.3; }
.job-card p { font-size:14px; line-height:1.8; color:#555; flex:1; }
.job-card__tags { display:flex; flex-wrap:wrap; gap:6px; list-style:none; }
.job-card__tags li { font-size:11px; border:1px solid #ccd5f0; color:var(--navy); padding:3px 8px; border-radius:3px; }

/* ── Contact Form ── */
.contact-form-section { padding:60px 48px 120px; background:var(--white); }
.contact-form-section__inner { max-width:800px; margin:0 auto; }
.contact-form { display:flex; flex-direction:column; gap:32px; margin-bottom:64px; }
.form-group { display:flex; flex-direction:column; gap:8px; }
.form-group label { font-size:14px; font-weight:600; color:#333; }
.required { font-size:11px; color:#e74c4c; margin-left:4px; }
.form-group input,.form-group select,.form-group textarea { width:100%; padding:14px 16px; border:1.5px solid #d8dde8; font-size:15px; font-family:var(--sans); background:#fff; transition:border-color 0.2s; outline:none; border-radius:2px; }
.form-group input:focus,.form-group select:focus,.form-group textarea:focus { border-color:var(--navy); }
.form-submit { display:flex; }
.contact-info { display:flex; gap:64px; padding-top:48px; border-top:1px solid #e8e8e8; }
.contact-info__label { font-size:12px; color:#888; margin-bottom:4px; letter-spacing:1px; text-transform:uppercase; }
.contact-info a { font-size:16px; color:var(--navy); border-bottom:1px solid var(--navy); }

/* ── CTA Band ── */
.cta-band { padding:100px 48px; background:var(--navy); }
.cta-band__inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; }
.cta-band p { font-family:var(--font); font-size:clamp(18px,3vw,28px); font-weight:700; color:#fff; }
\`

// 既存CSSに追記
const existingCss = fs.readFileSync('src/css/main.css','utf8')
if(!existingCss.includes('page-hero')){
  fs.appendFileSync('src/css/main.css', extraCss)
}

// index.htmlのリンクをページリンクに更新
let indexHtml = fs.readFileSync('src/index.html','utf8')
indexHtml = indexHtml
  .replace(/href="#about"/g, 'href="/about/"')
  .replace(/href="#service"/g, 'href="/service/"')
  .replace(/href="#works"/g, 'href="/works/"')
  .replace(/href="#news"/g, 'href="/news/"')
  .replace(/href="#career"/g, 'href="/career/"')
  .replace(/href="#contact"/g, 'href="/contact/"')
fs.writeFileSync('src/index.html', indexHtml)

console.log('✅ 全ページ生成完了！')
