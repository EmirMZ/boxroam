const express = require("express")
const router = express.Router()
const {getTrans, getTransById, updateTransById, deleteTransById, addTrans} = require('../controllers/transaction')


router.get('/getTrans', getTrans)

router.get('/getTransById', getTransById)

router.post('/addTrans', addTrans)

router.post('/updateTransById', updateTransById)

router.post('/deleteTransById', deleteTransById)

module.exports = router