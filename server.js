// dotenv is used to load environment variables from .env file

require('dotenv').config()

const express = require('express')
const MongoStore = require('connect-mongo')
const app = express()
const morgan = require('morgan')

// Importing the fs and https modules -------------- STEP 1
const https = require("https");
const fs = require("fs");

// Read the certificate and the private key for the https server options 
// ------------------- STEP 2
const options = {
    key: fs.readFileSync("./config/server.key"),
    cert: fs.readFileSync("./config/server.crt"),
};

// mongoose used for connection to mongodb database using mongoose module

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error) => console.error(error))

db.once('open', () => console.log('Connected to Database'))

const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const expressSession = require('express-session')

app.use(expressSession({
    secret: 'keyboard cat',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL })
}))

// logging middleware

app.use(morgan('combined'));

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

const homePageController = require('./controllers/homePage')
const searchController = require('./controllers/search')
const uploadVideoController = require('./controllers/uploadVideo')
const storeVideoController = require('./controllers/storeVideo')
const getVideoController = require('./controllers/getVideo')
const signUpController = require('./controllers/signUp')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')

app.get('/', homePageController)
app.post('/search', searchController)
app.get('/uploadVideo', authMiddleware, uploadVideoController)
app.post('/post/video', authMiddleware, storeVideoController)
app.get('/:slug', getVideoController)
app.get('/auth/signUp', redirectIfAuthenticatedMiddleware, signUpController)
app.post('/user/signup', redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/user/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)
app.use((req, res) => res.render('notFound'))

// Create the https server by initializing it with 'options'
// -------------------- STEP 3
https.createServer(options, app).listen(process.env.PORT, () => {
    console.log(`HTTPS server started on port ${process.env.PORT}`);
});
