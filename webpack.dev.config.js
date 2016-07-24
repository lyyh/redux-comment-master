var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/entry/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
        {
                test: /\.css$/, 
                loader: "style!css", 
            },
            {
                test: /\.jsx?$/, 
                loader: "babel", 
                exclude: /node_modules/, 
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.less$/,
              loader: 'style!css!less'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000
                }
            }
    ]
  }
}

