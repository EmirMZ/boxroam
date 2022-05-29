
//pusat kendali penyajian api dan frontend.
//jika ada request, maka akan di route ke /routes

const express = require('express');
const bodyParser = require("body-parser");
var app = express()
var path = require('path');  
var logger = require('morgan');
const {PORT, CLIENT_URL} = require("./constants")
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// import passport middleware
require('./middlewares/passport-middleware')
// initialize middleware
app.use(logger('dev'));
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: CLIENT_URL, credentials: true}))
app.use(passport.initialize())
app.set('views', path.join(__dirname, './views'))

app.use(function(req, res, next) {
    //res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'");
    res.setHeader("Content-Security-Policy", "");
    return next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/js-cookie/dist')))
app.use('/css', express.static(path.join(__dirname, '../node_modules/animate.css')))



// import routes
var authRoutes = require('./routes/auth')
var frontEnd = require('./routes/frontend')
var busRoutes = require('./routes/busRoutes')
var transactionRoutes = require('./routes/transactionRoutes')
var station = require('./routes/station')
var userRoutes = require('./routes/userRoutes')
var operatorRoutes = require('./routes/operatorRoutes')
var bookingRoutes = require('./routes/bookingRoutes')

app.use('/', frontEnd)
app.use('/api', authRoutes)
app.use('/bus', busRoutes)
app.use('/transaction', transactionRoutes)
app.use('/api', station)
app.use('/user', userRoutes)
app.use('/operator', operatorRoutes)
app.get('/homeAdmin', (req, res) => {
    res.render("index")
})

app.use('/api', bookingRoutes)

const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`App is runnning in port ${PORT}`)
        })
    } catch(error){
        console.log(`Error: ${error.message}`)
    }
}

appStart()