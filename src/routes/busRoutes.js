const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const {registerBus, getBus, getBusById, getBusByRoute, updateBusById, deleteBusById, updateBusByIdWeb} = require('../controllers/bus')
const {operatorAuth} = require('../middlewares/auth-middleware')


router.get('/getBus',operatorAuth, getBus)

router.get('/getBusById/:id',operatorAuth, getBusById)

router.get('/updateBusById/:id',operatorAuth, updateBusByIdWeb)

router.post('/getBusByRoute',operatorAuth, getBusByRoute)


router.post('/addBus',operatorAuth, registerBus)

router.post('/updateBusById/:id',operatorAuth, updateBusById)

router.post('/deleteBusById',operatorAuth, deleteBusById)
module.exports = router