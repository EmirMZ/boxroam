const { response } = require("express");
const { request } = require("express");
const express = require("express")
const router = express.Router()
const Bus = require('../models/busModel')
const {registerBus, getBus, getBusById, updateBusById, deleteBusById} = require('../controllers/bus')


router.get('/getBus', getBus)

router.get('/getBusById/:id', getBusById)

router.get("/getBusById/:id/updateBusById/:id", (req, res) => {
    const id = req.params.id;
    Bus.ubahBusById(id, res);
  });

router.post('/addBus', registerBus)

router.post('/updateBusById/:id', (req,res) => {
  const {id} = req.params.id;
  Bus.updateBusById(id, res)
})

router.post('/deleteBusById', deleteBusById)
module.exports = router