const db = require('../db/connection')
const format = require('pg-format')

exports.getOperator = () => {
    const psql = "select * from app.Operator"
    return db.query(psql)
}

exports.getOperatorById = (id, req) => {
    const psql = format(`select * from app.Operator where id = %L`, id) 
    return db.query(psql)
}

exports.updateOperatorById = (req, hashedPassword) => {
    const {shift, name, email, id} = req.body
    const psql = format(`update app.Operator set shift = %L, name = %L, email = %L, password = %L
                         where id = %L`, shift, name, email, hashedPassword, id)
    console.log(psql)
    return db.query(psql)

}

exports.deleteOperatorById = (req) => {
    const {id} = req.body
    const psql = format('delete from app.Operator where id = %L', id)
    return db.query(psql)
}

// masih knop gara-gara array
exports.addOperator = (req, hashedPassword) => {

    const {shift, name, email} = req.body

    const dbquery = format('insert into app.Operator (shift, name, email, password) values (%L, %L, %L, %L)',shift, name, email, hashedPassword, gender, phone, address)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}