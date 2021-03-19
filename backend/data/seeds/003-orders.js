exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("orders")
  // .truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("orders").insert([
    {
      customer: "Jevon Cochran",
      date: "12/05/2020",
      method: "pickup",
      subtotal: 25.0,
      tip: 5.0,
      tax: 1.5,
      total: 31.5,
      phone_number: "5104248976",
      status: "completed",
    },
    {
      customer: "Tanya Smith",
      date: "12/06/2020",
      method: "delivery",
      subtotal: 28.0,
      tip: 3.0,
      tax: 1.68,
      total: 37.68,
      phone_number: "3139763456",
      address: "17320 Pembroke Ave, Detroit, MI 48235",
      status: "completed",
    },
    {
      customer: "Rajan Bradley",
      date: "12/07/2020",
      method: "pickup",
      subtotal: 20.0,
      tip: 4.0,
      tax: 1.2,
      total: 25.2,
      phone_number: "5104248976",
      status: "completed",
    },
    {
      customer: "Lisa Latham",
      date: "12/08/2020",
      method: "pickup",
      subtotal: 30.0,
      tip: 4.0,
      tax: 1.8,
      total: 35.8,
      phone_number: "3134862345",
      status: "completed",
    },
  ]);
  // });
};
