import os
os.makedirs('src/service/dev', exist_ok=True)
os.makedirs('src/service/ai', exist_ok=True)
os.makedirs('src/service/line', exist_ok=True)
os.makedirs('src/service/sys', exist_ok=True)

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

JS = """<script type="module">
import { initNav } from '../../js/nav.js';
initNav();
document.querySelectorAll('.fade-up').forEach(function(el){
  new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.08}).observe(el);
});
</script>"""

def wrap(title, body):
    return f"""<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Provydal</title>
<link rel="stylesheet" href="../../css/main.css">
<link rel="stylesheet" href="../../css/service-detail.css">
</head>
<body>
{NAV}
<main>{body}</main>
{FOOTER}
{JS}
</body>
</html>"""

# ============================================================
# 01 受託開発 / Web制作
# ============================================================
dev = wrap("受託開発 / Web制作", """
<section class="sd-hero">
  <div class="sd-hero__inner">
    <a href="/service/" class="sd-back">← サービス一覧へ戻る</a>
    <p class="sd-num">01</p>
    <p class="sd-tag">Creative &amp; Engineering</p>
    <h1 class="sd-title">受託開発 /<br>Web制作</h1>
    <p class="sd-lead">お客様の課題を深く理解し、必要なプロダクトをゼロから設計・開発します。<br>「作って終わり」ではなく、成果につながるまで伴走します。</p>
  </div>
</section>

<section class="sd-problem">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">こんなお悩みはありませんか？</p>
    <h2 class="sd-h2 fade-up">「とりあえず作ったサイト」が<br>ビジネスの足かせになっていませんか？</h2>
    <div class="sd-problems-grid">
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">😔</div>
        <h3>問い合わせが来ない</h3>
        <p>サイトはあるのに集客できない。検索にも引っかからず、更新する気も起きない状態になっている。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">🐢</div>
        <h3>システムが古くて使いづらい</h3>
        <p>数年前に作ったシステムがスマホ非対応・動作が遅く、現場から不満の声が上がっている。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">💸</div>
        <h3>開発会社に依頼したら高額だった</h3>
        <p>見積もりを取ったら想定の3倍の金額。何にそんなにかかるのか説明もなく不信感がある。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">🔧</div>
        <h3>納品後に修正が効かない</h3>
        <p>開発会社に修正を頼むたびに追加費用が発生。自分たちで更新できる仕組みになっていない。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-solution">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">Provydalのアプローチ</p>
    <h2 class="sd-h2 fade-up">課題の根本から解決する、<br>伴走型の開発プロセス</h2>
    <p class="sd-body fade-up">私たちは「何を作るか」より「何を解決するか」を先に考えます。お客様のビジネス課題をヒアリングし、本当に必要なプロダクトを一緒に設計します。</p>
    <div class="sd-steps">
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 01</div>
        <h3>課題のヒアリング・要件定義</h3>
        <p>「なぜそれが必要か」「誰が使うのか」「どんな成果を期待するか」を徹底的にヒアリング。表面的な要望の奥にある本質的な課題を一緒に明らかにします。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 02</div>
        <h3>UI/UXデザイン</h3>
        <p>ユーザーが直感的に使えるデザインを設計。見た目の美しさだけでなく、「使いやすさ」「伝わりやすさ」「コンバージョン」を意識したデザインを提供します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 03</div>
        <h3>開発・実装</h3>
        <p>React / Next.js / Node.js を中心に、要件に応じた最適な技術スタックで開発。保守性・拡張性を考慮したコードで、将来の変化にも対応しやすい設計にします。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 04</div>
        <h3>納品・運用サポート</h3>
        <p>納品で終わりではありません。公開後の数値モニタリング・改善提案・機能追加・障害対応まで、長期パートナーとして伴走します。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-scope">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">対応範囲</p>
    <h2 class="sd-h2 fade-up">こんなものを作れます</h2>
    <div class="sd-scope-grid">
      <div class="sd-scope-item fade-up"><span>01</span><h3>コーポレートサイト</h3><p>会社の顔となるサイトをブランドイメージに合わせてゼロから設計・制作。採用・集客・信頼獲得につながるサイトを作ります。</p></div>
      <div class="sd-scope-item fade-up"><span>02</span><h3>Webアプリケーション</h3><p>予約システム・マッチングサービス・会員制サービスなど、複雑なロジックを持つWebアプリをフルスクラッチで開発します。</p></div>
      <div class="sd-scope-item fade-up"><span>03</span><h3>ランディングページ（LP）</h3><p>商品・サービスの訴求に特化したLP。デザイン・コピーライティング・計測設定まで一貫して対応します。</p></div>
      <div class="sd-scope-item fade-up"><span>04</span><h3>管理画面・ダッシュボード</h3><p>自社サービスや業務を管理するための管理画面を開発。使いやすさと機能性を両立した設計を行います。</p></div>
    </div>
  </div>
</section>

<section class="sd-cta">
  <div class="sd-cta__inner">
    <h2 class="fade-up">まずは課題をお聞かせください</h2>
    <p class="fade-up">「こんなものを作りたい」「今のサイトをどうにかしたい」<br>どんな段階でも構いません。お気軽にご相談ください。</p>
    <a href="/contact/" class="btn-fill fade-up">無料相談はこちら<span>Contact Us</span></a>
  </div>
</section>
""")

