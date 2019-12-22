const db = require("../database/db-config.js");

module.exports = {
  addJoke,
  findJoke,
  findJokeBy,
  findJokeById
};

function findJoke() {
  return db("jokes");
}

function findJokeBy(filter) {
  return db("jokes").where(filter);
}

async function addJoke(joke) {
  const [id] = await db("jokes").insert(joke);

  return findJokeById(id);
}

function findJokeById(id) {
  return db("jokes")
    .where({ id })
    .first();
}
