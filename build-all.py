import os, textwrap

def mkdirs(*paths):
    for p in paths:
        os.makedirs(p, exist_ok=True)

mkdirs('src/about','src/service','src/service/dev','src/service/ai',
       'src/service/line','src/service/sys','src/works','src/news',
       'src/career','src/contact')

NAV = """<header class="nav" id="nav">
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
</div>"""

FOOTER = """<footer class="footer">
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
</footer>"""

def page(title, css_depth, content, extra_js=""):
    d = {0:"./",1:"../",2:"../../"}[css_depth]
    return f"""<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Provydal</title>
<link rel="stylesheet" href="{d}css/main.css">
</head>
<body>
{NAV}
<main>{content}</main>
{FOOTER}
<script type="module">
import {{ initNav }} from '{d}js/nav.js';
initNav();
document.querySelectorAll('.fade-up').forEach(function(el){{
  new IntersectionObserver(function(e){{e.forEach(function(x){{if(x.isIntersecting)x.target.classList.add('visible')}});}},{{threshold:0.08}}).observe(el);
}});
{extra_js}
</script>
</body>
</html>"""

CTA = """<section class="cta-band">
  <div class="cta-band__inner">
    <p>{msg}</p>
    <a href="/contact/" class="btn-fill">ご相談はこちら<span>Contact Us</span></a>
  </div>
</section>"""

# ── service index ──
svc_index = """
<section class="page-hero page-hero--navy">
  <div class="page-hero__inner">
    <div class="page-hero__eyebrow fade-up">Service</div>
    <h1 class="page-hero__title fade-up">事業内容</h1>
    <p class="page-hero__lead fade-up">テック・デザイン・ビジネスの専門チームによる事業共創。受託開発からAI導入支援まで、デジタル化に必要なすべてをワンストップで。</p>
  </div>
</section>
<a href="/service/dev/" class="service-link-card">
  <div class="service-detail"><div class="service-detail__inner">
    <div class="service-detail__label">01</div>
    <div class="service-detail__body">
      <div class="section-label">Creative &amp; Engineering</div>
      <h2>受託開発 / Web制作</h2>
      <p>コーポレートサイトからWebアプリ・管理画面まで。要件定義から設計・開発・納品・運用保守まで一貫して対応します。</p>
    </div>
  </div><span class="arrow-hint">詳細を見る →</span></div>
</a>
<a href="/service/ai/" class="service-link-card">
  <div class="service-detail service-detail--alt"><div class="service-detail__inner">
    <div class="service-detail__label">02</div>
    <div class="service-detail__body">
      <div class="section-label">AI Integration</div>
      <h2>AI導入支援</h2>
      <p>ChatGPTをはじめとする生成AIの業務活用を支援。PoC設計から社内展開まで伴走します。</p>
    </div>
  </div><span class="arrow-hint">詳細を見る →</span></div>
</a>
<a href="/service/line/" class="service-link-card">
  <div class="service-detail"><div class="service-detail__inner">
    <div class="service-detail__label">03</div>
    <div class="service-detail__body">
      <div class="section-label">LINE &amp; Automation</div>
      <h2>LINE連携 / 業務自動化</h2>
      <p>LINE公式アカウントを活用した問い合わせ自動化・顧客対応効率化・社内通知システムを構築します。</p>
    </div>
  </div><span class="arrow-hint">詳細を見る →</span></div>
</a>
<a href="/service/sys/" class="service-link-card">
  <div class="service-detail service-detail--alt"><div class="service-detail__inner">
    <div class="service-detail__label">04</div>
    <div class="service-detail__body">
      <div class="section-label">Business System</div>
      <h2>業務システム開発</h2>
      <p>管理画面・予約システム・社内ツールなど、現場の課題に合わせたカスタム業務システムを開発します。</p>
    </div>
  </div><span class="arrow-hint">詳細を見る →</span></div>
</a>
""" + CTA.format(msg="どのサービスが合うかわからない場合もお気軽に")

with open('src/service/index.html','w') as f:
    f.write(page('事業内容',1,svc_index))
print('✓ service/index.html')

# ── service detail builder ──
def sp(o):
    trends_html = ''.join(f"""<div class="sp-trend fade-up"><div class="sp-trend__icon">{t['i']}</div><div><h3>{t['t']}</h3><p>{t['b']}</p></div></div>""" for t in o['trends'])
    feat_html = ''.join(f"""<div class="sp-feature fade-up"><div class="sp-feature__num">{f['n']}</div><h3>{f['t']}</h3><p>{f['b']}</p></div>""" for f in o['features'])
    return f"""
<section class="sp-hero">
  <div class="sp-hero__inner">
    <a href="/service/" class="sp-back fade-up">← Service一覧へ戻る</a>
    <div class="sp-hero__num fade-up">{o['num']}</div>
    <div class="sp-hero__tag fade-up">{o['label']}</div>
    <h1 class="sp-hero__title fade-up">{o['title']}</h1>
    <p class="sp-hero__lead fade-up">{o['lead']}</p>
  </div>
</section>
<section class="sp-sec">
  <div class="sp-sec__inner">
    <div class="sp-sec__eyebrow fade-up">Why it matters</div>
    <h2 class="sp-sec__title fade-up">{o['why_title']}</h2>
    <div class="sp-sec__body fade-up">{o['why_body']}</div>
  </div>
</section>
<section class="sp-sec sp-sec--gray">
  <div class="sp-sec__inner">
    <div class="sp-sec__eyebrow fade-up">Market Trends</div>
    <h2 class="sp-sec__title fade-up">{o['trend_title']}</h2>
    <div class="sp-trends">{trends_html}</div>
  </div>
</section>
<section class="sp-sec sp-sec--navy">
  <div class="sp-sec__inner">
    <div class="sp-sec__eyebrow fade-up">How Provydal helps</div>
    <h2 class="sp-sec__title fade-up">{o['how_title']}</h2>
    <div class="sp-sec__body fade-up"><p>{o['how_body']}</p></div>
    <div class="sp-features">{feat_html}</div>
  </div>
</section>
{CTA.format(msg=o['cta'])}"""

