const db = require('../db/connection')
const format = require('pg-format')
const {response} = require('express')

exports.getBus = () => {
    const psql = "select * from app.Bus"
    return db.query(psql)
}

exports.getBusById = (req) => {
    const {id} = req.body
    const psql = format(`select * from app.Bus where id = %L`, id) 
    console.log(req.body)
    return db.query(psql)
}



// masih knop gara-gara array
exports.addBus = (req) => {

    const {seats, depart_date, route, time_table, position} = req.body

    const dbquery = format('insert into app.Bus (seats, depart_date, route, time_table, position) values (%L, %L, \'{%s}\', %L, %L)', seats, depart_date, route, time_table, position)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}
