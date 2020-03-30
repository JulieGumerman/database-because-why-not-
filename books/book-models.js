const db = require("../data/dbconfig.js");

const getBooks = () => {
    return db("books")
}

module.exports = {
    getBooks
}