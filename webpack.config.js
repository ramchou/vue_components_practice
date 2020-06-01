const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')



module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/public'),
                to: path.resolve(__dirname, 'dist'),
                ignore: ['index.html']
            }
        ])
    ],
    mode: "development",

    devServer: {
        port: 8080,
        open: true,
        quiet: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:4000',
        //         pathRewrite: { '^/api': '' },
        //         changeOrigin: true
        //     }
        // }
    },

    devtool: "cheap-module-eval-source-map",

    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};