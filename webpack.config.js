const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;

const plugins = env !== 'dev'
    ? [new UglifyJSPlugin()]
    : [];

module.exports = {
    watch: env === 'dev',
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
    plugins: [...plugins]
};