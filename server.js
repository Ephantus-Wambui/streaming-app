const express = require('express')
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

app.get('/', homePageController)
app.get('/uploadVideo', uploadVideoController)
app.post('/post/video', storeVideoController)
app.get('/viewVideo/:slug', getVideoController)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
