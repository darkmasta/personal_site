var express = require('express')
var http = require('http')
var fs = require('fs')

const PORT = process.env.PORT || 5000

// lets require/import the mongodb native drivers.

var app = express()

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

var cons = require('consolidate')
app.engine('html', cons.swig)
app.use(express.static(__dirname + '/dist'))
app.set('views', __dirname + '/dist')
app.set('view engine', 'html')

/*
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
*/

app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))

// httpServer = http.createServer(app);
// httpsServer = https.createServer(https_options, app)

// httpServer.listen(PORT, hostname);
// httpsServer.listen(https_port, hostname)
