exports.up = function(knex) {
    return knex.schema.createTable('prices', table => {
        table.increments('id').primary()
        table.string('cut').notNullable()
        table.string('price').notNullable()
        table.string('image').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('prices')
};
