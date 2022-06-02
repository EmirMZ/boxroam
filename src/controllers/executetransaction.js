const axios = require('axios');
const paydia = require('../constants');
const db = require('../models/transactionModel');

exports.startQRIS = async(request) => {

    var trans_id = await db.addTrans(request)
    axios
    .post('https://api.paydia.id/qris/generate/', {
        "merchantid": paydia.PAYDIA_MERCHANT,
        "nominal": request.price,
        "tip": 0,
        "ref": trans_id.rows[0].id,
        "callback": "https://boxroam.azurewebsites.net/api/callback",
        "expire": 5
      },{
        headers: { Authorization: `Bearer ${paydia.PAYDIA_ID}` }
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
    //var trans = await db.updateTransById(request)
    console.log(req)
}
