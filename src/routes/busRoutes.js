const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const Bus = require("../models/busModel")
const {registerBus, getBus, getBusById} = require('../controllers/bus')


router.get('/getBus', getBus)

router.get('/getBusById', getBusById)

router.post('/addBus', registerBus)

module.exports = router