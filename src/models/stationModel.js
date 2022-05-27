//semua panggilan ke database dengan konteks autentikasi user(login, logout, register) disini semua
//getuser juga seharusnya disini juga
//kalau untuk booking dan segala macam itu di file /models/xxx.js yang lain
const db = require('../db/connection')
const format = require('pg-format')



exports.listStation = () =>{
    const dbquery = format('select * from app.station');
    return db.query(dbquery)
}

exports.getStationById = (id) =>{
    const dbquery = format('select * from app.station where id = %L',id);
    return db.query(dbquery)
}

exports.addStation = (name) =>{
    const dbquery = format('insert into app.station (name) values (%L)', name);
    return db.query(dbquery)
}

exports.renameStation = (newName,id) =>{
    const dbquery = format('update app.station set name = %L where id = %L',newName, id);
    return db.query(dbquery)
}

exports.deleteStation = (id) =>{
    const dbquery = format('delete from app.station where id = %L', id);
    return db.query(dbquery)
}

