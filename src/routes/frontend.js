//routing untuk front end, untuk '/' tidak diperlukan karena browser otomatis nyari index.html
var express = require('express');
var router = express.Router();
var path = require('path');



router.get('/staff', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/staffindex.html'))
  });

module.exports = router