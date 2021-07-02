const proxy = require("http-proxy-middleware")
module.exports = function (app) {
    app.use(
        proxy("/api", {
            target: "http://localhost:9000/api",
            changOrigin: true,
            pathRewrite: { '^/api': '' }
        })
    )
}