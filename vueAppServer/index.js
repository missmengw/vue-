const express = require("express")
const bodyPar = require("body-parser")
const router = require("./router")

let app = express();
app.listen(3333, () => {
    console.log("服务端已开启！")
})

//解决跨域问题
app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

app.use("/public", express.static("public"))

app.use(bodyPar.urlencoded({ extended: false }))

app.use("/", router)