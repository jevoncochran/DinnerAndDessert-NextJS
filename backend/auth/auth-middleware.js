const db = require('../data/dbConfig');

module.exports = {
    findAdminBy
}

function findAdminBy(filter) {
    return db('administrators')
        .where(filter)
        .first()
}