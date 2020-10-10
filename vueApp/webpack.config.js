const path = require("path")
const webpack = require("webpack")
const Htmlweb = require("html-webpack-plugin")
const VueLoader = require("vue-loader/lib/plugin")

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "/dist")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: 'url-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.ttf$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [new Htmlweb({
            template: './src/index.html',
            filename: "index.html"
        }),
        new VueLoader()
    ],
    mode: "development",
    devServer: {
        contentBase: './',
        port: 2000,
        open: true,
        host: "172.3.21.61"
    },
    // resolve: {
    //     alias: {
    //         "vue$": "vue/dist/vue.js"
    //     }
    // }
}