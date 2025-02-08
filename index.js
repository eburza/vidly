const genres = require('./genres')
const validate = require('./validate')
const express = require('express')
const app = express()
app.use(express.json())

//define route
app.get('/', (req, res) => {
    res.send('Hello')
    res.end()
})

app.get('/api/genres', (req, res) => {
    res.send(genres)
    res.end()
})

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(el => el.id === parseInt(req.params.id))
    if (!genre) return res.status(404).send('Genre with that name was not found')
    
    res.send(genre)
})

//add new
app.post('/api/genres', (req, res) => {
    const { error } = validate(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }

    genres.push(genre)
    res.send(genre)
})

//update
app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(el => el.id === parseInt(req.params.id))
    if (!genre) return res.status(404).send('Genre with that name was not found')

    const { error } = validate(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }

    genre.name = req.body.name
    res.send(genre)
})

//delete
app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(el => el.id === parseInt(req.params.id))
    if (!genre) return res.status(404).send('Genre with that name was not found')

    const index = genres.indexOf(genre)
    genres.splice(index, 1)

    res.send(genre)
})

//listen on a port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`))