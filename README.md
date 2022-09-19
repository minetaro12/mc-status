# mc-status

Minecraftサーバーにクエリを叩くWebAPI

## 使い方
```
#依存関係のインストール
$ yarn install

#ビルド
$ yarn build

#起動
$ yarn start
$ PORT=9999 yarn start

$ curl http://localhost:8000/example.com
$ curl http://localhost:8000/example.com:25565
```

## Docker
```
$ docker compose build

$ docker compose up -d
```