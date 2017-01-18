const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: './docs/main.js',
        vendor: ['vue']
    },
    output: {
        filename: '[name].js',
        path: 'docs/dist',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract([{
                    loader: ['css-loader!less-loader']
                }])
            }
        ]
    },
    plugins: [    
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.js"}),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './docs'),
        port: 3000
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    }
}