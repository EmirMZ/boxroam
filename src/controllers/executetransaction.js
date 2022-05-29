const axios = require('axios');
const paydia = require('../constants');
const db = require('../models/transactionModel');

exports.getQR = async(request) => {

    // var trans = await db.addTrans(request)
    axios
    .post('https://api.paydia.id/qris/generate/', {
        "merchantid": paydia.PAYDIA_MERCHANT,
        "nominal": request.price,
        "tip": 0,
        "ref": request.bank_transaction_number,
        "callback": "https://boxroam.azurewebsites.net/api/callback",
        "expire": 5
      })
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
    
}

exports.gotCallback = async (req,res) =>{
    // var trans = await db.addTrans(request)
    console.log(req)
}
