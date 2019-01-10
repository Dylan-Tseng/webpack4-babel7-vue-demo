const webpack =  require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const path = require("path");
module.exports = merge(baseWebpackConfig,{
    mode:"development",
    entry:{
        bundle:["babel-polyfill","./src/index"]
    },
    devServer:{
        compress:false,
        disableHostCheck: true,
        port:8080
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
         new ExtractTextPlugin("styles.css"),
         new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
});
