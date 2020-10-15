const express = require("express");
const helmet = require("helmet");
const shiaRouter = require("../api/router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/shia", shiaRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
