import config from "../../../build-utils/webpack.dev"
import webpack from "webpack"
import KoaWebpack from "koa-webpack"
import path from "path"

const hmr = async app => {
  try {
    const middleware = await KoaWebpack({
      compiler: webpack(config),
      hotClient: {
        port: 8081,
      },
      devMiddleware: {
        publicPath: config.output.publicPath,
      },
    })
    app.use(middleware)

    // via: https://github.com/shellscape/koa-webpack#using-with-html-webpack-plugin
    app.use(async ctx => {
      const filename = path.resolve(config.output.path, "index.html")
      ctx.response.type = "html"
      ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(
        filename
      )
    })
  } catch (e) {
    throw new Error("Can't setup koa-webpack")
  }
}
export default hmr
