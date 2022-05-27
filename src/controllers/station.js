//jika sudah divalidasi hak-hak akun, maka akan diberi function yang sesuai dibawah ini
const dbAccess = require('../models/stationModel')

//list semua station
exports.getStation = async (req,res) => {
    try {
        const {rows} = await dbAccess.listStation()
        return res.status(200).json(rows)
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

//tambah station
exports.addStation = async (req, res) => {
    try {
        await dbAccess.addStation(req.body.name)
        
        return res.status(201).json({
            success: true,
            message: 'station_register_success'
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

exports.renameStation = async (req, res) => {
    try {
        const {rows} = await dbAccess.getStationById(req.body.id)
        if (!rows.length) {
            throw new Error('rename_notfound')
        }

        await dbAccess.renameStation(req.body.name,req.body.id)
        
        return res.status(201).json({
            success: true,
            message: 'rename_success'
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteStation = async (req, res) => {
    try {
        await dbAccess.deleteStation(req.body.id)
        
        return res.status(201).json({
            success: true,
            message: 'delete_success'
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}