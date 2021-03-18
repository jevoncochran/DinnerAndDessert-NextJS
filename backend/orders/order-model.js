const db = require("../data/dbConfig");

module.exports = {
  getAllOrders,
  findOrderById,
  addOrder,
  addOrderDetails,
  findOrderDetailsById,
  displayOrder,
};

function getAllOrders() {
  return db("orders");
}

function findOrderById(id) {
  return db("orders").where({ id }).first();
}

// function findOrderById(id) {
//   return db("orders as o")
//     .select(
//       "o.id as order_id",
//       "o.customer",
//       "o.date",
//       "o.method",
//       "o.address",
//       "o.phone_number",
//       "mi.item",
//       "od.quantity"
//     )
//     .join("order_details as od", "o.id", "od.order_id")
//     .join("menu_items as mi", "od.item_id", "mi.id")
//     .where("o.id", id);
// }

function addOrder(order) {
  return db("orders")
    .insert(order, "id")
    .then((ids) => {
      const [id] = ids;
      return findOrderById(id);
    });
}

function addOrderDetails(row) {
  return db("order_details")
    .insert(row)
    .then((ids) => {
      const [id] = ids;
      return findOrderDetailsById(id);
    });
}

function findOrderDetailsById(id) {
  return db("order_details").where({ id }).first();
}

function displayOrder(id) {
  return db("orders as o")
    .select(
      "o.id as order_id",
      "o.customer",
      "o.date",
      "o.method",
      "o.address",
      "o.phone_number",
      "mi.item",
      "od.quantity"
    )
    .join("order_details as od", "o.id", "od.order_id")
    .join("menu_items as mi", "od.item_id", "mi.id")
    .where("o.id", id);
}
