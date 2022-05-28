//routing untuk front end, untuk '/' tidak diperlukan karena browser otomatis nyari index.html
var express = require('express');
var router = express.Router();
var path = require('path');
const {userWebAuth} = require('../middlewares/auth-middleware')


router.get('/account',userWebAuth, function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/account.html'))
});


module.exports = router