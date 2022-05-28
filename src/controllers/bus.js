//jika sudah divalidasi hak-hak akun, maka akan diberi function yang sesuai dibawah ini

const db = require('../models/busModel')

exports.getBus = async (req, res) => {
    try {
        const {rows} = await db.getBus()
        const bus = {
           title: "Bus Page",
           subtitle: "Daftar Bus",
           list: JSON.parse(JSON.stringify(rows))    
    }
    return res.render("bus", {bus})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.getBusById = async (req, res) => {
    try {
        const {rows} = await db.getBusById(req.params['id'])
        const bus = {
            title: "Bus Page",
            subtitle: "Daftar Bus",
            list: JSON.parse(JSON.stringify(rows))    
     }
     return res.render("detailBus", {bus})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateBusById = async (req, res) => {
    try {
        await db.updateBusById(req.params['id'])
        return res.redirect('/bus/getBus')
    
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteBusById = async (req, res) => {
    try {
        await db.deleteBusById(req)
        return res.redirect('/bus/getBus')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


//register untuk role manapun, hati hati untuk dilewatin validator dulu
exports.registerBus = async (req, res) => {
    try {
        await db.addBus(req)
        
        return res.redirect('/bus/getBus')
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

