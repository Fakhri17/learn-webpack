const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// default path /src 
// default output path /dist

module.exports = {
 // entry: { index: path.resolve(__dirname, "source", "index.js") } <= for entry point src to source name, path dist

 // output: {
 //   path: path.resolve(__dirname, "build") <= path src to output path build
 // }
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"] // if css loader first loader invalid
      // },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};
  