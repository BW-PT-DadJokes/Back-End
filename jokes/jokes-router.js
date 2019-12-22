const router = require("express").Router();
const Jokes = require("./jokes-model.js");
const restricted = require("../auth/restricted-middleware.js");

const jwt = require("jsonwebtoken");

// add joke
router.post("/", restricted, (req, res) => {
  const joke = req.body;
  console.log(joke);

  Jokes.addJoke(joke)
    .then(saved => {
      res.status(201).json({ created_joke: saved });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Could not add joke" });
    });
});

// get all public jokes
router.get("/", (req, res) => {
  Jokes.findJoke()
    .then(jokes => {
      res.status(200).json(jokes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Could not get public jokes" });
    });
});

// get all private jokes
router.get("/userJokes", restricted, (req, res) => {
  // const user_id = req.decodedJWT.subject;
  // console.log(user_id);

  // Jokes.findJokeBy({ user_id })
  //   .then(jokes => {
  //     res.status(200).json(jokes);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     res.status(500).json({ message: "Could not get private jokes" });
  //   });
  const id = req.decodedJWT.subject;

  db("jokes as j")
    .where("j.user_id", id)
    .then(jokes => res.status(200).json(jokes))
    .catch(err => res.status(500).json({ error: err }));
});

// get joke by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Jokes.findJokeById(id)
    .then(joke => {
      res.status(200).json(joke);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Could not get joke" });
    });
});

// edit joke
router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Jokes.updateJoke(body, id)
    .then(updatedJoke => {
      if (updatedJoke) {
        res.status(200).json({ message: "Joke updated" });
      } else {
        res.status(404).json({ message: "Joke not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Could not update joke" });
    });
});

// delete joke
router.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;

  Jokes.deleteJoke(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: "Joke deleted" });
      } else {
        res.status(404).json({ message: "Joke not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Could not delete joke" });
    });
});

module.exports = router;
