const express = require("express")
const router = express.Router()
const {getOperator, getOperatorById, updateOperatorById, deleteOperatorById, addOperator, updateOperatorByIdWeb} = require('../controllers/operator')
const {operatorAuth} = require('../middlewares/auth-middleware')

router.get('/getOperator',operatorAuth, getOperator)

router.get('/getOperatorById/:id',operatorAuth, getOperatorById)

router.get('/updateOperatorById/:id',operatorAuth, updateOperatorByIdWeb)

router.post('/addOperator',operatorAuth, addOperator)

router.post('/updateOperatorById/:id',operatorAuth, updateOperatorById)

router.post('/deleteOperatorById',operatorAuth, deleteOperatorById)

module.exports = router