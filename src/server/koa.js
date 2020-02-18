import path from "path"
import Koa from "koa"
import serve from "koa-static"
import morgan from "koa-morgan"
import ResponseTime from "koa-response-time"
import hmr from "./middleware/hmr"

const DEV_MODE = process.env.NODE_ENV !== "production"
const server = new Koa()

server.use(ResponseTime())
server.use(morgan("combined"))

if (DEV_MODE) {
  hmr(server).catch(e => console.error(e))
}

// serve static files
server.use(serve(path.resolve(__dirname, "..", "..", "dist")))

server.listen(8080, () => {
  console.log(`Koa server listening on port ${8080}`)
})
