import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('todos', table => {
    table.increments('id').primary();
    table.string('titleTodo').defaultTo('').notNullable();
    table.boolean('complete').defaultTo('').notNullable();

    table.integer('note_id')
    .references('id')
    .inTable('notes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    
    
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('todos');

} 