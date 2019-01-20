var express = require('express');
var router = express.Router();
var db = require("../lib/db.js");

/* 获取商品类目列表. */
router.get('/cate/list', function (req, res, next) {
    var sql = "select * from base_product_cate";
    db.query(sql, function (err, data) {
        res.send(data);
    });
});

/* 获取商品列表. */
router.get('/list', function (req, res, next) {
    var sql = "select * from base_product";
    db.query(sql, function (err, data) {
        res.send(data);
    });
});

/* 编辑商品信息. */
router.post('/list', function (req, res, next) {
    var sql = "select * from base_product";
    db.query(sql, function (err, data) {
        res.send(data);
    });
});

module.exports = router;