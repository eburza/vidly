const express = require('express')
const app = express()
const debug = require('debug')('app:startup')
const { MongoClient } = require('mongodb');
require('dotenv').config()

//routes
const home = require('./src/routes/home')
const genres = require('./src/routes/genres')

//middleware
const logger = require('./src/middleware/logger')
const authenticator = require('./src/middleware/authenticator')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)
app.use(authenticator)

//routes
app.use('/', home)
app.use('/api/genres', genres)

//debug
if (app.get('env') === 'development') {
    debug('Startup debugger enabled...')
}

//listen on a port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`))