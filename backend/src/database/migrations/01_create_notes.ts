import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('notes', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('text').defaultTo('').notNullable();
    table.boolean('star').notNullable();
    table.boolean('done').notNullable();
    table.boolean('isTodo').notNullable();
    table.timestamp('create_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    .notNullable();

   
    
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('notes');

} 