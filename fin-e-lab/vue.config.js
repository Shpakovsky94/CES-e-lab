const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
      devServer: {
          host: 'ces-fin',
          port: '8888'
      }
  },
  "transpileDependencies": [
  ]
}