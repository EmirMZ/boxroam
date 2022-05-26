//passport untuk encoding cookie
const passport = require('passport')

// untuk api saja
exports.userAuth = passport.authenticate('jwt', {session: false})

// yg ini untuk webservice
exports.webAuth = passport.authenticate('jwt', {
    session: false,
    failureRedirect : '/'
});