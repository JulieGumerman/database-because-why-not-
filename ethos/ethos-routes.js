const express = require("express")
const ethosRoute = express.Router()

const Ethos = require('./ethos-models')

ethosRoute.get("/", (req, res) => {
    Ethos.getEthos()
        .then(ethos => res.status(200).json(ethos))
        .catch(err => res.status(500).json(err))
})


module.exports = ethosRoute