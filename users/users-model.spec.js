const Users = require("./users-model.js");
const db = require("../database/db-config.js");

describe("users model", () => {
  describe("add", () => {
    it("should add a new user to the db", async () => {
      await Users.add({ username: "jessica", password: "password1" });
      await Users.add({ username: "paulina", password: "password2" });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });

    beforeEach(async () => {
      await db("users").truncate();
    });
  });

  describe("find", () => {
    it("should find all the users", async () => {
      let users = await Users;
    });
  });
});
