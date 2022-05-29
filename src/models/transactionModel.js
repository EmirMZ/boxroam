const db = require('../db/connection')
const format = require('pg-format')

exports.getTrans = () => {
    const psql = "select * from app.Transaction"
    return db.query(psql)
}

exports.getTransById = (id, req) => {
    const psql = format(`select * from app.Transaction where id = %L`, id) 
    return db.query(psql)
}

exports.updateTransById = (req) => {
    const {bank_transaction_number, price, date, id} = req.body
    const psql = format('update app.Transaction set bank_transaction_number = %L, price = %L, date = now() where id = %L', bank_transaction_number, price, id)
    console.log(psql)
    return db.query(psql)

}

exports.deleteTransById = (req) => {
    const {id} = req.body
    const psql = format('delete from app.Transaction where id = %L', id)
    return db.query(psql)
}

// masih knop gara-gara array
exports.addTrans = (req) => {

    const {bank_transaction_number, price, date} = req.body

    const dbquery = format('insert into app.Transaction (bank_transaction_number, price, date) values (%L, %L, now())', bank_transaction_number, price, date)
    console.log(dbquery)
    const psql = db.query (dbquery)
    return psql
   
}