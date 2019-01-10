const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,
                //exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "@babel/preset-env"
                        ],
                        plugins: [
                            ['@babel/plugin-transform-modules-commonjs', {
                                'allowTopLevelThis': true
                            }]
                        ]
                    }
                }
            },
            {
                test:/\.(scss|css)?$/,
                use:ExtractTextPlugin.extract({
                    use: [
                        {
                            loader:'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test:/\.(png|jpg|gif)$/,//图片loader
                loader: "file-loader?name=images/[hash:8].[ext]"
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|svg)$/,
                loader: "file-loader" ,
                exclude:"/node_modules/"
            }
        ],

    },
    optimization: {
        //抽取公共的dm
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendors",
                    chunks: "initial",
                    minChunks: 1
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'vue': 'vue/dist/vue.min.js'
        }
    },
}