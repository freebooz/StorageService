var express = require('express');
var router = express.Router();
const db = require('../mysql1.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  let sql = 'select * from tbook';
  db.query(sql, function (err, rows, fields) {
    if (err) {
      console.log(err);
      return;
    }
    // console.log('用户数量 : ', rows[0].count);
    res.send(rows[0]);
  });

  // console.log(s);
  
});

module.exports = router;
