
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books-ethos').del()
    .then(function () {
      // Inserts seed entries
      return knex('books-ethos').insert([
        {id: 1, book_id: 1, ethos_id: 2},
        {id: 2, book_id: 1, ethos_id: 3},     
        {id: 3, book_id: 2, ethos_id: 1},
        {id: 4, book_id: 2, ethos_id: 4},
        {id: 5, book_id: 2, ethos_id: 5},
        {id: 6, book_id: 3, ethos_id: 1},     
        {id: 7, book_id: 3, ethos_id: 4},
        {id: 8, book_id: 4, ethos_id: 2},
        {id: 9, book_id: 4, ethos_id: 3},
        {id: 10, book_id: 5, ethos_id: 1},     
        {id: 11, book_id: 5, ethos_id: 4},
        {id: 12, book_id: 6, ethos_id: 2},
        {id: 13, book_id: 6, ethos_id: 4},
        {id: 14, book_id: 7, ethos_id: 4},     
        {id: 15, book_id: 7, ethos_id: 5},
        {id: 16, book_id: 3, ethos_id: 5}      
      ]);
    });
};
