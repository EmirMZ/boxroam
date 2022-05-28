const db = require('../models/transactionModel')

exports.getTrans = async (req, res) => {
    try {
        const {rows} = await db.getTrans()
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


exports.getTransById = async (req, res) => {
    try {
        const {rows} = await db.getTransById(req)
        return res.status(200).json(rows[0])
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateTransById = async (req, res) => {
    try {
        await db.updateTransById(req)
        return res.status(200).json({
            success: true,
            message: 'updated_transaction'
    })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteTransById = async (req, res) => {
    try {
        await db.deleteTransById(req)
        return res.status(200).json({
            success: true,
            message: 'deleted_transaction'
    })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


//register untuk role manapun, hati hati untuk dilewatin validator dulu
exports.addTrans = async (req, res) => {
    try {
        await db.addTrans(req)
        
        return res.status(201).json({
            success: true,
            message: 'inserted_transaction'
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}
