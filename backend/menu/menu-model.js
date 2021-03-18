const db = require("../data/dbConfig");

module.exports = {
  getFullMenu,
  getTodaysMenu,
  addMenuItem,
  findMenuItemById,
  editMenuItem,
};

function getFullMenu() {
  return db("menu_items");
}

function getTodaysMenu() {
  return db("menu_items").where("available_today", 1);
}

function addMenuItem(menuItem) {
  return db("menu_items")
    .insert(menuItem, "id")
    .then((ids) => {
      const [id] = ids;
      return findMenuItemById(id);
    });
}

function findMenuItemById(id) {
  return db("menu_items").where({ id }).first();
}

function editMenuItem(changes, id) {
  return db("menu_items")
    .where({ id })
    .update(changes)
    .then(() => {
      return findMenuItemById(id);
    });
}
