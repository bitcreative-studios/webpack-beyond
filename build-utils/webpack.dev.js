const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, "..", "src"),
  entry: {
    main: ["react-hot-loader/patch", "./client/index.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "..", "static"),
    publicPath: "/",
  },
  devServer: {
    overlay: true,
    contentBase: "static",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
}
