exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { id: 1, username: "test1", password: "password1" },
    { id: 2, username: "test2", password: "password2" },
    { id: 3, username: "test3", password: "password3" }
  ]);
};

//add cleaner and truncate
