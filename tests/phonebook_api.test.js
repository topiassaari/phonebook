const mongoose = require("mongoose");
const Person = require("../models/persons");
const supertest = require("supertest");
const app = require("../index.js");
const helper = require("./test_helper");
const api = supertest(app);

describe("when persons the api returns", () => {
  beforeEach(async () => {
    await Person.deleteMany({});
    for (let person of helper.persons) {
      let personObject = new Person(person);
      await personObject.save();
    }
  });
  test("persons as json", async () => {
    await api
      .get("/api/persons")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
