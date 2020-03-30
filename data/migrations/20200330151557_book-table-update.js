
exports.up = function(knex) {
    return knex.schema.table("books", table => {
        table.string("author")
        table.text("description")
    })
};

exports.down = function(knex) {
    return knex.schema.table("books")
};
