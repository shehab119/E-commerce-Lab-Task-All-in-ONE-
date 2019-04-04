var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/task1', function(req, res, next) {
  res.render('task1');
});
module.exports = router;
