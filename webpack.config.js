const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/app.tsx",
    output: {
      filename: "app.js",
      path: __dirname + "/docs/js",
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'docs/'),
      compress: true,
      port: 9000,
      open : true
    }
  }