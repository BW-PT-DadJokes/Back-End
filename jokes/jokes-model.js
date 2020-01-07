const db = require("../database/db-config.js");

module.exports = {
  addJoke,
  findJoke,
  findJokeBy,
  findJokeById,
  updateJoke,
  deleteJoke
};

function findJoke() {
  return db("jokes");
}

function findJokeBy(filter) {
  return db("jokes").where(filter);
}

async function addJoke(joke) {
  const [id] = await db("jokes").insert(joke, "id");

  return findJokeById(id);
}

function findJokeById(id) {
  return db("jokes")
    .where({ id })
    .first();
}

function updateJoke(updatedJoke, id) {
  return db("jokes")
    .where({ id })
    .update(updatedJoke);
}

function deleteJoke(id) {
  return db("jokes")
    .where({ id })
    .del();
}
