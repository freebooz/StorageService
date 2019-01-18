var db = {};
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '119.3.5.8',
    user: 'freebooz',
    password: '750110',
    database: 'finadb'
});

db.query = function (sql, callback) {
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        };

        callback(null, rows, fields);
    });
}
module.exports = db;