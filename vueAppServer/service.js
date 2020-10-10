const mysql = require("mysql")

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "products",
    charset: "UTF8_GENERAL_CI"
})

db.connect()

function showNews(res) {
    let sql = "select * from news";
    db.query(sql, (err, results) => {
        res.send(results)
    })
}

function newsContent(req, res) {
    let sql = `select * from news where id=${parseInt(req.query.id)}`;
    db.query(sql, (err, results) => {
        res.send(results)
    })
}

function view(req, res) {
    let sql = `select contents from comments where newsId=${parseInt(req.query.id)}`;
    db.query(sql, (err, results) => {
        // console.log(results);
        res.send(results)
    })
}

function publish(req, res) {
    // console.log(req.body);
    let params = [parseInt(req.body.newsId), req.body.contents];
    let sql = "insert into comments values (null,?,?)";
    db.query(sql, params, (err, results) => {
        res.send(results)
    })
}

function showImgs(req, res) {
    let sql = `select * from imgs where keyId=${parseInt(req.query.keyId)}`;
    db.query(sql, (err, results) => {
        res.send(results)
    })
}

module.exports = {
    showNews,
    newsContent,
    view,
    publish,
    showImgs
}