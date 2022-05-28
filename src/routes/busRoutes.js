const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const {registerBus, getBus, getBusById, getBusByRoute, updateBusById, deleteBusById} = require('../controllers/bus')


router.get('/getBus', getBus)

router.get('/getBusById/:id', getBusById)

router.get("/getBusById/:id/updateBusById/:id", (req, res) => {
    const id = req.params.id;
    Bus.ubahBusById(id, res);
  });

router.get('/getBusByRoute', getBusByRoute)

router.post('/addBus', registerBus)

router.post('/updateBusById', updateBusById)

router.post('/deleteBusById', deleteBusById)
module.exports = router