services = [
  ('dev','受託開発 / Web制作',{
    'num':'01','label':'Creative & Engineering',
    'title':'受託開発 /<br>Web制作',
    'lead':'コーポレートサイトからWebアプリ・管理画面まで。要件定義から納品・運用保守まで一貫して対応します。',
    'why_title':'なぜ今「ちゃんとした開発」が重要なのか。',
    'why_body':'<p>「とりあえず作った」サイトやシステムがビジネスの足かせになるケースが増えています。スマートフォンの普及・競合のデジタル化・顧客の目の肥え方——あらゆる面でWebの品質がビジネス成果に直結する時代です。</p><p>特に中小企業では「予算がないから安価に作った」結果、使われないシステムや集客できないサイトを抱えてしまうケースが後を絶ちません。最初に正しく作ることが長期的には最もコストパフォーマンスが高い選択です。</p>',
    'trend_title':'「作る」から「成果を出す」時代へ',
    'trends':[
      {'i':'📱','t':'モバイルファーストの加速','b':'国内Web閲覧の70%以上がスマートフォンから。レスポンシブ対応はもはや最低限の要件です。'},
      {'i':'⚡','t':'ページ速度が集客を左右','b':'表示速度が3秒を超えると離脱率が53%増加。技術的品質がSEOと直結しています。'},
      {'i':'🤖','t':'AI活用で開発コストが低下','b':'生成AIの活用により、従来の半分以下のコストで高品質なプロダクトを届けられます。'},
      {'i':'🔒','t':'セキュリティリスクの増大','b':'サイバー攻撃の標的は中小企業にも拡大。セキュアな開発が必須の時代です。'},
    ],
    'how_title':'Provydalが「使われるプロダクト」を届けるまで',
    'how_body':'要件定義から設計・開発・テスト・納品・運用保守まで一気通貫で対応。「作って終わり」ではなく、ビジネス成果につながるプロダクトを届けることにコミットします。',
    'features':[
      {'n':'STEP 01','t':'要件定義・ヒアリング','b':'「何を作るか」ではなく「何を解決するか」から始めます。ビジネス課題を丁寧にヒアリングし最適な仕様を設計します。'},
      {'n':'STEP 02','t':'UI/UXデザイン','b':'ユーザーが迷わず気持ちよく使えるデザインを追求。ワイヤーフレームからビジュアルデザインまで一貫して担当します。'},
      {'n':'STEP 03','t':'開発・実装','b':'React / Next.js / Node.js を中心に、要件に応じた技術スタックで開発。コード品質と保守性にこだわります。'},
      {'n':'STEP 04','t':'納品・運用保守','b':'納品後もパートナーとして伴走。機能追加・改善・障害対応まで長期的にサポートします。'},
    ],
    'cta':'開発のご相談・お見積もりはお気軽に'
  }),
  ('ai','AI導入支援',{
    'num':'02','label':'AI Integration',
    'title':'AI導入支援',
    'lead':'ChatGPTをはじめとする生成AIの業務活用を支援。PoC設計から社内展開まで伴走します。',
    'why_title':'AIを「使ってみた」で終わらせない。',
    'why_body':'<p>生成AIの登場はビジネスの生産性を根本から変える可能性を秘めています。しかし多くの企業で「触ってはみたが業務に定着しない」「どの業務に使えばいいかわからない」という状態が続いています。</p><p>AIツールは道具に過ぎません。重要なのは自社のどの課題にどう使えば成果が出るかを設計すること。Provydalは技術と業務の両面から「使えるAI活用」を一緒に作ります。</p>',
    'trend_title':'生成AI活用は競争優位から「前提」へ',
    'trends':[
      {'i':'📈','t':'企業のAI活用率が急速に拡大','b':'2024年時点で国内大手企業の約60%が生成AIを業務活用中。中小企業との差が広がっています。'},
      {'i':'⏰','t':'月平均3〜5時間の業務削減','b':'議事録・資料作成・メール対応など定型業務をAIに委ねることで生まれる時間は想像以上です。'},
      {'i':'💼','t':'AIリテラシーが採用・評価の基準に','b':'「AIを使いこなせる人材」の需要が急増。組織全体のリスキリングが急務になっています。'},
      {'i':'🔑','t':'カスタマイズAIが差別化の鍵に','b':'自社データ・業務フローに特化したAIを持つことが次の競争軸になります。'},
    ],
    'how_title':'Provydalの「使えるAI」導入ステップ',
    'how_body':'「何から始めればいい？」という段階から伴走します。業務分析・PoC設計・ツール選定・社内展開・効果測定まで、AIを本当に使える状態にするまで一緒に進めます。',
    'features':[
      {'n':'PHASE 01','t':'業務分析・活用設計','b':'現状の業務フローを整理しAIで効率化できる箇所を特定。優先順位をつけた導入ロードマップを作成します。'},
      {'n':'PHASE 02','t':'PoC・プロトタイプ開発','b':'ChatGPT APIやLangChainを使ったプロトタイプを素早く構築し効果を検証します。'},
      {'n':'PHASE 03','t':'ツール・システム構築','b':'実業務に組み込める形でシステム化。社内ツール連携・セキュリティ対策も含めて対応します。'},
      {'n':'PHASE 04','t':'社内展開・研修・定着支援','b':'社内研修・マニュアル作成・定着フォローまで一気通貫で支援します。'},
    ],
    'cta':'AI活用のご相談、まずは無料でお話しましょう'
  }),
  ('line','LINE連携 / 業務自動化',{
    'num':'03','label':'LINE & Automation',
    'title':'LINE連携 /<br>業務自動化',
    'lead':'LINE公式アカウントを活用した問い合わせ自動化・顧客対応効率化・社内通知システムを構築します。',
    'why_title':'「人手でやっている繰り返し作業」が成長を止めている。',
    'why_body':'<p>問い合わせ対応・予約確認・リマインド送信・社内報告……毎日繰り返される定型業務に優秀なスタッフの時間が奪われていませんか？これらの業務の多くは適切なシステムを組めば自動化できます。</p><p>LINEは国内利用者9,700万人超・開封率70%以上という圧倒的なリーチを持つプラットフォーム。顧客接点としてLINEを活用しながらバックエンドで自動処理を走らせることで少人数でも大きな成果を出せます。</p>',
    'trend_title':'LINEは「連絡ツール」から「ビジネスインフラ」へ',
    'trends':[
      {'i':'💬','t':'LINE公式アカウント利用企業が急増','b':'中小企業を含む50万社以上がLINE公式アカウントを活用。顧客接点としての重要性が急上昇しています。'},
      {'i':'📊','t':'メールより圧倒的に読まれる','b':'メールの開封率約20%に対しLINEメッセージは約70%。顧客へのリーチ効率が全く異なります。'},
      {'i':'🔄','t':'ノーコード自動化ツールの普及','b':'Make・Zapierの普及によりコーディング不要で業務自動化できる範囲が大幅に拡大しました。'},
      {'i':'👥','t':'人手不足時代の業務設計','b':'「人がやらなくていい仕事を減らす」業務設計が経営の最優先課題になっています。'},
    ],
    'how_title':'Provydalが作る「仕組みが動き続ける」システム',
    'how_body':'単に「自動返信できる」だけでなく、顧客体験を損なわない自然な対話フローとバックエンドの業務システムとの連携まで設計します。',
    'features':[
      {'n':'機能 01','t':'LINE問い合わせ自動応答','b':'よくある質問への自動回答・営業時間外対応・問い合わせ内容の自動振り分けを構築します。'},
      {'n':'機能 02','t':'予約・リマインド自動化','b':'予約受付→確認メッセージ→前日リマインド→キャンセル処理まで自動化します。'},
      {'n':'機能 03','t':'社内通知・報告自動化','b':'売上報告・在庫アラート・勤怠通知など社内情報共有をLINEグループに自動送信します。'},
      {'n':'機能 04','t':'CRM・基幹システム連携','b':'LINE顧客対応履歴をCRMに自動記録。スプレッドシート・Notion・独自DBとの連携も対応します。'},
    ],
    'cta':'まずは自動化できる業務を一緒に整理しましょう'
  }),
  ('sys','業務システム開発',{
    'num':'04','label':'Business System',
    'title':'業務システム開発',
    'lead':'管理画面・予約システム・社内ツールなど、現場の課題に合わせたカスタム業務システムを開発します。',
    'why_title':'「既製品で妥協」が業務の非効率を生み続ける。',
    'why_body':'<p>市販のSaaSツールは便利ですが、自社の業務フローに完全に合うツールはほとんど存在しません。「このツールの使い方に合わせて業務を変えた」という本末転倒な状態に陥っている企業は少なくありません。</p><p>カスタム業務システムは「高そう」というイメージがありますが、生成AIの活用により開発コストは大幅に下がっています。自社フローに合ったシステムを持つことが長期的な生産性と競争力の源泉になります。</p>',
    'trend_title':'SaaSの限界とカスタム開発の再評価',
    'trends':[
      {'i':'📦','t':'SaaS疲れが広がっている','b':'複数SaaSの操作コスト・月額費用の積み上がりに課題を感じる企業が増加しています。'},
      {'i':'🏗','t':'ローコード開発の進化','b':'Next.js・Prisma・Supabaseなどが成熟し高品質な業務システムをより低コストで構築できます。'},
      {'i':'📱','t':'モバイル対応が当たり前に','b':'現場担当者がスマートフォンで業務システムを使う場面が急増。PC前提の設計は時代遅れです。'},
      {'i':'🔗','t':'API連携が標準に','b':'LINE・Slack・会計ソフト・ECとのAPI連携が業務システムの当たり前になりつつあります。'},
    ],
    'how_title':'Provydalが設計する「現場に馴染むシステム」',
    'how_body':'現場の声を丁寧にヒアリングし「使われるシステム」を設計します。UIの使いやすさ・処理速度・拡張性まで考慮した開発で長く使い続けられるシステムを届けます。',
    'features':[
      {'n':'対応 01','t':'管理画面・ダッシュボード','b':'案件管理・顧客管理・在庫管理・売上分析など業務に必要な情報を一元管理できる管理画面を構築します。'},
      {'n':'対応 02','t':'予約・スケジュール管理','b':'飲食・美容・医療・教室など業種特有の予約フローに対応したカスタム予約システムを開発します。'},
      {'n':'対応 03','t':'社内ポータル・ワークフロー','b':'申請・承認フロー・情報共有・マニュアル管理など社内業務を効率化するポータルシステムを構築します。'},
      {'n':'対応 04','t':'既存システムの改善・リプレイス','b':'「使いにくい」「遅い」「スマホで見られない」既存システムの改善・モダン化にも対応します。'},
    ],
    'cta':'「こんなシステムが欲しい」をお気軽にご相談ください'
  }),
]

