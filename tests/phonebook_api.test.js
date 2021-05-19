const mongoose = require("mongoose");
const Person = require("../models/persons");
const app = require("../app.js");
const helper = require("./test_helper");
const request = require("supertest");

describe("when persons the api returns", () => {
  let server, agent;
  beforeAll(async (done) => {
    server = app.listen(3001, () => {
      agent = request.agent(server);
      done();
    });
  });

  test("persons as json", async () => {
    await Person.deleteMany({});
    for (let person of helper.persons) {
      let personObject = new Person(person);
      await personObject.save();
    }
    await agent
      .get("/api/persons")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  afterAll(async () => {
    mongoose.connection.close();
    if (server) {
      await server.close();
    }
  });
});
