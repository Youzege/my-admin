const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// 代理
const devProxy = ['/api']
// 地址
const target = process.env.BASE_URL
// 代理对象
const proxyObject = {}
devProxy.forEach((value, index) => {
  proxyObject[value] = {
    target: target,
    changeOrigin: true,
    pathRewrite: {
      [`^${value}`]: value
    }
  }
})

// https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
module.exports = {
  devServer: {
    // 配置反向代理
    proxy: proxyObject
  },
  chainWebpack(config) {
    // 消除警告i18n
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
