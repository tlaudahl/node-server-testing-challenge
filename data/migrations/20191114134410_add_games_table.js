
exports.up = function(knex) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments();
        tbl.string('title').unique().notNullable();
        tbl.string('rating', 2).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('games');
};
