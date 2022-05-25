const {Pool} = require('pg')
const vars = require("../constants/index")


let connectionString = vars.DATABASE_URL;

console.log(connectionString)

const pool = new Pool({
    connectionString
})

pool.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Database berhasil terkoneksi')
})


module.exports = {
    query: (text, params) => pool.query(text, params)
}