with open('src/service/dev/index.html', 'w') as f:
    f.write(dev)
print('✓ service/dev/index.html')

# ============================================================
# 02 AI導入支援
# ============================================================
ai = wrap("AI導入支援", """
<section class="sd-hero">
  <div class="sd-hero__inner">
    <a href="/service/" class="sd-back">← サービス一覧へ戻る</a>
    <p class="sd-num">02</p>
    <p class="sd-tag">AI Integration</p>
    <h1 class="sd-title">AI導入支援</h1>
    <p class="sd-lead">「AIを使いたいが何から始めればいいかわからない」という企業に寄り添い、<br>業務に本当に使えるAI活用を一緒に設計・実装します。</p>
  </div>
</section>

<section class="sd-problem">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">こんなお悩みはありませんか？</p>
    <h2 class="sd-h2 fade-up">「AIを使ってみた」で終わっていませんか？</h2>
    <div class="sd-problems-grid">
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">🤔</div>
        <h3>何から始めればいいかわからない</h3>
        <p>ChatGPTは触ったことがあるが、自社のどの業務に・どう使えば成果が出るのかが見えない。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">📉</div>
        <h3>導入したが定着しない</h3>
        <p>ツールを導入したが現場で使われなかった。結局元の業務フローに戻ってしまっている。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">🔒</div>
        <h3>セキュリティや情報漏洩が心配</h3>
        <p>社内情報をAIに入力していいのか不安。どのツールをどう使えば安全なのかわからない。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">👴</div>
        <h3>社員がAIに慣れていない</h3>
        <p>経営層は導入したいが、現場社員のリテラシーが低く浸透させる自信がない。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-solution">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">Provydalのアプローチ</p>
    <h2 class="sd-h2 fade-up">「使えるAI」になるまで、<br>すべての工程を伴走します</h2>
    <p class="sd-body fade-up">AIツールを入れることがゴールではありません。業務が変わり、成果が出ることがゴール。Provydalは技術と業務の両面から、実際に使えるAI活用を一緒に作ります。</p>
    <div class="sd-steps">
      <div class="sd-step fade-up">
        <div class="sd-step__num">PHASE 01</div>
        <h3>業務分析・活用設計</h3>
        <p>現状の業務フローをヒアリングし、AIで代替・効率化できる箇所を特定。「どこに使えば費用対効果が高いか」を優先順位づけして導入ロードマップを作成します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">PHASE 02</div>
        <h3>PoC（概念実証）・プロトタイプ開発</h3>
        <p>まず小さく試す。ChatGPT APIやLangChainを使ったプロトタイプを素早く構築し、実際の業務で効果があるかを検証。失敗コストを最小化します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">PHASE 03</div>
        <h3>システム構築・既存ツール連携</h3>
        <p>検証結果をもとに実業務に組み込める形でシステム化。Slack・Notion・Google Workspace・社内DBなど既存ツールとの連携も対応します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">PHASE 04</div>
        <h3>社内研修・展開・定着支援</h3>
        <p>「使わない」で終わらないよう、社内研修・利用マニュアル作成・定着フォローまで一気通貫で支援。現場が自走できる状態になるまで寄り添います。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-scope">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">支援メニュー</p>
    <h2 class="sd-h2 fade-up">こんな活用が実現できます</h2>
    <div class="sd-scope-grid">
      <div class="sd-scope-item fade-up"><span>01</span><h3>議事録・報告書の自動生成</h3><p>会議の音声や要点メモから、構造化された議事録を自動生成。報告書フォーマットへの変換も自動化します。</p></div>
      <div class="sd-scope-item fade-up"><span>02</span><h3>社内FAQチャットボット</h3><p>社内規定・マニュアル・よくある質問をAIに学習させた社内専用チャットボットを構築。問い合わせ対応工数を大幅削減します。</p></div>
      <div class="sd-scope-item fade-up"><span>03</span><h3>営業支援AI</h3><p>顧客情報・商談履歴を元に提案書の下書き生成・メール文章の自動作成・次のアクション提案を行うAIツールを構築します。</p></div>
      <div class="sd-scope-item fade-up"><span>04</span><h3>AIリテラシー研修</h3><p>経営層から現場社員まで、役職・業務に応じたAI活用研修を設計・実施。座学だけでなく実業務への応用ワークも含みます。</p></div>
    </div>
  </div>
</section>

<section class="sd-cta">
  <div class="sd-cta__inner">
    <h2 class="fade-up">「AIどこから始めればいい？」<br>その相談から始まります</h2>
    <p class="fade-up">課題が整理できていなくても大丈夫です。<br>まずは現状をお聞かせください。一緒に整理します。</p>
    <a href="/contact/" class="btn-fill fade-up">無料相談はこちら<span>Contact Us</span></a>
  </div>
</section>
""")