for (dirn, title, o) in services:
    with open(f'src/service/{dirn}/index.html','w') as f:
        f.write(page(title, 2, sp(o)))
    print(f'✓ service/{dirn}/index.html')

# ── about ──
about_content = """
<section class="page-hero">
  <div class="page-hero__inner">
    <div class="page-hero__eyebrow fade-up">Company</div>
    <h1 class="page-hero__title fade-up">あらゆる課題に、<br>必要な開発を。</h1>
    <p class="page-hero__lead fade-up">株式会社プロバイダル（Provydal）は、受託開発・AI導入支援・業務自動化を通じて企業のデジタル化を支援するデジタルクリエイティブスタジオです。</p>
  </div>
</section>
<section class="about-split" id="vision">
  <div class="about-split__inner">
    <div class="about-block fade-up">
      <div class="about-block__eyebrow">Vision</div>
      <h2>課題に合わせて、<br>必要な開発を。</h2>
      <p>テクノロジーの力で、あらゆる企業の課題を解決する。大企業だけでなく中小企業・スタートアップにとっても、デジタルが当たり前の武器になる世界をつくります。</p>
    </div>
    <div class="about-block fade-up">
      <div class="about-block__eyebrow">Mission</div>
      <h2>伴走型の開発で、<br>成果をつくる。</h2>
      <p>「作って終わり」ではなく、要件定義から納品・運用まで一気通貫でサポート。クライアントのビジネス成果にコミットする開発パートナーであり続けます。</p>
    </div>
  </div>
</section>
<section class="about-split about-split--gray" id="company">
  <div class="about-split__inner">
    <div class="fade-up">
      <div class="about-block__eyebrow">Company Profile</div>
      <h2>会社情報</h2>
    </div>
    <div class="fade-up">
      <table class="profile-table">
        <tr><th>会社名</th><td>株式会社プロバイダル<br><small style="color:#888;font-size:13px;">Provydal Inc.</small></td></tr>
        <tr><th>代表取締役</th><td>所 和哉（Kazuya Tokoro）</td></tr>
        <tr><th>所在地</th><td>東京都</td></tr>
        <tr><th>事業内容</th><td>受託開発・Web制作・AI導入支援<br>LINE連携・業務システム開発</td></tr>
        <tr><th>URL</th><td><a href="https://provydal.com" target="_blank">provydal.com</a></td></tr>
      </table>
    </div>
  </div>
</section>
""" + CTA.format(msg="開発のご相談・お見積もりはこちら")
with open('src/about/index.html','w') as f:
    f.write(page('会社概要',1,about_content))
