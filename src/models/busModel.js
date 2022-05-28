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
    return db.query(psql)
}

exports.updateBusById = (req) => {
    const {seats, depart_date, route, time_table, position, id} = req.body
    const psql = format('update app.Bus set seats = %L, depart_date = %L, route = \'{%s}\', time_table = %L, position = %L where id = %L', seats, depart_date, route, time_table, position, id)
    console.log(psql)
    return db.query(psql)

}

exports.deleteBusById = (req) => {
    const {id} = req.body
    const psql = format('delete from app.Bus where id = %L', id)
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