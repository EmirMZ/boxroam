const db = require('../models/operatorModel')
const {hash} = require('bcryptjs')

exports.getOperator = async (req, res) => {
    try {
        const {rows} = await db.getOperator()
        const operator = {
            title: "Operator Page",
            subtitle: "Daftar Operator",
            list: JSON.parse(JSON.stringify(rows))  
        }
         return res.render("operator", {operator})
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.getOperatorById = async (req, res) => {
    try {
        const {rows} = await db.getOperatorById(req.params['id'])
        const operator = {
            title: "Operator Page",
            subtitle: "Daftar Operator",
            list: JSON.parse(JSON.stringify(rows))  
        }
        return res.render("detailOperator", {operator})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateOperatorByIdWeb = async (req, res) => {
    try {
        const {rows} = await db.getOperatorById(req.params['id'])
        const operator = {
            title: "Operator Page",
            subtitle: "Daftar Operator",
            list: JSON.parse(JSON.stringify(rows))    
     }
     return res.render("updateOperator", {operator})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateOperatorById = async (req, res) => {
    const {password} = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await db.updateOperatorById(req, hashedPassword)
        return res.redirect('/operator/getOperator')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteOperatorById = async (req, res) => {
    try {
        await db.deleteOperatorById(req)
        return res.redirect('/operator/getOperator')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


//register untuk role manapun, hati hati untuk dilewatin validator dulu
exports.addOperator = async (req, res) => {
    const {password} = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await db.addOperator(req, hashedPassword)
        
        return res.redirect('/operator/getOperator')
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}
