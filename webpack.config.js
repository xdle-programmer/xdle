const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let getFiles = function (dir, files_, extension) {
    files_ = files_ || [];
    let files = fs.readdirSync(dir);
    let regular = new RegExp('.\\.' + extension + '$');

    for (let i in files) {

        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_, extension);
        } else if (regular.test(name)) {
            files_.push(name);
        }
    }
    return files_;
};

const PATHS = {
    src: path.resolve(__dirname, './src'),
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));


// Js файлы
let jsEntryArray = [path.resolve(__dirname, './src/index.js')];
getFiles(path.resolve(__dirname, './src/blocks'), jsEntryArray, 'js');

// Файлы стилей
let styleEntryArray = [];
getFiles(path.resolve(__dirname, './src/blocks'), styleEntryArray, 'scss');
getFiles(path.resolve(__dirname, './src/blocks'), styleEntryArray, 'css');

module.exports = {
    mode: 'development',
    entry: {
        main: jsEntryArray,
        style: styleEntryArray,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {pretty: true}
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            minify: false,
            filename: `./${page.replace(/\.pug/, '.html')}`,
        }))
    ],
    externals: {
        jquery: 'jQuery'
    },
    devServer: {
        overlay: true,
    }
};