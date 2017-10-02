const webpack = require('webpack')
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    publicPath: '',
    filename: 'main.js'
  },
  resolve: {
    alias: {
      // statty: path.resolve('../../code/statty/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
const compiler = webpack(webpackConfig)
const webServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}
const port = 3000

const server = new WebpackDevServer(compiler, webServerConfig)

server.listen(port)
console.info('==> 🌎 Listening on port %s', port)
