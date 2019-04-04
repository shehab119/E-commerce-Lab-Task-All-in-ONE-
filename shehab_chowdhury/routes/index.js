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

/* Task 3 Started From Here*/ 
router.get('/task3', function(req, res, next) {
  res.render('task3');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {

  var stdname = req.body.stdname;
  var stdid = req.body.stdid;

  console.log(stdname + " " + stdid);

  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {

  var sname = req.body.sname;
  var spsw = req.body.spsw;
  var gen = req.body.gen;
  var sno = req.body.sno;


  console.log(sname + "_" + spsw + "_" + gen + "_" + sno);

  res.render('signup');
});

/* Ends of Task 3 */
module.exports = router;
