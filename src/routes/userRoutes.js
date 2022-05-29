const express = require("express")
const router = express.Router()
const {getUser, getUserById, updateUserById, deleteUserById, addUser, updateUserByIdWeb} = require('../controllers/user')
const {operatorAuth} = require('../middlewares/auth-middleware')

router.get('/getUser',operatorAuth, getUser)

router.get('/getUserById/:id',operatorAuth, getUserById)

router.get('/updateUserById/:id',operatorAuth, updateUserByIdWeb)

router.post('/addUser',operatorAuth, addUser)

router.post('/updateUserById/:id',operatorAuth, updateUserById)

router.post('/deleteUserById',operatorAuth, deleteUserById)

module.exports = router