exports.up = function (knex) {
  return knex.schema.createTable("menu_items", (tbl) => {
    tbl.increments();

    tbl.string("item", 100).notNullable();

    tbl.string("description", 255);

    tbl.decimal("price", null).notNullable();

    tbl.string("dinner_or_dessert").notNullable();

    tbl.string("category");

    tbl.string("image", 255);

    tbl.boolean("available_today");

    tbl.integer("count");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("menu_items");
};
