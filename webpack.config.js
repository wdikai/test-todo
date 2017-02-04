const path = require('path');
const webpack = require('webpack');

module.exports = {
    watch: true,
    entry: './src/app.jsx',
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
    },
    plugins: [
        new webpack
            .optimize
            .DedupePlugin(),
        new webpack
            .optimize
            .UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
        new webpack.HotModuleReplacementPlugin()
    ]
};