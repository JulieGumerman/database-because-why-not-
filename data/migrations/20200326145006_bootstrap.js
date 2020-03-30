
exports.up = function(knex) {
  return knex.schema.createTable("books", table => {
      table.increments();
      table.string("book_title")
      .notNullable()
      .unique();
  }).createTable("evocative_feeling", table => {
      table.increments();
      table.string("ethos");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("evocative_feeling").dropTableIfExists("books");
};
