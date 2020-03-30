
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, book_title: 'A Short History of Nearly Everything', author: 'Bill Bryson', description: 'Bill Bryson explores not only science but the people who have studied it.'},
        {id: 2, book_title: 'Everyone\'s a Aliebn When Ur a Aliebn Too', author: 'Colin Woodard', description: 'This is an allegorical tale of an alien who comes to earth to learn about humans'},
        {id: 3, book_title: 'A Gentleman in Moscow', author: 'Amor Towles', description: 'A man lives the second half of his life under house arrest in a hotel in Moscow.'},
        {id: 4, book_title: 'Hidden Life of Trees', author: 'Peter Wohlleben', description: 'This book uses the latest research to describe how trees support each other in ways similar to human families.'},
        {id: 5, book_title: 'Circe', author: 'Madeleine Miller', description: 'Circe, the infamous witch, describes her time in exile.'},
        {id: 6, book_title: 'Republic of Pirates', author: '', description: 'For 100 years, the pirates and privateers of the Caribbean forged a uniquely democratic society.'},
        {id: 7, book_title: 'The Graveyard Book', author: 'Neil Gaiman', description: 'A young boy, hunted by the hitman who killed his family, receives protection from the ghosts in the graveyard.'} 
      ]);
    });
};
