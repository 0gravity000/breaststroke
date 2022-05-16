const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'../backend/dist', // npm run build 時のファイルの出力先ルート
  assetsDir: 'static', //staticフォルダ名を指定(js、css、imgフォルダをひとくくりにする）
  devServer: {
    port: 8080,
    // localhostでvueからflaskにAPIリクエストを送信する為の設定
    proxy: 'http://localhost:5000'
  },
})
