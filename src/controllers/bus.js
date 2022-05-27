//jika sudah divalidasi hak-hak akun, maka akan diberi function yang sesuai dibawah ini

const db = require('../models/busModel')

exports.getBus = async (req, res) => {
    try {
        const {rows} = await db.getBus()
        return res.status(200).json({
            success: true,
            users: rows
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.getBusById = async (req, res) => {
    try {
        const {rows} = await db.getBusById(req)
        return res.status(200).json(rows[0])
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
        
        return res.status(201).json({
            success: true,
            message: 'inserted_bus'
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

