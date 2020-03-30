const db = require("../data/dbconfig.js");

const books = () => {
    return db("books")
}

module.exports = {
    books
}