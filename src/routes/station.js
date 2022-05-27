//routing untuk front end, untuk '/' tidak diperlukan karena browser otomatis nyari index.html
var express = require('express');
var router = express.Router();
var path = require('path');
const { getStation, addStation, deleteStation, renameStation} = require('../controllers/station')
//const {webAuth} = require('../middlewares/auth-middleware')


router.get('/getstation', getStation);

router.post('/addstation', addStation);

router.put('/editstation', renameStation)

router.delete('/deletestation', deleteStation)

module.exports = router