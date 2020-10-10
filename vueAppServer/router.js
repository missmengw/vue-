const express = require("express")
const service = require("./service")

let router = express.Router()

router.get("/showNews", (req, res) => {
    service.showNews(res)
})

router.get("/newsContent", (req, res) => {
    service.newsContent(req, res)
})

//查看评论
router.get("/view", (req, res) => {
    service.view(req, res)
})

//发表评论
router.post("/publish", (req, res) => {
    service.publish(req, res)
})

//查看图片
router.get("/showImgs", (req, res) => {
    service.showImgs(req, res)
})

module.exports = router