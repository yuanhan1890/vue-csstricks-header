const path = require('path')

module.exports = {
    entry: './docs/main.js',
    output: {
        filename: 'bundle.js',
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
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
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