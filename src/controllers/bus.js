//jika sudah divalidasi hak-hak akun, maka akan diberi function yang sesuai dibawah ini

const db = require('../models/busModel')
const dbstation = require('../models/stationModel')
const pricing = require('../helper/pricing')
const moment = require('moment')

exports.getBus = async (req, res) => {
    try {
        const {rows} = await db.getBus()
        const bus = {
           title: "Bus Page",
           subtitle: "Daftar Bus",
           list: JSON.parse(JSON.stringify(rows))    
    }
    return res.render("bus", {bus})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.getBusById = async (req, res) => {
    try {
        const {rows} = await db.getBusById(req.params['id'])
        const bus = {
            title: "Bus Page",
            subtitle: "Daftar Bus",
            list: JSON.parse(JSON.stringify(rows))    
     }
     return res.render("detailBus", {bus})
    } catch (error) {
        res.status(500).json({ 
            error: error.message
        })
    }
}

exports.updateBusByIdWeb = async (req, res) => {
    try {
        const {rows} = await db.getBusById(req.params['id'])
        const bus = {
            title: "Bus Page",
            subtitle: "Daftar Bus",
            list: JSON.parse(JSON.stringify(rows))    
     }
     return res.render("updateBus", {bus})
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


function station_arr_id_translator (arr,stationrows){
    let len = arr.length
    let i = 0
    while(i < len){
        arr[i] = stationrows.find(({ id }) => id === arr[i]).name
        i++
    }

    return arr;

}




function numdiff (num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }

exports.getBusByRoute = async (req, res) => {
    try {
        const [{rows},stationrows] = await Promise.all([db.getBusByRoute(req), dbstation.listStation()]);

        let len = rows.length
        let i = 0
        while(i < len){


            var x = 0 
            var total_time = 0
            while (x < numdiff(rows[i].station_arr_id.indexOf(parseInt(req.body.route_from)), rows[i].station_arr_id.indexOf(parseInt(req.body.route_to)))){
                total_time += rows[i].time_table[x]
                x++
            }
            rows[i].price = pricing.getPrice(total_time)
            station_arr_id_translator(rows[i].station_arr_id,stationrows.rows)
            
            rows[i].depart_time = moment(rows[i].depart_time,"hh:mm:ss").format('hh:mm')
            total_time = moment(rows[i].depart_time,"hh:mm:ss").add(total_time, 'h').format('hh:mm')
            rows[i].arrival_time = total_time
            i++
        }
        if(!rows.length){
            return res.status(200).json({
                error: 'no_route_available'
            })
        }
        return res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.updateBusById = async (req, res) => {
    try {
        await db.updateBusById(req)
        return res.redirect('/bus/getBus')
    
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteBusById = async (req, res) => {
    try {
        await db.deleteBusById(req)
        return res.redirect('/bus/getBus')
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


//register untuk role manapun, hati hati untuk dilewatin validator dulu
exports.registerBus = async (req, res) => {
    try {
        await db.addBus(req)
        
        return res.redirect('/bus/getBus')
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
}

