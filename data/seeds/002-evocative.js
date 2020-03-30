
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('evocative_feeling').del()
    .then(function () {
      // Inserts seed entries
      return knex('evocative_feeling').insert([
        {id: 1, ethos: 'I never thought of it like that before'},
        {id: 2, ethos: 'I wonder why...'},
        {id: 3, ethos: 'I wonder how...'},
        {id: 4, ethos: 'redeeming value'},
        {id: 5, ethos: 'feel good'}
      ]);
    });
};
