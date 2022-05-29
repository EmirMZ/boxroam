const express = require("express")
const router = express.Router()
const {getTrans, getTransById, updateTransById, deleteTransById, addTrans, updateTransByIdWeb} = require('../controllers/transaction')
const {operatorAuth} = require('../middlewares/auth-middleware')

router.get('/getTrans',operatorAuth, getTrans)

router.get('/getTransById/:id',operatorAuth, getTransById)

router.get('/updateTransById/:id',operatorAuth, updateTransByIdWeb)

router.post('/addTrans',operatorAuth, addTrans)

router.post('/updateTransById/:id',operatorAuth, updateTransById)

router.post('/deleteTransById',operatorAuth, deleteTransById)

module.exports = router