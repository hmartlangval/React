const path = require('path')


module.exports = {
    entry: './app.js',
    output: {
        filename : 'js/script.js',
        path: path.resolve(__dirname, 'build')
    },
    mode:"development", //notice this file is added as development config.. for production change it to production
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