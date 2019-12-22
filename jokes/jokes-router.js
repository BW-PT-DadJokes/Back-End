const router = require("express").Router();
const Jokes = require("./jokes-model.js");
const restricted = require("../auth/restricted-middleware.js");

// add joke
router.post("/", restricted, (req, res) => {
  let joke = req.body;

  Jokes.addJoke(joke)
    .then(joke => {
      res.status(201).json(joke);
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
router.get("/", restricted, (req, res) => {
  Jokes.findJoke()
    .then(jokes => {
      res.status(200).json(jokes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Could not get private jokes" });
    });
});

// get joke by id
router.get("/", restricted, (req, res) => {
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

  Jokes.update(body, id)
    .then(updatedJoke => {
      if (updated) {
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

  Jokes.remove(id)
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
