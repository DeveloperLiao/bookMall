const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint检测
  lintOnSave: false,
  configureWebpack: {
    //全局支持jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
})
