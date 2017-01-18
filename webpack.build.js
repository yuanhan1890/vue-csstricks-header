const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'csstricks-header.js',
        path: 'dist',
        library: 'CsstricksHeader',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.BannerPlugin(
`/*!
* Vue Csstricks Header
* Made by Yuan Han
*/`)
    ]
}