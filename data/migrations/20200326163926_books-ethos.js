
exports.up = function(knex) {
    return knex.schema.createTable("books-ethos", table => {
        table.increments()
        table.integer("book_id")
            .references("id")
            .inTable("books")
        table.integer("ethos_id")
            .references("id")
            .inTable("evocative_feeling")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("books-ethos");
};
