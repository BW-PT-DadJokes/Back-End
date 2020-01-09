const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// const authenticate = require("../auth/restricted-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const jokesRouter = require("../jokes/jokes-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/jokes", jokesRouter);

server.get("/", (req, res) => {
  res
    .status(200)
    .json({ api: "up" })
    .send("Server live");
});

module.exports = server;