print('✓ about/index.html')

# ── works ──
works_cards = ""
for i,(wide,tag,title,client,num) in enumerate([
    (True,'Webアプリ','不動産プラットフォーム開発','RoyAl不動産','01'),
    (False,'AI導入','営業支援AI導入','株式会社未来企画','02'),
    (False,'LINE連携','LINE問い合わせ自動化','株式会社ネクスト','03'),
    (False,'業務システム','管理画面改善','山手ホールディングス','04'),
    (False,'Web制作','コーポレートサイト制作','株式会社サンプル','05'),
]):
    wide_class = ' work-card--wide' if wide else ''
    works_cards += f"""<div class="work-card{wide_class}">
  <div class="work-card__overlay"></div>
  <div class="work-card__body">
    <div class="work-card__tag">{tag}</div>
    <div class="work-card__title">{title}</div>
    <div class="work-card__client">{client}</div>
  </div>
  <div class="work-card__num">{num}</div>
</div>\n"""

works_content = f"""
<section class="page-hero">
  <div class="page-hero__inner">
    <div class="page-hero__eyebrow fade-up">Our Works</div>
    <h1 class="page-hero__title fade-up">事例・実績</h1>
    <p class="page-hero__lead fade-up">Provydalが手がけた開発・導入支援の事例をご紹介します。</p>
  </div>
</section>
<section class="works-page">
  <div class="works-page__inner">
    <div class="works-stats-row fade-up">
      <div class="works-stat"><span>50</span><small>+</small><p>Clients</p></div>
      <div class="works-stat"><span>100</span><small>+</small><p>Supported Projects</p></div>
    </div>
    <div class="works-grid">{works_cards}</div>
  </div>
</section>
{CTA.format(msg="あなたの課題も、一緒に解決しましょう")}"""
with open('src/works/index.html','w') as f:
    f.write(page('事例・実績',1,works_content))
print('✓ works/index.html')

