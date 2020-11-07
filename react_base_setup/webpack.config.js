
const path = require("path");

module.exports = {
    "entry": './src/app.js',
    "output": {
        filename: 'script.js',
        path: path.resolve(__dirname, "build/js/") 
    },
    module:{        
        rules:[
            {
                test: /\.js$|.jsx$/, 
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-react', '@babel/preset-env'],
                    //     plugins: ['transform-class-properties']
                    // }
                },
                exclude: path.resolve(__dirname, './node_modules')
            } 
        ]
    },
    resolve: {
        extensions: [".js", '.jsx']
    }
}