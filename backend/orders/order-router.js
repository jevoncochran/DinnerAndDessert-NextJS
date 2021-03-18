const express = require("express");
const router = express.Router();

const orders = require("./order-model");

// gets all orders
router.get("/", (req, res) => {
  orders
    .getAllOrders()
    .then((o) => {
      res.status(200).json(o);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A server error has occurred" });
    });
});

router.get("/:orderId", (req, res) => {
  const { orderId } = req.params;

  orders
    .findOrderById(orderId)
    .then((o) => {
      res.status(200).json(o);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A server error has occurred" });
    });
});

router.post("/", (req, res) => {
  let order = req.body;

  orders
    .addOrder(order)
    .then((o) => {
      res.status(201).json(o);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A server error has occurred" });
    });
});

router.post("/details", (req, res) => {
  let newRow = req.body;

  orders
    .addOrderDetails(newRow)
    .then((row) => {
      res.status(201).json(row);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A server error has occurred" });
    });
});

router.get("/:orderId/display", (req, res) => {
  const { orderId } = req.params;

  orders
    .displayOrder(orderId)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "A server error has occurred" });
    });
});

module.exports = router;
