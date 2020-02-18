import path from "path"
import Koa from "koa"
import webpack from "webpack"
import config from "../../config/webpack.dev"
import serve from "koa-static"
import KoaWebpack from "koa-webpack"
import morgan from "koa-morgan"
import ResponseTime from "koa-response-time"

const DEV_MODE = process.env.NODE_ENV !== "production"
const server = new Koa()

server.use(ResponseTime())
server.use(morgan("combined"))

if (DEV_MODE) {
  KoaWebpack({
    compiler: webpack(config),
    hotClient: {
      port: 8081,
    },
    devMiddleware: {
      publicPath: config.output.publicPath,
    },
  }).then(middleware => {
    server.use(middleware)
    // via: https://github.com/shellscape/koa-webpack#using-with-html-webpack-plugin
    server.use(async ctx => {
      const filename = path.resolve(config.output.path, "index.html")
      ctx.response.type = "html"
      ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(
        filename
      )
    })
  })
}

// serve static files
server.use(serve(path.resolve(__dirname, "..", "..", "dist")))

server.listen(8080, () => {
  console.log(`Koa server listening on port ${8080}`)
})
