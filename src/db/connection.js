//koneksi awal database
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables



const config = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,     
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_DB,
  port: process.env.DATABASE_PORT,
  ssl: false
};

const db = new pg.Pool(config);
console.log('here')
module.exports = db;
