const express = require("express")
const router = express.Router()
const {getTrans, getTransById, updateTransById, deleteTransById, addTrans, updateTransByIdWeb} = require('../controllers/transaction')


router.get('/getTrans', getTrans)

router.get('/getTransById/:id', getTransById)

router.get('/updateTransById/:id', updateTransByIdWeb)

router.post('/addTrans', addTrans)

router.post('/updateTransById/:id', updateTransById)

router.post('/deleteTransById', deleteTransById)

module.exports = router