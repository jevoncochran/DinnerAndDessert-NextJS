exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("order_details")
  // .truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("order_details").insert([
    { order_id: 1, item_id: 12, quantity: 1 },
    { order_id: 2, item_id: 13, quantity: 1 },
    { order_id: 2, item_id: 8, quantity: 1 },
    { order_id: 3, item_id: 8, quantity: 2 },
    { order_id: 4, item_id: 8, quantity: 2 },
    { order_id: 4, item_id: 9, quantity: 1 },
  ]);
  // });
};
