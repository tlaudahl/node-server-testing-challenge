const db = require('../data/db-config');

module.exports = {
    insert,
    remove,
    find
}

function find() {
    return db('games')
}

function insert(game) {
    return (
        db('games').insert(game, "id")
        .then(ids => {
            const id = ids[0]
            return db('games')
            .where({ id })
            .first();
        })
    )
};

function findById(id) {
    return db('games')
    .where({ id })
    .first()
    .then(game => game ? game : null)
}

function remove(id) {
    return db('games').where({ id }).del().then(id => id);
}