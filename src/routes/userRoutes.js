const express = require("express")
const router = express.Router()
const {getUser, getUserById, updateUserById, deleteUserById, addUser, updateUserByIdWeb} = require('../controllers/user')


router.get('/getUser', getUser)

router.get('/getUserById/:id', getUserById)

router.get('/updateUserById/:id', updateUserByIdWeb)

router.post('/addUser', addUser)

router.post('/updateUserById/:id', updateUserById)

router.post('/deleteUserById', deleteUserById)

module.exports = router