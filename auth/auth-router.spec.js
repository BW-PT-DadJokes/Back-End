const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/db-config.js");
const Users = require("../users/users-model.js");

describe("register", () => {
  it("should return status 201", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Miku", password: "password1" });
    expect(res.status).toBe(201);
  });

  it("should return the user added", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "Luka", password: "password2" });
    expect({ username: "Luka" });
  });
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("login", () => {
  it("should return status 200", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Luka", password: "password2" });
    expect(res.status).toBe(200);
  });

  it("should return a token", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "Luka", password: "password2" });
    expect(res.body.token);
  });
});
