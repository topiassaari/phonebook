describe("Phonebook", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3001");
    cy.contains("Phonebook");
  });
  // it("can filter", function () {
  //   cy.visit("http://localhost:3001");
  //   cy.get("#filter").type("Te");
  //   cy.contains("Test");
  // });
  it("can add new number", function () {
    cy.visit("http://localhost:3001");
    cy.get("#name").type("jee");
    cy.get("#number").type("0123456789");
    cy.get("#submit").click();
    cy.contains("jee 0123456789");
  });
  it("can delete a number", function () {
    cy.contains("delete").click();
  });
});