# ── news ──
news_items = [
    ('お知らせ','2026/03/20','生成AI導入支援サービスの提供を本格開始','ChatGPTをはじめとする生成AIの業務活用を支援する「AI導入支援パッケージ」の提供を開始しました。'),
    ('実績','2026/03/10','不動産プラットフォームの開発案件を受注・着工','東京都内の不動産会社RoyAl不動産様より物件検索プラットフォームの開発を受注しました。'),
    ('お知らせ','2026/02/28','LINE連携・業務自動化パッケージの提供を開始','LINE公式アカウントを活用した問い合わせ自動化パッケージのご提供を開始しました。'),
    ('メディア','2026/02/14','代表・所和哉がAI導入支援についてインタビューに登場','中小企業向けAI活用をテーマにしたメディアに代表が登場しました。'),
    ('実績','2026/01/30','中小企業向けDX支援パッケージをリリース','受託開発・AI導入・業務自動化をセットにした中小企業向けDXパッケージを提供開始しました。'),
    ('お知らせ','2026/01/15','2026年の事業方針を発表','AI導入支援・LINE連携の2領域を重点強化する2026年の事業方針を発表しました。'),
]
news_list_html = ''.join(f"""<li class="news-list__item fade-up">
  <a href="#">
    <span class="news-tag">{tag}</span>
    <span class="news-date">{date}</span>
    <div class="news-text"><h3>{title}</h3><p>{body}</p></div>
    <span class="news-arr">→</span>
  </a>
</li>""" for tag,date,title,body in news_items)

news_content = f"""
<section class="page-hero">
  <div class="page-hero__inner">
    <div class="page-hero__eyebrow fade-up">News</div>
    <h1 class="page-hero__title fade-up">ニュース</h1>
  </div>
</section>
<section class="news-page">
  <div class="news-page__inner">
    <ul class="news-list">{news_list_html}</ul>
  </div>
</section>"""
with open('src/news/index.html','w') as f:
    f.write(page('ニュース',1,news_content))
print('✓ news/index.html')

# ── career ──
jobs = [
    ('エンジニア','Webエンジニア（フロント / バックエンド）',
     'React・Next.js・Node.jsを使った受託開発をメインで担当。AI・LINE連携プロジェクトにも積極的に関わっていただきます。',
     ['React','Node.js','TypeScript','AWS']),
    ('デザイナー','UI/UXデザイナー',
     'コーポレートサイト・WebアプリのデザインをFigmaで担当。ユーザー視点での設計から実装サポートまで幅広く活躍できます。',
     ['Figma','UI設計','HTML/CSS']),
    ('ディレクター','Webディレクター / PMO',
     'クライアントとの要件定義・進行管理・品質管理を担当。AI・DX案件の推進役として中心的な役割を担っていただきます。',
     ['PM','要件定義','AI活用']),
]
jobs_html = ''.join(f"""<div class="job-card fade-up">
  <span class="job-type">{jtype}</span>
  <h3>{jtitle}</h3>
  <p>{jdesc}</p>
  <ul class="job-tags">{''.join(f'<li>{t}</li>' for t in tags)}</ul>
  <a href="/contact/" class="btn-outline">応募する・話を聞く<span>まずはお気軽に</span></a>
</div>""" for jtype,jtitle,jdesc,tags in jobs)

career_content = f"""
<section class="page-hero page-hero--navy">
  <div class="page-hero__inner">
    <div class="page-hero__eyebrow fade-up">Career</div>
    <h1 class="page-hero__title fade-up">Let's Make it<br>Happen<br>Together!</h1>
    <p class="page-hero__lead fade-up">「課題に合わせて、必要な開発を。」を一緒に体現する仲間を探しています。エンジニア・デザイナー・ディレクター、どんな形でも歓迎です。</p>
  </div>
</section>
<section class="career-page-values">
  <div class="career-page-values__inner">
    <div class="section-label fade-up">Our Culture</div>
    <div class="values-grid">
      <div class="value-card fade-up"><div class="value-card__num">01</div><h3>成果にコミットする</h3><p>「作って終わり」ではなく、クライアントのビジネス成果に向き合い続けます。</p></div>
      <div class="value-card fade-up"><div class="value-card__num">02</div><h3>技術で課題を解く</h3><p>最新技術を積極的に取り入れながら、現場の課題に最適な解を提案します。</p></div>
      <div class="value-card fade-up"><div class="value-card__num">03</div><h3>フラットに働く</h3><p>職種・経験年数に関係なく、良いアイデアはすぐに実行できる環境です。</p></div>
    </div>
  </div>
</section>
<section class="career-jobs">
  <div class="career-jobs__inner">
    <div class="section-label fade-up">Open Positions</div>
    <div class="jobs-grid">{jobs_html}</div>
  </div>
</section>
{CTA.format(msg="まずはカジュアルに話しましょう")}"""
with open('src/career/index.html','w') as f:
    f.write(page('採用情報',1,career_content))
print('✓ career/index.html')

