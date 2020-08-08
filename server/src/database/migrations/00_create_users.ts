import Knex from 'knex';
//Faz alterações
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('bio').notNullable()
    })
}
// Desfaz alterações, caso de algum problema
export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
}