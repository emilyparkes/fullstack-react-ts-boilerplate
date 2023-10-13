/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('fruits').del()
  await knex('fruits').insert([
    { id: 1, name: 'banana', rating: 5 },
    { id: 2, name: 'pear', rating: 8 },
    { id: 3, name: 'plum', rating: 7 },
  ])
}