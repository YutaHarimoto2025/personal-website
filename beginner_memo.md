cd i公開サイト
https://yutaharimoto2025.github.io/personal-website/ 

最新版を反映
git add .   特定のファイルだけupload  git add index.html
git commit -m "new"
git push origin main

git add . を実行した場合、Git に存在するがローカルにない（削除された）ファイルやフォルダ は ステージングされない ため、そのまま残ります。


コンフリ回避
git pull origin main --rebase

ローカルでテストラン
python3 -m http.server 8000
http://localhost:8000
