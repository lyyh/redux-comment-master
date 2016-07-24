 //打包配置
 var path = require('path')
 var webpack = require('webpack')
 var ExtractTextPlugin = require('extract-text-webpack-plugin')

 var config = {
    entry: {
        index: ["./app/entry/index"],
    },

   output: {
      path:path.join(__dirname, "dist"),
      filename: '[name].min.js',
   },
   resolve: {
     extensions: ['', '.js', '.jsx'],
   },
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
              loader: ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000
                }
            }
      ]
   },

   plugins: [
        new ExtractTextPlugin("./style.css"),
        new webpack.optimize.CommonsChunkPlugin('commons.min.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
            warnings: false
        }
     })
   ]
}

module.exports = config;