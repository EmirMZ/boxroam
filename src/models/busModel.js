const db = require('../db/connection')
const format = require('pg-format')
const {response} = require('express')

exports.getBus = (res) => {
    const psql = "select * from app.Bus"
    return db.query(psql)
}

exports.getBusById = (id, req) => {
    const psql = format(`select * from app.Bus where id = %L`, id) 
    return db.query(psql)
}

exports.updateBusById = (req) => {
    const {id, seats, depart_date, station_arr_id, time_table, position} = req.body
    const psql = format('update app.Bus set seats = %L, depart_time = now(), station_arr_id = \'{%s}\', time_table = \'{%s}\', position = %L where id = %L', seats, station_arr_id, time_table, position, id)
    console.log(psql)
    return db.query(psql)
}

exports.getBusByRoute = (req) => {
    const {route_from, route_to} = req.body
    const psql = format(`SELECT * FROM app.bus WHERE station_arr_id @> '{%s,%s}'`, route_from,route_to) 
    return db.query(psql)
}

exports.ubahBusById = (id, res) => {
    const sql = `SELECT * FROM app.Bus WHERE id = ${id}`;
  
    db.query(sql, (error, result) => {
      if (error) return console.log("error", error);
  
      const bus = {
        title: "UBAH BUS PAGE",
        subtitle: "UPDATE BUS",
        list: JSON.parse(JSON.stringify(result.rows)),
      };
      res.render("updateBus", { bus });
      res.end();
    });
  };
  

exports.deleteBusById = (req) => {
    const {id} = req.body
    const psql = format('delete from app.Bus where id = %L', id)
    return db.query(psql)
}

exports.addBus = (req) => {

    const {seats, depart_date, station_arr_id, time_table, position} = req.body

    const dbquery = format('insert into app.Bus (seats, depart_time, Station_Arr_ID, time_table, position) values (%L, now(), \'{%s}\', \'{%s}\', %L)', seats, station_arr_id, time_table, position)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}
