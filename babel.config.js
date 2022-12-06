module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 按需引入elementui
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
