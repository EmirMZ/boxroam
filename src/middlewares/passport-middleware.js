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

      let user = { id: rows[0].id, email: rows[0].email }

      return await done(null, user)
    } catch (error) {
      console.log(error.message)
      done(null, false)
    }
  })
)