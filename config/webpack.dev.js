const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/",
  },
  devServer: {
    overlay: true,
    contentBase: "dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.html$/,
        use: [
          { loader: "file-loader", options: { name: "[name].html" } },
          { loader: "extract-loader" },
          { loader: "html-loader", options: { attrs: ["img:src"] } },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.jpg$/,
        use: [
          { loader: "file-loader", options: { name: "images/[name].[ext]" } },
        ],
      },
    ],
  },
}
