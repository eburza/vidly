const generes = require('./generes')
const validate = require('./validate')
const express = require('express')
const app = express()
app.use(express.json())

//define route
app.get('/', (req, res) => {
    res.send('Hello')
    res.end()
})

app.get('/api/generes', (req, res) => {
    res.send(generes)
    res.end()
})

app.get('/api/generes/:id', (req, res) => {
    const genere = generes.find( el => el.name === parseInt(req.params.name))
    if (!genere) return res.status(404).send('Genere with that name was not found')
    
    res.send(genere)
})

app.post('/api/generes', (req, res) => {
    const genere = {
        id: generes.length + 1,
        name: req.body.name
    }

    generes.push(genere)
    res.send(genere)
})

//listen on a port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`))