
//jika setelah melewati /validators/xxx.js dan ternyata tedapat error, maka akan di reply request dari browser error tersebut
const {validationResult} = require('express-validator')

exports.validationMiddleware = (req, res, next) => {
    let errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next() 
}