# ── contact ──
contact_content = """
<section class="page-hero page-hero--gray">
  <div class="page-hero__inner">
    <div class="page-hero__eyebrow fade-up">Contact</div>
    <h1 class="page-hero__title fade-up">ご相談はこちら</h1>
    <p class="page-hero__lead fade-up">開発のご依頼・AI導入のご相談・お見積もりなど、まずはお気軽にお問い合わせください。通常2営業日以内にご返信いたします。</p>
  </div>
</section>
<section class="contact-page">
  <div class="contact-page__inner">
    <form class="contact-form" id="cForm">
      <div class="form-row">
        <div class="form-group fade-up"><label>お名前<span class="required">必須</span></label><input type="text" name="name" placeholder="所 和哉" required></div>
        <div class="form-group fade-up"><label>会社名</label><input type="text" name="company" placeholder="株式会社プロバイダル"></div>
      </div>
      <div class="form-group fade-up"><label>メールアドレス<span class="required">必須</span></label><input type="email" name="email" placeholder="info@provydal.com" required></div>
      <div class="form-row">
        <div class="form-group fade-up">
          <label>お問い合わせ種別<span class="required">必須</span></label>
          <select name="type" required>
            <option value="">選択してください</option>
            <option>受託開発・Web制作のご依頼</option>
            <option>AI導入支援のご相談</option>
            <option>LINE連携・業務自動化のご相談</option>
            <option>業務システム開発のご相談</option>
            <option>採用についてのお問い合わせ</option>
            <option>その他</option>
          </select>
        </div>
        <div class="form-group fade-up">
          <label>ご予算感</label>
          <select name="budget">
            <option value="">任意</option>
            <option>〜50万円</option>
            <option>50〜100万円</option>
            <option>100〜300万円</option>
            <option>300万円以上</option>
            <option>未定・相談したい</option>
          </select>
        </div>
      </div>
      <div class="form-group fade-up"><label>お問い合わせ内容<span class="required">必須</span></label><textarea name="message" placeholder="ご依頼の背景・課題・希望する機能などをご記入ください" required></textarea></div>
      <div class="form-submit fade-up"><button type="submit" class="btn-fill">送信する<span>Send Message</span></button></div>
    </form>
    <hr class="contact-divider">
    <div class="contact-info-row fade-up">
      <div class="contact-info-item"><p>Email</p><a href="mailto:info@provydal.com">info@provydal.com</a></div>
      <div class="contact-info-item"><p>Office</p><p>Tokyo, Japan</p></div>
    </div>
  </div>
</section>"""
with open('src/contact/index.html','w') as f:
    f.write(page('お問い合わせ',1,contact_content,
        "document.getElementById('cForm').addEventListener('submit',function(e){e.preventDefault();alert('お問い合わせありがとうございます。担当者よりご連絡いたします。');e.target.reset();});"))
print('✓ contact/index.html')

# ── update index.html links ──
if os.path.exists('src/index.html'):
    txt = open('src/index.html').read()
    for old,new in [('#about','/about/'),('#service','/service/'),('#works','/works/'),('#news','/news/'),('#career','/career/'),('#contact','/contact/')]:
        txt = txt.replace(f'href="{old}"',f'href="{new}"')
    open('src/index.html','w').write(txt)
    print('✓ index.html links updated')

