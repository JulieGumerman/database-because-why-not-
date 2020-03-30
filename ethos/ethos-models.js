const db = require('../data/dbconfig')

const getEthos = () => {
    return db('evocative_feeling')
}

module.exports = {
    getEthos
}