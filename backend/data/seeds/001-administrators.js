const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("administrators").insert([
    {
      name: "Jevon Cochran",
      username: "jevonc",
      email: "jevon.cochran@gmail.com",
      password: bcrypt.hashSync("cochran", 8),
    },
    {
      name: "Kendra Carpenter",
      username: "kendrac",
      email: "kendra.carpenter@gmail.com",
      password: bcrypt.hashSync("carpenter", 8),
    },
    {
      name: "Maurice Benjamin",
      username: "mauriceb",
      email: "maurice.benjamin@gmail.com",
      password: bcrypt.hashSync("benjamin", 8),
    },
  ]);
  // });
};
