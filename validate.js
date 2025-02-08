const Joi = require('joi')

function validateGenere(genere) {
    const schema = {
        name: Joi.string().min(3).require()
    }

    return Joi.validate(genere, schema)
}

module.exports = validateGenere