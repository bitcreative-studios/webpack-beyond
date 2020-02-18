import path from "path"
import express from "express"
import webpack from "webpack"
import config from "../../config/webpack.dev"
import setupWebpackDevMiddleware from "webpack-dev-middleware"

const server = express()

const webpackMiddleware = setupWebpackDevMiddleware(
  webpack(config),
  config.devServer
)

server.use(webpackMiddleware)
server.use(express.static("dist"))

server.listen(8080, () => {
  console.log(`Express server listening on port ${8080}`)
})
