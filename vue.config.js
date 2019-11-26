// vue.config.js
module.exports = {
  /* config.module.rule('images').use('url-loader') */
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        return {
          loader: 'url-loader',
          options: {
            limit: 999999999,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]'
              }
            }
          }
        }
      })
  }
}