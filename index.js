const home = require('./routes/home')
const genres = require('./routes/genres')
const logger = require('./middleware/logger')
const authenticator = require('./middleware/authenticator')

const debug = require('debug')('app:startup')
const express = require('express')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)
app.use(authenticator)

//routes
app.use('/', home)
app.use('/api/genres', genres)

//templating engine
app.set('view engine', 'pug')
app.set('views', './views')

//debug
if (app.get('env') === 'development') {
    debug('Startup debugger enabled...')
}

//listen on a port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`))