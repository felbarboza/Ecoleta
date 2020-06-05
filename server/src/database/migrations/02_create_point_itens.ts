import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('point_itens', table=>{
    table.increments('id').primary();
    table.string('point_id').notNullable().references('id').inTable('points');
    table.string('item_id').notNullable().references('id').inTable('itens');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point_itens');
}