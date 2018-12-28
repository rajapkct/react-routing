const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router-dom'
]
var BUILD_DIR = path.join(__dirname, 'dist')
var APP_DIR = path.join(__dirname, 'src');


var config = {
    entry: {
        bundle: APP_DIR + '/app.tsx',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(css)$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/Index.html' })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                },
            },
        },
    }
}
module.exports = config;