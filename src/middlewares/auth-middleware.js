//passport untuk encoding cookie
const passport = require('passport')

// untuk api saja
exports.userAuth = passport.authenticate('jwt', {session: false})

exports.operatorAuth = passport.authenticate('operatorRole', {
    session: false
});

exports.driverAuth = passport.authenticate('driverRole', {
    session: false
});

// yg ini untuk webservice
exports.userWebAuth = passport.authenticate('jwt', {
    session: false,
    failureRedirect : '/'
});

exports.webOperatorAuth = passport.authenticate('operatorRole', {
    session: false,
    failureRedirect : '/'
});

exports.webDriverAuth = passport.authenticate('driverRole', {
    session: false,
    failureRedirect : '/'
});