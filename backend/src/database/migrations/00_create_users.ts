import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('password').defaultTo('123').notNullable();
    table.boolean('email').notNullable();
    table.timestamp('create_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    .notNullable();

    
  })
}

export async function down(knex: Knex){
  return knex.schema.dropTable('users');

} 