const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { networkInterfaces } = require("os");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   },
                   {
                       loader: "sass-loader"
                   }
               ]
           },
           {
                test: /\.(png|webp|JPG|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    },
                ],
            },
           {
               test: /\.html$/,
               use: ['html-loader']
           },
           {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader'],
           },
        //    {
        //         test: /\.html$/,
        //         use: [
        //             {
        //                 loader: 'file-loader',
        //                 options:{
        //                     name: '[name].[ext]',
        //                 }
        //             },
        //         ],
        //         exclude: path.resolve(__dirname, './src/index.html')
        //     },
       ]
   },
   plugins: [
       new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
       }),
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
    //    new HtmlWebpackPlugin({
    //        template: "./src/portfolio.html",
    //        filename: "portfolio.html",
    //        chunks: []
    //    }),
    //    new HtmlWebpackPlugin({
    //        template: "./src/skills.html",
    //        filename: "skills.html",
    //        chunks: []
    //    })
   ],
}