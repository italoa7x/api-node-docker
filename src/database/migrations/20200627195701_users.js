
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.string('id').primary()
      table.string('nome', 255)
      table.string('apelido', 100)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