with open('src/service/ai/index.html', 'w') as f:
    f.write(ai)
print('✓ service/ai/index.html')

# ============================================================
# 03 LINE連携 / 業務自動化
# ============================================================
line = wrap("LINE連携 / 業務自動化", """
<section class="sd-hero">
  <div class="sd-hero__inner">
    <a href="/service/" class="sd-back">← サービス一覧へ戻る</a>
    <p class="sd-num">03</p>
    <p class="sd-tag">LINE &amp; Automation</p>
    <h1 class="sd-title">LINE連携 /<br>業務自動化</h1>
    <p class="sd-lead">毎日繰り返している定型業務を、仕組みで自動化します。<br>LINEを起点に、顧客対応・社内通知・予約管理を自動で回す仕組みを作ります。</p>
  </div>
</section>

<section class="sd-problem">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">こんなお悩みはありませんか？</p>
    <h2 class="sd-h2 fade-up">「人手でやっている繰り返し作業」が<br>スタッフの時間を奪っていませんか？</h2>
    <div class="sd-problems-grid">
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">📞</div>
        <h3>同じ問い合わせが毎日来る</h3>
        <p>「営業時間は？」「料金はいくら？」など同じ質問に毎日手動で返信している。休日でも対応が求められる。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">📅</div>
        <h3>予約管理が手作業で大変</h3>
        <p>予約の受付・確認・リマインドをすべて手作業。ダブルブッキングや連絡漏れが起きている。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">📧</div>
        <h3>メールを誰も読まない</h3>
        <p>お客様へのお知らせをメールで送っているが開封率が低く、重要な情報が届いていない。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">📊</div>
        <h3>社内共有が口頭・チャットで煩雑</h3>
        <p>売上・在庫・勤怠などの報告が各所に散らばっていて集約に時間がかかっている。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-solution">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">Provydalのアプローチ</p>
    <h2 class="sd-h2 fade-up">LINEを「ビジネスの自動化エンジン」に変える</h2>
    <p class="sd-body fade-up">LINEは国内9,700万人が使うプラットフォームで、開封率はメールの3倍以上。このインフラを活用しながら、バックエンドで自動処理を走らせることで少人数でも回る業務フローを構築します。</p>
    <div class="sd-steps">
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 01</div>
        <h3>業務フローのヒアリング・整理</h3>
        <p>現在の業務フローを可視化し、「自動化できること」「人が判断すべきこと」を仕分け。自動化によって生まれる時間とコストを試算します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 02</div>
        <h3>LINE公式アカウント設計・構築</h3>
        <p>単なる自動返信ではなく、顧客体験を損なわない自然な対話フローを設計。問い合わせ内容の自動振り分け・FAQ対応・エスカレーションフローを構築します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 03</div>
        <h3>バックエンド・他システム連携</h3>
        <p>LINEの入力をトリガーに、CRM・スプレッドシート・予約システム・社内DBを自動更新。情報が一か所に集まる仕組みを作ります。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 04</div>
        <h3>運用・改善サポート</h3>
        <p>公開後の対応率・自動化率・顧客満足度をモニタリングし、継続的に改善。ビジネスの変化に合わせてフローを更新します。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-scope">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">自動化できること</p>
    <h2 class="sd-h2 fade-up">こんな業務を自動化できます</h2>
    <div class="sd-scope-grid">
      <div class="sd-scope-item fade-up"><span>01</span><h3>問い合わせ自動対応</h3><p>よくある質問への24時間自動回答。営業時間外でも顧客を待たせません。問い合わせ内容に応じて担当者への転送も自動化します。</p></div>
      <div class="sd-scope-item fade-up"><span>02</span><h3>予約・リマインド自動化</h3><p>LINEで予約受付→確認→前日リマインド→アンケート送付まで全自動。スタッフの手を一切介さずに完結します。</p></div>
      <div class="sd-scope-item fade-up"><span>03</span><h3>社内通知・日報自動化</h3><p>売上・在庫・勤怠などをLINEグループに自動送信。朝のミーティングで確認していたことをLINEで完結させます。</p></div>
      <div class="sd-scope-item fade-up"><span>04</span><h3>顧客フォローアップ</h3><p>購入・来店後の一定期間後に自動でフォローメッセージを送信。リピート率向上・口コミ促進につなげます。</p></div>
    </div>
  </div>
</section>

<section class="sd-cta">
  <div class="sd-cta__inner">
    <h2 class="fade-up">まずは自動化できる業務を<br>一緒に整理しましょう</h2>
    <p class="fade-up">「これ自動化できますか？」という相談から始まります。<br>現状の業務フローを教えていただければ、すぐに整理します。</p>
    <a href="/contact/" class="btn-fill fade-up">無料相談はこちら<span>Contact Us</span></a>
  </div>
</section>
""")

