exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments("id");

      tbl
        .string("username", 128)
        .notNullable()
        .unique();

      tbl.string("password", 128).notNullable();
    })
    .createTable("jokes", tbl => {
      tbl.increments("id");

      tbl.string("question", 255).notNullable();

      tbl.string("punchline", 255).notNullable();

      // joke public or private defaults to false (public)
      tbl
        .string("private", 128)
        .notNullable()
        .defaultTo("false");

      tbl
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("jokes").dropTableIfExists("users");
};
