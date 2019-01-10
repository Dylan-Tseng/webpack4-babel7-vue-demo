const webpack =  require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");//css文件打包
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base')
module.exports = merge(baseWebpackConfig,{
    mode:"production",
    entry:{
        bundle:["babel-polyfill","./src/index"]
    },
    output: {
        path: __dirname + '/../dist/assets/',//
        filename: "[name].js",//除核心库之外的logic代码会打包进bundle.js
        publicPath: 'assets/'//相对于服务器的根目录路径
    },
    optimization:{
        minimize:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin("styles.css"),
        new VueLoaderPlugin()
    ],
});