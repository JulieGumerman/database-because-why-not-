const db = require('../data/dbconfig')

const getBookEthos = () => {
    return db("books-ethos as be")
        .join('books as b', 'be.book_id', 'b.id')
        .join('evocative_feeling as ef', 'be.ethos_id', 'ef.id')
        .select('b.book_title', 'ef.ethos')
}


module.exports = {
    getBookEthos
}