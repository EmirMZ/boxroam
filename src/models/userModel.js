const db = require('../db/connection')
const format = require('pg-format')

exports.getUser = () => {
    const psql = "select * from app.Passenger"
    return db.query(psql)
}

exports.getUserById = (id, req) => {
    const psql = format(`select * from app.Passenger where id = %L`, id) 
    return db.query(psql)
}

exports.updateUserById = (req, hashedPassword) => {
    const {name, email, gender, phone, address,  id} = req.body
    const psql = format(`update app.Passenger set name = %L, email = %L, password = %L, gender = %L, phone = %L,
                        address = %L where id = %L`, name, email, hashedPassword, gender, phone, address, id)
    console.log(psql)
    return db.query(psql)

}

exports.deleteUserById = (req) => {
    const {id} = req.body
    const psql = format('delete from app.Passenger where id = %L', id)
    return db.query(psql)
}

// masih knop gara-gara array
exports.addUser = (req, hashedPassword) => {

    const {name, email, gender, phone, address} = req.body
    switch (gender) {
        case 1:
            gender = 'male';
            break;
        case 2:
            gender ='female'
            break;
        case 3:
            gender = 'other'
            break;
        default:
            break;
    }
    const dbquery = format('insert into app.Passenger (name, email, password, gender, phone, address) values (%L, %L, %L, %L, %L, %L)', name, email, hashedPassword, gender, phone, address)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}