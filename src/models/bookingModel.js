const db = require('../db/connection')
const format = require('pg-format')



exports.listBooking = () =>{
    const dbquery = format('select * from app.booking');
    return db.query(dbquery)
}

exports.getBookingById = (id) =>{
    const dbquery = format('select * from app.booking where passenger_id = %L AND Transaction_ID != Null',id);
    return db.query(dbquery)
}


exports.addBooking = (bookingvars) =>{
    const {destination,boarding_position,passenger_id,bus_id} = bookingvars
    const dbquery = format('insert into app.booking (destination,boarding_position,passenger_id,bus_id, date) values (%L,%L,%L,%L, now()) RETURNING id', destination,boarding_position,passenger_id,bus_id);
    return db.query(dbquery)
}


exports.deleteBookingByIDandPassengerId = (passenger_id,id) =>{
    const dbquery = format('delete from app.booking where id = %L AND passenger_id', id, passenger_id);
    return db.query(dbquery)
}