# ── append CSS ──
ADD_CSS = """
/* ===== Page Hero ===== */
.page-hero{padding:160px 48px 100px;background:#fff;}
.page-hero--navy{background:var(--navy);}
.page-hero--gray{background:var(--gray);}
.page-hero__inner{max-width:1200px;margin:0 auto;}
.page-hero__eyebrow{font-family:var(--font);font-size:12px;font-weight:700;color:var(--navy);letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;}
.page-hero--navy .page-hero__eyebrow{color:rgba(255,255,255,0.45);}
.page-hero__title{font-family:var(--font);font-size:clamp(40px,7vw,88px);font-weight:700;color:var(--navy);line-height:1.05;letter-spacing:-2px;margin-bottom:32px;}
.page-hero--navy .page-hero__title{color:#fff;}
.page-hero__lead{font-size:17px;line-height:1.9;color:#555;max-width:640px;}
.page-hero--navy .page-hero__lead{color:rgba(255,255,255,0.7);}
@media(max-width:768px){.page-hero{padding:120px 24px 72px;}}
/* ===== CTA Band ===== */
.cta-band{padding:100px 48px;background:var(--navy);}
.cta-band__inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;}
.cta-band p{font-family:var(--font);font-size:clamp(18px,3vw,28px);font-weight:700;color:#fff;}
@media(max-width:768px){.cta-band{padding:72px 24px;}.cta-band__inner{flex-direction:column;align-items:flex-start;}}
/* ===== Service Link Cards ===== */
.service-link-card{display:block;color:inherit;text-decoration:none;position:relative;}
.service-link-card .service-detail{transition:filter 0.2s;}
.service-link-card:hover .service-detail{filter:brightness(1.07);}
.arrow-hint{position:absolute;bottom:28px;right:36px;font-size:12px;color:rgba(255,255,255,0.4);font-family:var(--font);transition:all 0.2s;letter-spacing:1px;}
.service-link-card:hover .arrow-hint{color:rgba(255,255,255,0.9);transform:translateX(4px);}
/* ===== Service Individual ===== */
.sp-hero{padding:160px 48px 80px;background:#fff;}
.sp-hero__inner{max-width:1100px;margin:0 auto;}
.sp-back{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--navy);opacity:0.55;transition:opacity 0.2s;margin-bottom:40px;}
.sp-back:hover{opacity:1;}
.sp-hero__num{font-family:var(--font);font-size:clamp(80px,12vw,140px);font-weight:700;color:rgba(26,58,140,0.05);line-height:1;margin-bottom:-16px;}
.sp-hero__tag{font-family:var(--font);font-size:12px;font-weight:700;color:var(--navy);letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;}
.sp-hero__title{font-family:var(--font);font-size:clamp(40px,7vw,84px);font-weight:700;color:var(--navy);line-height:1.05;letter-spacing:-2px;margin-bottom:32px;}
.sp-hero__lead{font-size:18px;line-height:1.9;color:#444;max-width:640px;}
.sp-sec{padding:100px 48px;}
.sp-sec--gray{background:var(--gray);}
.sp-sec--navy{background:var(--navy);}
.sp-sec__inner{max-width:1100px;margin:0 auto;}
.sp-sec__eyebrow{font-family:var(--font);font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:20px;}
.sp-sec--navy .sp-sec__eyebrow{color:rgba(255,255,255,0.4);}
.sp-sec__title{font-family:var(--font);font-size:clamp(24px,4vw,42px);font-weight:700;color:var(--navy);line-height:1.2;margin-bottom:36px;}
.sp-sec--navy .sp-sec__title{color:#fff;}
.sp-sec__body{font-size:15px;line-height:2;color:#444;max-width:740px;}
.sp-sec__body p{margin-bottom:20px;}
.sp-sec--navy .sp-sec__body{color:rgba(255,255,255,0.72);}
.sp-trends{display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:48px;}
.sp-trend{background:#fff;padding:36px 32px;border-left:3px solid var(--navy);display:flex;gap:20px;}
.sp-trend__icon{font-size:28px;flex-shrink:0;line-height:1.2;}
.sp-trend h3{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:8px;line-height:1.4;}
.sp-trend p{font-size:13px;line-height:1.8;color:#555;}
.sp-features{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:48px;}
.sp-feature{background:rgba(255,255,255,0.07);padding:36px;border-top:1px solid rgba(255,255,255,0.1);transition:background 0.2s;}
.sp-feature:hover{background:rgba(255,255,255,0.11);}
.sp-feature__num{font-family:var(--font);font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:2px;margin-bottom:14px;}
.sp-feature h3{font-size:16px;font-weight:700;color:#fff;margin-bottom:10px;}
.sp-feature p{font-size:13px;line-height:1.8;color:rgba(255,255,255,0.62);}
@media(max-width:768px){.sp-hero{padding:120px 24px 60px;}.sp-sec{padding:72px 24px;}.sp-trends{grid-template-columns:1fr;}.sp-features{grid-template-columns:1fr;}.arrow-hint{display:none;}}
/* ===== About ===== */
.about-split{padding:100px 48px;background:#fff;}
.about-split--gray{background:var(--gray);}
.about-split__inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}
.about-block__eyebrow{font-family:var(--font);font-size:12px;font-weight:700;letter-spacing:3px;color:var(--navy);margin-bottom:20px;}
.about-block h2{font-family:var(--font);font-size:clamp(26px,4vw,42px);font-weight:700;color:var(--navy);line-height:1.2;margin-bottom:24px;}
.about-block p{font-size:15px;line-height:2;color:#444;margin-bottom:16px;}
.profile-table{width:100%;border-collapse:collapse;margin-top:32px;}
.profile-table tr{border-bottom:1px solid #e4e8f0;}
.profile-table th{padding:20px 16px 20px 0;font-size:13px;font-weight:500;color:#888;text-align:left;white-space:nowrap;width:160px;vertical-align:top;}
.profile-table td{padding:20px 0;font-size:15px;color:#222;line-height:1.7;}
.profile-table a{color:var(--navy);border-bottom:1px solid var(--navy);}
@media(max-width:768px){.about-split{padding:72px 24px;}.about-split__inner{grid-template-columns:1fr;gap:48px;}}
/* ===== Works ===== */
.works-page{padding:60px 48px 120px;}
.works-page__inner{max-width:1200px;margin:0 auto;}
.works-stats-row{display:flex;gap:64px;padding:48px 0;border-top:1px solid #e4e8f0;border-bottom:1px solid #e4e8f0;margin-bottom:64px;}
.works-stat span{font-family:var(--font);font-size:56px;font-weight:700;color:var(--navy);line-height:1;}
.works-stat small{font-size:24px;font-weight:700;color:var(--navy);}
.works-stat p{font-size:12px;color:#888;margin-top:4px;letter-spacing:1px;}
.works-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;}
.work-card{aspect-ratio:4/3;position:relative;overflow:hidden;cursor:pointer;background:var(--gray);}
.work-card--wide{grid-column:span 2;}
.work-card:nth-child(1){background:#c8d4f0;}
.work-card:nth-child(2){background:#d4ddf5;}
.work-card:nth-child(3){background:#dce5f8;}
.work-card:nth-child(4){background:#e2eaf8;}
.work-card:nth-child(5){background:#ccd4ee;}
.work-card__overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(8,18,60,0.82) 0%,transparent 60%);opacity:0;transition:opacity 0.3s;}
.work-card:hover .work-card__overlay{opacity:1;}
.work-card__body{position:absolute;bottom:0;left:0;right:0;padding:28px;transform:translateY(10px);transition:transform 0.3s;opacity:0;}
.work-card:hover .work-card__body{transform:translateY(0);opacity:1;}
.work-card__tag{font-size:11px;border:1px solid rgba(255,255,255,0.5);color:rgba(255,255,255,0.85);padding:3px 10px;border-radius:20px;display:inline-block;margin-bottom:8px;}
.work-card__title{font-family:var(--font);font-size:17px;font-weight:700;color:#fff;margin-bottom:4px;}
.work-card__client{font-size:12px;color:rgba(255,255,255,0.6);}
.work-card__num{position:absolute;bottom:16px;right:20px;font-family:var(--font);font-size:48px;font-weight:700;color:rgba(26,58,140,0.12);line-height:1;transition:opacity 0.3s;}
.work-card:hover .work-card__num{opacity:0;}
@media(max-width:768px){.works-page{padding:40px 24px 80px;}.works-grid{grid-template-columns:1fr 1fr;}.work-card--wide{grid-column:span 1;}.works-stats-row{gap:32px;}.work-card__body{opacity:1;transform:none;}.work-card__overlay{opacity:1;}}
/* ===== News ===== */
.news-page{padding:40px 48px 120px;}
.news-page__inner{max-width:1000px;margin:0 auto;}
.news-list{list-style:none;}
.news-list__item{border-bottom:1px solid #e4e8f0;}
.news-list__item a{display:grid;grid-template-columns:100px 90px 1fr 32px;align-items:center;gap:24px;padding:28px 0;transition:padding-left 0.2s;}
.news-list__item a:hover{padding-left:6px;}
.news-tag{font-size:10px;border:1px solid var(--navy);color:var(--navy);padding:3px 8px;border-radius:20px;white-space:nowrap;text-align:center;}
.news-date{font-size:12px;color:#999;}
.news-text h3{font-size:15px;font-weight:600;color:#111;margin-bottom:4px;}
.news-text p{font-size:13px;color:#666;line-height:1.6;}
.news-arr{font-size:18px;color:var(--navy);opacity:0.5;}
@media(max-width:768px){.news-page{padding:32px 24px 80px;}.news-list__item a{grid-template-columns:1fr;gap:8px;}.news-arr{display:none;}}
/* ===== Career ===== */
.career-page-values{padding:100px 48px;background:#fff;}
.career-page-values__inner{max-width:1200px;margin:0 auto;}
.values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;margin-top:48px;}
.value-card{background:var(--gray);padding:48px 36px;}
.value-card__num{font-family:var(--font);font-size:11px;color:rgba(26,58,140,0.3);letter-spacing:2px;margin-bottom:20px;}
.value-card h3{font-family:var(--font);font-size:20px;font-weight:700;color:var(--navy);margin-bottom:14px;}
.value-card p{font-size:14px;line-height:1.9;color:#555;}
.career-jobs{padding:0 48px 100px;background:#fff;}
.career-jobs__inner{max-width:1200px;margin:0 auto;}
.jobs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.job-card{border:1.5px solid #dde4f4;padding:40px 32px;display:flex;flex-direction:column;gap:16px;transition:border-color 0.2s,box-shadow 0.2s;}
.job-card:hover{border-color:var(--navy);box-shadow:0 4px 24px rgba(26,58,140,0.1);}
.job-type{font-size:11px;background:var(--navy);color:#fff;padding:4px 12px;border-radius:20px;display:inline-block;align-self:flex-start;}
.job-card h3{font-family:var(--font);font-size:17px;font-weight:700;color:var(--navy);line-height:1.35;}
.job-card p{font-size:13px;line-height:1.9;color:#555;flex:1;}
.job-tags{display:flex;flex-wrap:wrap;gap:6px;list-style:none;}
.job-tags li{font-size:11px;border:1px solid #ccd5f0;color:var(--navy);padding:3px 8px;border-radius:3px;}
@media(max-width:768px){.career-page-values{padding:72px 24px;}.values-grid{grid-template-columns:1fr;}.career-jobs{padding:0 24px 72px;}.jobs-grid{grid-template-columns:1fr;}}
/* ===== Contact ===== */
.contact-page{padding:60px 48px 120px;background:#fff;}
.contact-page__inner{max-width:800px;margin:0 auto;}
.contact-form{display:flex;flex-direction:column;gap:28px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
.form-group{display:flex;flex-direction:column;gap:8px;}
.form-group label{font-size:13px;font-weight:600;color:#333;}
.required{font-size:11px;color:#e05252;margin-left:4px;}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:14px 16px;border:1.5px solid #d4dae8;font-size:14px;font-family:var(--sans);background:#fff;transition:border-color 0.2s;outline:none;border-radius:2px;color:#111;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--navy);}
.form-group textarea{resize:vertical;min-height:160px;}
.form-submit{padding-top:8px;}
.contact-divider{border:none;border-top:1px solid #e4e8f0;margin:56px 0;}
.contact-info-row{display:flex;gap:64px;flex-wrap:wrap;}
.contact-info-item p:first-child{font-size:11px;color:#999;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;}
.contact-info-item a{font-size:16px;color:var(--navy);border-bottom:1px solid var(--navy);}
.contact-info-item p:last-child{font-size:15px;color:#333;}
@media(max-width:768px){.contact-page{padding:40px 24px 80px;}.form-row{grid-template-columns:1fr;}}
"""
existing = open('src/css/main.css').read()
marker = '/* ===== Page Hero'
if marker in existing:
    open('src/css/main.css','w').write(existing[:existing.index(marker)] + ADD_CSS)
else:
    open('src/css/main.css','a').write(ADD_CSS)
print('✓ CSS updated')

print('\n✅ 完了! npm run dev で確認してください')
print('  / → トップ')
print('  /about/ → 会社概要')
print('  /service/ → サービス一覧（クリックで詳細へ）')
print('  /service/dev/ /ai/ /line/ /sys/ → 各サービス詳細')
print('  /works/ → 実績')
print('  /news/ → ニュース')
print('  /career/ → 採用')
print('  /contact/ → お問い合わせ')
