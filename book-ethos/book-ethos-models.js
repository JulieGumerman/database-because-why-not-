const db = require('../data/dbconfig')

const getBookEthos = () => {
    return db("book-ethos")
}


module.exports = {
    getBookEthos
}