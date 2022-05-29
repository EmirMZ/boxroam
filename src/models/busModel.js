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

exports.getBusPassenger = (id) => {
    //const {id} = req.body
    const psql = format('SELECT NAME, ID FROM APP.PASSENGER WHERE ID IN(SELECT PASSENGER_ID FROM APP.BOOKING WHERE BUS_ID = %L)', id)
    return db.query(psql)
}

exports.addBus = (req) => {

    const {seats, depart_time, station_arr_id, time_table, position} = req.body

    var i = 0
    var len = station_arr_id.length
    while (i < len - 1){
        i++
        console.log(parseInt(station_arr_id[len - 1 - i]))
        station_arr_id.push(parseInt(station_arr_id[len - 1 - i]))
        time_table.push(parseInt(time_table[len - 1 - i]))
        
    }


    const dbquery = format('insert into app.Bus (seats, depart_time, Station_Arr_ID, time_table, position) values (%L, %L, \'{%s}\', \'{%s}\', %L)', seats, depart_time, station_arr_id, time_table, position)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}
