const express = require("express")
const router = express.Router()
const {getOperator, getOperatorById, updateOperatorById, deleteOperatorById, addOperator, updateOperatorByIdWeb} = require('../controllers/operator')


router.get('/getOperator', getOperator)

router.get('/getOperatorById/:id', getOperatorById)

router.get('/updateOperatorById/:id', updateOperatorByIdWeb)

router.post('/addOperator', addOperator)

router.post('/updateOperatorById/:id', updateOperatorById)

router.post('/deleteOperatorById', deleteOperatorById)

module.exports = router