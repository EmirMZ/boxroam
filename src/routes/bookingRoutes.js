const express = require("express")
const router = express.Router()
const {addBooking,showUserBooking,DeleteUserBooking} = require('../controllers/booking')
const {userAuth} = require('../middlewares/auth-middleware')


router.post('/addBooking', userAuth,addBooking)
router.get('/getBooking', userAuth,showUserBooking)
router.get('/deleteBooking', userAuth,DeleteUserBooking)

module.exports = router