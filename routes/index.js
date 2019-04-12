var express = require('express');
var router = express.Router();
var io = require('../bin/www');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tablas', function(req, res, next) {
  res.render('tablas', { title: 'Express' });
});

router.get('/motion', function(req, res, next) {
  res.render('motion', { title: 'Express' });
});

module.exports = router;