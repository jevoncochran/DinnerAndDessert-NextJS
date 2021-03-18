exports.up = function (knex) {
  return knex.schema.createTable("order_details", (tbl) => {
    tbl.increments();

    tbl
      .integer("order_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("orders")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("item_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("menu_items")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.integer("quantity").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("order_details");
};
