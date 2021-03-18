const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const restricted = require("../auth/auth-middleware");

const menuRouter = require("../menu/menu-router");
// const inquiryRouter = require("../inquiries/inquiries-router");
const authRouter = require("../auth/auth-router");
const orderRouter = require("../orders/order-router");
// const reviewRouter = require("../reviews/review-router");

const server = express();

server.use(cors());
server.use(express.json());

// server.get("/hash", (req, res) => {
//     const authentification = req.headers.authentification;

//     const hash = bcrypt.hashSync(authentification, 8);

//     res.json({ originalValue: authentification, hashedValue: hash });
//   });

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/menu", menuRouter);
// server.use("/api/inquiries", inquiryRouter);
server.use("/api/auth", authRouter);
server.use("/api/orders", orderRouter);
// server.use("/api/reviews", reviewRouter);

module.exports = server;
