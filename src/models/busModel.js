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

exports.updateBusById = (id, req) => {
    const {seats, depart_date, route, time_table, position} = req.body
    const psql = format('update app.Bus set seats = %L, depart_date = %L, route = \'{%s}\', time_table = %L, position = %L where id = %L', seats, depart_date, route, time_table, position, id)
    console.log(psql)
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

// masih knop gara-gara array
exports.addBus = (req) => {

    const {seats, depart_date, Station_Arr_ID, time_table, position} = req.body

    const dbquery = format('insert into app.Bus (seats, depart_date, Station_Arr_ID, time_table, position) values (%L, default, \'{%s}\', \'{%s}\', %L)', seats, Station_Arr_ID, time_table, position)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}
