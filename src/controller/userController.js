const db = require("../models/userAuth");


function loginAttempt(req,res) {
    console.log("USERNAME :" + req.body.email);
    console.log("PASSWORD :" + req.body.password);
    //hubungin model atau function database di sini
}

module.exports = {
    loginAttempt
};