with open('src/service/line/index.html', 'w') as f:
    f.write(line)
print('✓ service/line/index.html')

# ============================================================
# 04 業務システム開発
# ============================================================
sys_page = wrap("業務システム開発", """
<section class="sd-hero">
  <div class="sd-hero__inner">
    <a href="/service/" class="sd-back">← サービス一覧へ戻る</a>
    <p class="sd-num">04</p>
    <p class="sd-tag">Business System</p>
    <h1 class="sd-title">業務システム開発</h1>
    <p class="sd-lead">「既製品では自社の業務に合わない」という課題を、<br>カスタム開発で根本から解決します。現場に馴染み、長く使えるシステムを届けます。</p>
  </div>
</section>

<section class="sd-problem">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">こんなお悩みはありませんか？</p>
    <h2 class="sd-h2 fade-up">「既製ツールに業務を合わせる」という<br>本末転倒が起きていませんか？</h2>
    <div class="sd-problems-grid">
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">🔧</div>
        <h3>SaaSツールが業務に合わない</h3>
        <p>複数のSaaSを組み合わせているが、自社の業務フローに完全には合わず、無駄な手作業が残っている。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">💰</div>
        <h3>SaaSの費用が膨らんでいる</h3>
        <p>使っているツールの月額が積み上がって毎月かなりの支出に。しかも全機能を使いこなせていない。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">📱</div>
        <h3>スマホで使えない・遅い</h3>
        <p>現場スタッフがスマホで確認したいのに対応していない。動作が遅くてストレスになっている。</p>
      </div>
      <div class="sd-problem-card fade-up">
        <div class="sd-problem-card__icon">🏝</div>
        <h3>データがバラバラに存在する</h3>
        <p>顧客情報・売上・在庫が別々のツールに入っていて、集計や分析のたびに手作業でまとめている。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-solution">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">Provydalのアプローチ</p>
    <h2 class="sd-h2 fade-up">「使われるシステム」を<br>現場の声から設計する</h2>
    <p class="sd-body fade-up">どんなに高機能でも使われないシステムには意味がありません。現場の声を丁寧にヒアリングし、実際に使われ続けるシステムを設計します。UIの使いやすさ・処理速度・将来の拡張性まで考慮した開発を行います。</p>
    <div class="sd-steps">
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 01</div>
        <h3>現状業務のヒアリング・課題整理</h3>
        <p>現場担当者・管理者・経営者それぞれの視点からヒアリング。「誰が・何を・どう使うか」を明確にし、本当に必要な機能だけを選定します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 02</div>
        <h3>システム設計・プロトタイプ</h3>
        <p>まず画面イメージを作り、実際に使う人に確認してもらいます。開発前に「使いやすいか」を検証することで、完成後の手戻りを防ぎます。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 03</div>
        <h3>開発・テスト・既存システム連携</h3>
        <p>モバイル対応・高速レスポンス・セキュリティを担保した開発を行います。既存のExcel・会計ソフト・ECサイトとのAPI連携も対応します。</p>
      </div>
      <div class="sd-step fade-up">
        <div class="sd-step__num">STEP 04</div>
        <h3>導入支援・運用保守</h3>
        <p>現場スタッフへの操作説明・マニュアル作成から始まり、運用後の改善要望・障害対応・機能追加まで長期的にサポートします。</p>
      </div>
    </div>
  </div>
</section>

<section class="sd-scope">
  <div class="sd-section__inner">
    <p class="sd-eyebrow fade-up">対応システム例</p>
    <h2 class="sd-h2 fade-up">こんなシステムを開発できます</h2>
    <div class="sd-scope-grid">
      <div class="sd-scope-item fade-up"><span>01</span><h3>管理画面・ダッシュボード</h3><p>案件管理・顧客管理・在庫管理・売上分析など、業務に必要な情報を一元管理。現場が毎日使いたくなる管理画面を作ります。</p></div>
      <div class="sd-scope-item fade-up"><span>02</span><h3>予約・スケジュール管理</h3><p>飲食・美容・医療・教室など業種特有の予約フローに完全対応。LINE連携・リマインド通知・カレンダー同期も実装します。</p></div>
      <div class="sd-scope-item fade-up"><span>03</span><h3>社内ポータル・ワークフロー</h3><p>申請・承認フロー・マニュアル管理・社内掲示板など、社内の情報をワンストップで管理できるポータルシステムを構築します。</p></div>
      <div class="sd-scope-item fade-up"><span>04</span><h3>既存システムのリプレイス</h3><p>「使いにくい」「スマホ非対応」「遅い」既存システムのモダン化。データ移行からUI刷新まで一気通貫で対応します。</p></div>
    </div>
  </div>
</section>

<section class="sd-cta">
  <div class="sd-cta__inner">
    <h2 class="fade-up">「こんなシステムが欲しい」<br>その一言から始まります</h2>
    <p class="fade-up">要件が固まっていなくても大丈夫です。<br>現状の業務課題をお話しいただければ、一緒に整理します。</p>
    <a href="/contact/" class="btn-fill fade-up">無料相談はこちら<span>Contact Us</span></a>
  </div>
</section>
""")

