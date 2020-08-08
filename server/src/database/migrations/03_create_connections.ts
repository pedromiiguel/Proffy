import Knex from 'knex';
//Faz alterações
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()




        //Relacionamento

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')// O que vai acontecer com id do usuario salvo dentro da tabela classes se esse id acabar sendo alterado , pq se alterar o id na tabela usuario , ele automaticamente reflete essa alteração em todos lugares que depende dessa informação 
            .onDelete('CASCADE') // O que vai acontecer com uma aula de um professor caso o professor seja deletado // CASCADE vai deletar as aulas desse professor

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })
}
// Desfaz alterações, caso de algum problema
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}