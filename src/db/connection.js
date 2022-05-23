const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

let connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({
  connectionString,
});

module.exports = db;
