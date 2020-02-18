import path from "path"
import Koa from "koa"
import webpack from "webpack"
import config from "../../config/webpack.dev"
import KoaWebpack from "koa-webpack"
import morgan from "koa-morgan"
import ResponseTime from "koa-response-time"

const server = new Koa()

server.use(ResponseTime())
server.use(morgan("combined"))

KoaWebpack({
  compiler: webpack(config),
  hotClient: {
    port: 8081,
  },
  devMiddleware: {
    publicPath: config.output.publicPath,
  },
}).then(middleware => server.use(middleware))
// server.use(middleware)
server.listen(8080, () => {
  console.log(`Koa server listening on port ${8080}`)
})
