const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
      "assets/app": ["./src/app.tsx", "./src/app.scss"]
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "docs"),
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },
        {
          test: /\.scss$/,
          use: [
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            "sass-loader"
          ]
        },
      ]
    },
    plugins: [
      new webpack.ExtendedAPIPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/index.html',
        inject: false
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'docs/'),
      compress: true,
      port: 9000,
      open : true
    }
  }