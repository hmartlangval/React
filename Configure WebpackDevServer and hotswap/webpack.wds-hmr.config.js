const path = require('path')
const webpack = require('webpack')


module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './app.js'
    ],
    output: {
        publicPath: '/',
        filename : 'js/script.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    mode:"development", //notice this file is added as development config.. for production change it to production
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['css-loader','style-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['babel-loader']
            }
        ],
    },
    devServer: {
        writeToDisk: true,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve:{
        extensions: ['.js', '.jsx']
    }
}