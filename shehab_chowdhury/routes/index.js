var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* Task 1 Started From Here */
router.get('/task1', function(req, res, next) {
  res.render('task1');
});
/* Ends of Task 1*/


/* Task 2 Started From Here*/
router.get('/task2', function(req, res, next) {
  res.render('task2');
});

router.get('/task2p1', function(req, res, next) {
  res.render('task2p1');
});

router.get('/task2p2', function(req, res, next) {
  res.render('task2p2');
});
router.get('/task2p3', function(req, res, next) {
  res.render('task2p3');
});

router.get('/task2p4', function(req, res, next) {
  res.render('task2p4');
});
router.get('/task2p5', function(req, res, next) {
  res.render('task2p5');
});
/* Ends of Task 2*/

module.exports = router;
