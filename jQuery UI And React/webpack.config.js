const path = require('path')


module.exports = {
    entry: './app.js',
    output: {
        filename : 'js/script.js',
        path: path.resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader: 'babel-loader',
                    //presets -- defind in package instead
                    //plugins
                },
                exclude: path.resolve(__dirname, 'node_modules')

            }
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx']
    }
}