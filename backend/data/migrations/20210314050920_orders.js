exports.up = function (knex) {
  return knex.schema.createTable("orders", (tbl) => {
    tbl.increments();

    tbl.string("customer", 255).notNullable();

    tbl.date("date").notNullable();

    tbl.string("method").notNullable();

    tbl.decimal("subtotal", 4, 2).notNullable();

    tbl.decimal("tip", 4, 2).notNullable();

    tbl.decimal("tax", 4, 2).notNullable();

    tbl.decimal("total", 4, 2).notNullable();

    tbl.string("address", 255);

    tbl.string("phone_number").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};
