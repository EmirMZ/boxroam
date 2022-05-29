const db = require('../models/userModel')
const {hash} = require('bcryptjs')

exports.getUser = async (req, res) => {
    try {
        const {rows} = await db.getUser()
        const user = {
            title: "User Page",
            subtitle: "Daftar User",
            list: JSON.parse(JSON.stringify(rows))  
        }
         return res.render("user", {user})
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.getUserById = async (req, res) => {
    try {
        const {rows} = await db.getUserById(req.params['id'])
        const user = {
            title: "User Page",
            subtitle: "Daftar User",
            list: JSON.parse(JSON.stringify(rows))  
        }
        return res.render("detailUser", {user})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateUserByIdWeb = async (req, res) => {
    try {
        const {rows} = await db.getUserById(req.params['id'])
        const user = {
            title: "User Page",
            subtitle: "Daftar User",
            list: JSON.parse(JSON.stringify(rows))    
     }
     return res.render("updateUser", {user})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateUserById = async (req, res) => {
    const {password} = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await db.updateUserById(req, hashedPassword)
        return res.redirect('/user/getUser')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        await db.deleteUserById(req)
        return res.redirect('/user/getUser')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


//register untuk role manapun, hati hati untuk dilewatin validator dulu
exports.addUser = async (req, res) => {
    const {password} = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await db.addUser(req, hashedPassword)
        
        return res.redirect('/user/getUser')
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}
