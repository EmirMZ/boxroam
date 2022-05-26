//middlewate passport
const passport = require('passport')
const { Strategy } = require('passport-jwt')
const { SECRET } = require('../constants')
const db = require('../models/credentialModel')

//narik cookie untuk menentukan browser login akun siapa
const cookieExtractor = function (req) {
  let token = null
  if (req && req.cookies) token = req.cookies['token']
  return token
}

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
}

//mereturn akun siapa yang request dengan melihat cookienya, ini belum diimplementasi
passport.use(
  new Strategy(opts, async (res, done) => {
    try {
      const { rows } = await db.getAccountFromID(res.role,res.id)

      if (!rows.length) {
        throw new Error('401 not authorized')
      }

      let user = {
        address : rows[0].address, 
        email : rows[0].email,
        gender : rows[0].gender,
        id : rows[0].id,
        name : rows[0].name,
        phone : rows[0].phone}


      return await done(null, user)
    } catch (error) {
      console.log(error.message)
      done(null, false)
    }
  })
)