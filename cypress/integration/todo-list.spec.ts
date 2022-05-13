/// <reference types="cypress" />

const todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];

context("todo list", () => {
  before(() => {
    cy.visit("../../components/todo-list.html");
  });

  it("should add four items", () => {
    cy.get("[data-cy=todo-item]").should("have.length", 0);
    cy.get("[data-cy=todo-counter]").should("not.exist");

    for (const todo of todos) {
      cy.get("[data-cy=todo-input]").type(todo);
      cy.get("[data-cy=todo-submit]").click();
    }

    cy.get("[data-cy=todo-item]").should("have.length", 4);
    cy.get("[data-cy=todo-counter]").should("have.text", 4);
  });

  it("should remove an item", () => {
    cy.get("[data-cy=todo-item]").first().find("[data-cy=todo-delete]").click();

    cy.get("[data-cy=todo-item]").should("have.length", 3);
    cy.get("[data-cy=todo-counter]").should("have.text", 3);
  });
});
