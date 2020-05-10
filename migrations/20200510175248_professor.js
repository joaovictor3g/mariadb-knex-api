
exports.up = function(knex) {
    return knex.schema.createTable('professor', table => {
        table.increments();
        table.string('name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('aluno');
};
