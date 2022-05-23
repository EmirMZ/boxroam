const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

let connectionString = process.env.DATABASE_URL;
if(process.env.INIT == 1){
  connectionString = process.env.DATABASE_CREATE_URL;
}

const db = new pg.Pool({
  connectionString,
});


module.exports = db;
