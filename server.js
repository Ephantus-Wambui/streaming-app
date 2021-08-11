const express = require('express')
const MongoStore = require('connect-mongo')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/youtubeClone', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

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
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/youtubeClone' })
}))

// logging middleware

app.use( (req, res, next) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var method = req.method;
    var url = req.url;

    console.log("IP " + ip + " " + method + " " + url);
    next();
});

const homePageController = require('./controllers/homePage')
const uploadVideoController = require('./controllers/uploadVideo')
const storeVideoController = require('./controllers/storeVideo')
const getVideoController = require('./controllers/getVideo')
const signUpController = require('./controllers/signUp')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

app.get('/', homePageController)
app.get('/uploadVideo', uploadVideoController)
app.post('/post/video', storeVideoController)
app.get('/viewVideo/:slug', getVideoController)
app.get('/auth/signUp', signUpController)
app.post('/user/signup', storeUserController)
app.get('/auth/login', loginController)
app.post('/user/login', loginUserController)
app.use((req, res) => res.render('notFound'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