with open('src/service/sys/index.html', 'w') as f:
    f.write(sys_page)
print('✓ service/sys/index.html')

# ============================================================
# service-detail.css
# ============================================================
css = """
/* ===== Service Detail Pages ===== */
.sd-hero {
  padding: 160px 48px 100px;
  background: var(--navy);
  position: relative;
  overflow: hidden;
}
.sd-hero::after {
  content: '';
  position: absolute;
  top: -40%;
  right: -10%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(255,255,255,0.03);
  pointer-events: none;
}
.sd-hero__inner {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.sd-back {
  display: inline-block;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 40px;
  transition: color 0.2s;
}
.sd-back:hover { color: #fff; }
.sd-num {
  font-family: var(--font);
  font-size: clamp(100px, 15vw, 180px);
  font-weight: 700;
  color: rgba(255,255,255,0.04);
  line-height: 1;
  margin-bottom: -20px;
}
.sd-tag {
  font-family: var(--font);
  font-size: 12px;
  font-weight: 700;
  color: rgba(255,255,255,0.45);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.sd-title {
  font-family: var(--font);
  font-size: clamp(40px, 7vw, 80px);
  font-weight: 700;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -2px;
  margin-bottom: 32px;
}
.sd-lead {
  font-size: 18px;
  line-height: 1.9;
  color: rgba(255,255,255,0.72);
  max-width: 660px;
}

/* ── Problem Section ── */
.sd-problem {
  padding: 120px 48px;
  background: var(--white);
}
.sd-section__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.sd-eyebrow {
  font-family: var(--font);
  font-size: 12px;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.sd-h2 {
  font-family: var(--font);
  font-size: clamp(26px, 4vw, 44px);
  font-weight: 700;
  color: var(--navy);
  line-height: 1.2;
  margin-bottom: 56px;
}
.sd-problems-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}
.sd-problem-card {
  background: var(--gray);
  padding: 40px 36px;
  transition: background 0.2s;
}
.sd-problem-card:hover { background: #e4eaf8; }
.sd-problem-card__icon {
  font-size: 32px;
  margin-bottom: 16px;
  line-height: 1;
}
.sd-problem-card h3 {
  font-family: var(--font);
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
  line-height: 1.3;
}
.sd-problem-card p {
  font-size: 14px;
  line-height: 1.85;
  color: #555;
}

/* ── Solution Section ── */
.sd-solution {
  padding: 120px 48px;
  background: var(--navy);
}
.sd-solution .sd-eyebrow { color: rgba(255,255,255,0.4); }
.sd-solution .sd-h2 { color: #fff; }
.sd-body {
  font-size: 16px;
  line-height: 2;
  color: rgba(255,255,255,0.7);
  max-width: 760px;
  margin-bottom: 60px;
}
.sd-steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}
.sd-step {
  background: rgba(255,255,255,0.07);
  padding: 40px 36px;
  border-top: 1px solid rgba(255,255,255,0.1);
  transition: background 0.2s;
}
.sd-step:hover { background: rgba(255,255,255,0.11); }
.sd-step__num {
  font-family: var(--font);
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  letter-spacing: 2px;
  margin-bottom: 16px;
}
.sd-step h3 {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.3;
}
.sd-step p {
  font-size: 13px;
  line-height: 1.9;
  color: rgba(255,255,255,0.62);
}

/* ── Scope Section ── */
.sd-scope {
  padding: 120px 48px;
  background: var(--gray);
}
.sd-scope-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.sd-scope-item {
  background: var(--white);
  padding: 40px 36px;
  border-bottom: 3px solid var(--navy);
  transition: transform 0.2s, box-shadow 0.2s;
}
.sd-scope-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(26,58,140,0.1);
}
.sd-scope-item span {
  font-family: var(--font);
  font-size: 11px;
  color: rgba(26,58,140,0.3);
  letter-spacing: 2px;
  display: block;
  margin-bottom: 16px;
}
.sd-scope-item h3 {
  font-family: var(--font);
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
  line-height: 1.3;
}
.sd-scope-item p {
  font-size: 14px;
  line-height: 1.85;
  color: #555;
}

/* ── CTA Section ── */
.sd-cta {
  padding: 160px 48px;
  background: var(--white);
  text-align: center;
}
.sd-cta__inner {
  max-width: 700px;
  margin: 0 auto;
}
.sd-cta h2 {
  font-family: var(--font);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: var(--navy);
  line-height: 1.2;
  margin-bottom: 24px;
}
.sd-cta p {
  font-size: 16px;
  line-height: 1.9;
  color: #555;
  margin-bottom: 48px;
}
.sd-cta .btn-fill {
  align-items: center;
  margin: 0 auto;
}

/* ── Responsive ── */
@media(max-width:768px) {
  .sd-hero { padding: 120px 24px 72px; }
  .sd-problem, .sd-solution, .sd-scope { padding: 80px 24px; }
  .sd-cta { padding: 100px 24px; }
  .sd-problems-grid, .sd-steps, .sd-scope-grid { grid-template-columns: 1fr; }
  .sd-num { font-size: 80px; }
}
"""

with open('src/css/service-detail.css', 'w') as f:
    f.write(css)
print('✓ css/service-detail.css')

# update service/index.html links
svc_path = 'src/service/index.html'
if os.path.exists(svc_path):
    html = open(svc_path).read()
    if 'service-link-card' not in html and 'href="/service/dev/"' not in html:
        html = html.replace(
            '<div class="service-detail__inner">\n    <div class="service-detail__label">01</div>',
            '<a href="/service/dev/" style="display:block;text-decoration:none;color:inherit;"><div class="service-detail__inner">\n    <div class="service-detail__label">01</div>'
        )
    open(svc_path, 'w').write(html)

print('\n✅ 完了！ npm run dev で確認してください')
print('  /service/dev/  → 受託開発 / Web制作 詳細ページ')
print('  /service/ai/   → AI導入支援 詳細ページ')
print('  /service/line/ → LINE連携 / 業務自動化 詳細ページ')
print('  /service/sys/  → 業務システム開発 詳細ページ')
