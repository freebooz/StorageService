var mysql = require("mysql");
var db = {}

var pool = mysql.createPool({
    host: '119.3.5.8',
    user: 'freebooz',
    password: '750110',
    database: 'storagedb',
    port: 3306
});

var query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            console.log('与MySQL数据库建立连接失败。');
            callback(err, null);
        } else {
            conn.query(sql, function (qerr, vals) {
                conn.release(); //释放连接

                var result = {};
                if (qerr) {
                    result.success = "false";
                    result.data = null;
                } else {
                    result.success = "true";
                    result.data = vals;
                }

                callback(qerr, result); //事件驱动回调
            });
        }
    });
};

db.query = query;

module.exports = db;