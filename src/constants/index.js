var path = require('path');
//require('dotenv').config({ path: path.join(__dirname, '../../vars.env') })
require('dotenv').config()

//konfigurasi dari .env disiapin kesini
module.exports = {
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET: process.env.SECRET,
    DATABASE_URL: process.env.DATABASE_URL
}