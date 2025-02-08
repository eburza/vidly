const generes = require('./generes')
const express = require('express')
const app = express()

//define route
app.get('/', (req, res) => {
    res.send('Hello')
    res.end()
})

app.get('/api/generes', (req, res) => {
    res.send(generes)
    res.end()
})

//listen on a port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`))