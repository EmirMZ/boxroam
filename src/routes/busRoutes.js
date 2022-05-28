const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const {registerBus, getBus, getBusById, getBusByRoute, updateBusById, deleteBusById, updateBusByIdWeb} = require('../controllers/bus')


router.get('/getBus', getBus)

router.get('/getBusById/:id', getBusById)

router.get('/updateBusById/:id', updateBusByIdWeb)

router.get('/getBusByRoute', getBusByRoute)

router.post('/addBus', registerBus)

router.post('/updateBusById/:id', updateBusById)

router.post('/deleteBusById', deleteBusById)
module.exports = router