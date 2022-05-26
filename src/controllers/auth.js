//jika sudah divalidasi hak-hak akun, maka akan diberi function yang sesuai dibawah ini

const {hash} = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET} = require('../constants')
const dbAccess = require('../models/credentialModel')

//khusus operator, narik semua user
exports.getUsers = async (req, res) => {
    try {
        const {rows} = await dbAccess.listAccount(req.body.role)
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

//register untuk role manapun, hati hati untuk dilewatin validator dulu
exports.register = async (req, res) => {
    const {password} = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await dbAccess.register(req,hashedPassword)
        
        return res.status(201).json({
            success: true,
            message: 'register_success'
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

//login untuk role manapun
exports.login = async (req, res) => {
    const user = await dbAccess.getAccount(req.body.role, req.user.email)
    let payload = {
        id: user.rows[0].id,
        role: req.body.role
    }
    try {
        const token = await jwt.sign(payload, SECRET)

        return res.status(200).cookie('token', token, {httpOnly: true}).json({
            success: true,
            message: 'login_success'
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

//protected
exports.protected = async (req, res) => {
    try {

        
        return res.status(200).json(res.req.user)
    } catch (error) {
        console.log(error.message)
    }
}

//logout
exports.logout = async (req, res) => {
    try {
      return res.status(200).clearCookie('token', { httpOnly: true }).json({
        success: true,
        message: 'Logged out succefully',
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
}