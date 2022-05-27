//semua panggilan ke database dengan konteks autentikasi user(login, logout, register) disini semua
//getuser juga seharusnya disini juga
//kalau untuk booking dan segala macam itu di file /models/xxx.js yang lain
const db = require('../db/connection')
const format = require('pg-format')

exports.register = (req,hashedPassword) => {
    const {email, name, role, gender, phonenumber, address} = req.body
    if(role == 'passenger'){
            const dbquery = format('insert into app.%I (email, password, name, gender, phone, address) values (%L, %L, %L, %L, %s, %L)', role, email, hashedPassword, name, gender, phonenumber, address)
            db.query(dbquery)
        }else{
            const dbquery = format('insert into app.%I (email, password, name) values (%L, %L, %L)', role, email, hashedPassword, name)
            db.query(dbquery)
    }
}

exports.getAccount = (role, email) =>{
    const dbquery = format('select * from app.%I where email = %L', role, email);
    return db.query(dbquery)
}

exports.getAccountFromID = (role, id) =>{
    const dbquery = format('select * from app.%I where id = %L', role, id);
    return db.query(dbquery)
}

exports.listAccount = (role) =>{
    const dbquery = format('select id, email from app.%I', role)
    console.log(db.query(dbquery))
    return db.query(dbquery)
}

