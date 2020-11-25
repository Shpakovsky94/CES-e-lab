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
    ]
  },
  "transpileDependencies": [
  ],
  // devServer: {
  //   host: 'ces-fin',
  //   disableHostCheck: true

  // }
  
}