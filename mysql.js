const mysql = require('mysql')

// 链接池：创建多个链接、复用与分发链接
const pool = mysql.createPool({
    host: '119.3.5.8',
    port: '3306',
    user: 'freebooz',
    password: '750110'
})

// 封装
query = function (sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, results) {
            callback(err, results) // 结果回调
            connection.release() // 释放连接资源 | 跟 connection.destroy() 不同，它是销毁
        })
    })
}