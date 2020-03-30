const express = require("express");
const bookRoute = express.Router();

const Books = require("./book-models")

bookRoute.get("/", (req, res) => {
    Books.getBooks()
        .then(books => res.status(200).json(books))
        .catch(err => res.status(500).json(err))
})

module.exports = bookRoute;