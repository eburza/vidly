const express = require('express')
const router = express.Router() 

//define a route 
router.get('/', (req, res) => {
    res.render('index', {title: 'Vidly', message: 'Welcome in Vidly'})
}) 

module.exports = router