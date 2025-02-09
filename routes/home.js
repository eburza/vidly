const express = require('express')
const router = express.Router()

//define route
router.get('/', (req, res) => {
    res.send('Hello')
    res.end()
})

module.exports = router