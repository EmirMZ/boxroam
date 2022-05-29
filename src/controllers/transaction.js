const db = require('../models/transactionModel')

exports.getTrans = async (req, res) => {
    try {
        const {rows} = await db.getTrans()
        const trans = {
            title: "Transaction Page",
            subtitle: "Daftar Transaction",
            list: JSON.parse(JSON.stringify(rows))  
        }
        return res.render("transaction", {trans})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.getTransById = async (req, res) => {
    try {
        const {rows} = await db.getTransById(req.params['id'])
        const trans = {
            title: "Transaction Page",
            subtitle: "Daftar Transaction",
            list: JSON.parse(JSON.stringify(rows))  
        }
        return res.render("detailTransaction", {trans})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateTransByIdWeb = async (req, res) => {
    try {
        const {rows} = await db.getTransById(req.params['id'])
        const trans = {
            title: "Transaction Page",
            subtitle: "Daftar Transaction",
            list: JSON.parse(JSON.stringify(rows))    
     }
     return res.render("updateTransaction", {trans})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateTransById = async (req, res) => {
    try {
        await db.updateTransById(req)
        return res.redirect('/transaction/getTrans')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteTransById = async (req, res) => {
    try {
        await db.deleteTransById(req)
        return res.redirect('/transaction/getTrans')
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
        
        return res.redirect('/transaction/getTrans')
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}
