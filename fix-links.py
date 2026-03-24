import re

# index.html の service セクションのリンクを直接詳細ページに変更
txt = open('src/index.html').read()

# service セクションのリンクを差し替え
txt = txt.replace('href="/service/"', 'href="/service/dev/"', 1)  # 最初の1つ目

# service セクション全体を書き直す
old = txt[txt.find('<section class="service"'):txt.find('</section>', txt.find('<section class="service"'))+10]

new_service = '''<section class="service" id="service">
      <div class="service__head">
        <div class="section-label">Service</div>
        <h2 class="service__title">事業内容</h2>
        <p class="service__sub">テック、デザイン、ビジネスの<br>専門チームによる事業共創</p>
      </div>
      <div class="service__list">
        <a href="/service/dev/" class="service__item" style="text-decoration:none;color:inherit;display:block;cursor:pointer;">
          <div class="service__item-num">01</div>
          <h3>受託開発 / Web制作</h3>
          <p>コーポレートサイトからWebアプリ・管理画面まで。要件定義から納品・運用まで一貫して対応します。</p>
          <span style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:16px;display:block;font-family:Georgia,serif;letter-spacing:1px;">詳細を見る →</span>
        </a>
        <a href="/service/ai/" class="service__item" style="text-decoration:none;color:inherit;display:block;cursor:pointer;">
          <div class="service__item-num">02</div>
          <h3>AI導入支援</h3>
          <p>ChatGPTをはじめとする生成AIの業務活用を支援。PoC設計から社内展開まで伴走します。</p>
          <span style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:16px;display:block;font-family:Georgia,serif;letter-spacing:1px;">詳細を見る →</span>
        </a>
        <a href="/service/line/" class="service__item" style="text-decoration:none;color:inherit;display:block;cursor:pointer;">
          <div class="service__item-num">03</div>
          <h3>LINE連携 / 業務自動化</h3>
          <p>LINE公式アカウントを活用した問い合わせ自動化・顧客対応効率化・社内通知システムを構築します。</p>
          <span style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:16px;display:block;font-family:Georgia,serif;letter-spacing:1px;">詳細を見る →</span>
        </a>
        <a href="/service/sys/" class="service__item" style="text-decoration:none;color:inherit;display:block;cursor:pointer;">
          <div class="service__item-num">04</div>
          <h3>業務システム開発</h3>
          <p>管理画面・予約システム・社内ツールなど、現場の課題に合わせたカスタム業務システムを開発します。</p>
          <span style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:16px;display:block;font-family:Georgia,serif;letter-spacing:1px;">詳細を見る →</span>
        </a>
      </div>
    </section>'''

# service セクションを差し替え
start = txt.find('<section class="service"')
end = txt.find('</section>', start) + 10
txt = txt[:start] + new_service + txt[end:]

open('src/index.html', 'w').write(txt)
print('✓ index.html のサービスカード → 詳細ページに直リンク化')

# service__item のhoverスタイルを追加
css = open('src/css/main.css').read()
if 'service__item:hover' not in css:
    css += """
.service__item { transition: background 0.2s, opacity 0.2s; }
.service__item:hover { background: rgba(255,255,255,0.12) !important; }
.service__item:hover span { color: rgba(255,255,255,0.9) !important; }
"""
    open('src/css/main.css', 'w').write(css)
    print('✓ ホバースタイル追加')

print('\n✅ 完了！')
print('トップページの01〜04カードが各詳細ページに直接リンクされました')
