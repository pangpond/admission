const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/register': { page: '/register' },
    }
  },

  // webpack(cfg) {
  //   cfg.plugins = cfg.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')

  //   cfg.plugins.push(new Uglify({
  //     parallel: true,
  //     sourceMap: true,
  //   }))
  //   return cfg
  // },
}
