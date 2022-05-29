const jwt = require('jsonwebtoken')
const {SECRET} = require('../constants');
const db = require('../models/busModel');
const dbBooking = require('../models/bookingModel');
const pricing = require('../helper/pricing')

function numdiff (num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }

exports.showUserBooking = async(req,res) =>{
    try{
        userCred = await jwt.verify(req.cookies.token, SECRET)
        const booking_user = await dbBooking.getBookingById(userCred.id)
        return res.status(200).json(booking_user.rows)

    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

exports.DeleteUserBooking = async(req,res) =>{
    try{
        userCred = await jwt.verify(req.cookies.token, SECRET)
        const delete_booking_user = await dbBooking.getBookingById(userCred.id, req.body.booking_id)
        return res.status(200).json(delete_booking_user)

    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

exports.addBooking = async (req, res) => {
    try {


        const [{rows},userCred] = await Promise.all([db.getBusByRoute(req), jwt.verify(req.cookies.token, SECRET)]);
        if(userCred.role != 'passenger'){
            return res.status(500).json({
                error: 'booking_failed'
            })
        }

        const bus_arr = rows.filter(rows => rows.id == req.body.bus_id)

        var x = 0 
        var total_time = 0
        while (x < numdiff(bus_arr[0].station_arr_id.indexOf(parseInt(req.body.route_from)), bus_arr[0].station_arr_id.indexOf(parseInt(req.body.route_to)))){
            total_time += bus_arr[0].time_table[x]
            x++
        }
        bus_arr[0].price = pricing.getPrice(total_time)
        
        let bookingvars={
            "destination" : req.body.route_to,
            "boarding_position" : req.body.route_from,
            "passenger_id" : userCred.id,
            "bus_id" : bus_arr[0].id
        }
        var otherPassenger = await db.getBusPassenger(bus_arr[0].id);
        if(otherPassenger.rows >= bus_arr[0].seats){
            return res.status(500).json({
                error: 'booking_failed_bus_full'
            })
        }
        const booking_id = await dbBooking.addBooking(bookingvars)



        if(!rows.length){
            return res.status(500).json({
                error: 'booking_failed'
            })
        }
        return res.status(200).json({
            'status' : 'booking_success',
            'booking_id' : booking_id.rows[0].id
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}