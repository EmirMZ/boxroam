//koneksi awal database
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

//koneksi awal database
let connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({
  connectionString,
});

module.exports = db;
