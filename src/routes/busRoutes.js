const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const {registerBus, getBus, getBusById, updateBusById, deleteBusById} = require('../controllers/bus')


router.get('/getBus', getBus)

router.get('/getBusById', getBusById)

router.post('/addBus', registerBus)

router.post('/updateBusById', updateBusById)

router.post('/deleteBusById', deleteBusById)
module.exports = router