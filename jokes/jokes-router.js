const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

const Users = require("../users/users-model.js");
const Jokes = require("./jokes-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.post("/", restricted, (req, res) => {
  let joke = req.body;
  let user_id = req.body.user_id;

  Users.findById(user_id)
    .then(
      Jokes.addJoke(joke)
        .then(newJoke => {
          res.status(201).json({ created_joke: newJoke });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json(error);
        })
    )
    .catch(error => {
      console.log(error);
      res.status(404).json({ message: "no user found" });
    });
});