
exports.seed = function(knex) {
      return knex('games').insert([
        {title: 'RDR2', rating: 'M'},
        {title: 'Rocket League', rating: 'T'},
        {title: 'ESO', rating: 'M'}
      ]);
};
