const express = require('express')
const bookEthosRoutes = express.Router()

const BookEthos = require('./book-ethos-models')

bookEthosRoutes.get("/", (req, res) => {
    BookEthos.getBookEthos()
        .then(results => res.status(200).json(results))
        .catch(err => res.status(500).json(err))
})

module.exports = bookEthosRoutes