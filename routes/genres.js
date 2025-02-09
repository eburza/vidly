const movieGenres = require('../data/movieGenres')
const validate = require('../validation/validate')

const express = require('express')
const router = express.Router()

//define route
router.get('/', (req, res) => {
    res.send(movieGenres)
    res.end()
})

router.get('/:id', (req, res) => {
    const genre = movieGenres.find(el => el.id === parseInt(req.params.id))
    if (!genre) return res.status(404).send('Genre with that name was not found')
    
    res.send(genre)
})

//add new
router.post('/', (req, res) => {
    const { error } = validate(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }

    const genre = {
        id: movieGenres.length + 1,
        name: req.body.name
    }

    movieGenres.push(genre)
    res.send(genre)
})

//update
router.put('/:id', (req, res) => {
    const genre = movieGenres.find(el => el.id === parseInt(req.params.id))
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
router.delete('/:id', (req, res) => {
    const genre = movieGenres.find(el => el.id === parseInt(req.params.id))
    if (!genre) return res.status(404).send('Genre with that name was not found')

    const index = movieGenres.indexOf(genre)
    movieGenres.splice(index, 1)

    res.send(genre)
})

module.exports = router