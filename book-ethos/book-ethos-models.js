const db = require('../data/dbconfig')

const getBookEthos = () => {
    return db("books-ethos")
}


module.exports = {
    getBookEthos
}