const {check} = require('express-validator')
const {compare} = require('bcryptjs')
const dbAccess = require('../models/credentialModel')

//express-validator adalah kumpulan fungsi yg dipake untuk
//melakukan validasi terhadap user input. jika express-validator
//dijadikan callback-nya route (seperti kasus di /routes/auth.js)
//maka function di express-validator ibarat menjadi bagian dari
//function di expressjs itu sendiri



// password
const password = check('password').isLength({min:6, max:15})
.withMessage('Password has to be 6 - 15 characters')

// email
const email = check('email').isEmail().withMessage('Please provide a valid email')

const passengerRole = check('role').custom((value) => {
        const roleList = ['passenger'];
        if (!roleList.includes(value)) {
          throw new Error('Unknown role');
        }
      
        return true;
})

const operatorRole = check('role').custom((value) => {
    const roleList = ['operator'];
    if (!roleList.includes(value)) {
      throw new Error('Unknown role');
    }
  
    return true;
})

const driverRole = check('role').custom((value) => {
    const roleList = ['driver'];
    if (!roleList.includes(value)) {
      throw new Error('Unknown role');
    }
  
    return true;
})

//gender
const gender = check('gender').isNumeric().withMessage('Please provide a valid gender')

//phone number
const phoneNumber = check('phonenumber').isMobilePhone(['id-ID']).withMessage('Please provide a valid Indonesia phone number')

// check if email exist for registration
const emailExist = check('email').custom(async(value, {req}) => {
    const {rows} = await dbAccess.getAccount(req.body.role, value)
    if (rows.length) {
        throw new Error('Email already exist')
    }
})


// login validation 
const loginFieldsCheck = check('email').custom(async(value, {req}) => {
    console.log(req.body.role);
    const user = await dbAccess.getAccount(req.body.role, value)
    if(!user.rows.length){
        throw new Error('login_fail_email')
    }
    const validPassword = await compare(req.body.password, user.rows[0].password)
 
    if(!validPassword){
        throw new Error('login_fail_pass')
    }
    req.user = user.rows[0]
})


module.exports = {
    passengerRegisterValidation: [gender, passengerRole, email, password, emailExist, phoneNumber],
    passengerEditValidation: [gender, passengerRole, password,  phoneNumber],
    operatorRegisterValidation: [operatorRole, email, password, emailExist, phoneNumber],
    driverRegisterValidation: [driverRole, email, password, emailExist, phoneNumber],
    loginValidation: [loginFieldsCheck],

}