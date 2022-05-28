var express = require('express');
var userController = require("../controller/userController");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  userController.loginAttempt(req,res);
});

module.exports = router;
