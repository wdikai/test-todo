const path = require('path');
const webpack = require('webpack');

module.exports = {
    watch: true,
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js'] 
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};