/// <reference types="cypress" />
context("modal", () => {
  beforeEach(() => {
    cy.visit("../../components/modal.html");
  });

  it("should open modal", () => {
    cy.get("[data-cy=modal-open]").click();
    cy.get("[data-cy=modal-container]").should("be.visible");
  });

  it("should close modal", () => {
    cy.get("[data-cy=modal-open]").click();
    cy.get("[data-cy=modal-container]").click(0, 0);
    cy.get("[data-cy=modal-container]").should("not.be.visible");
  });

  it("should modal have title", () => {
    cy.get("[data-cy=modal-open]").click();
    cy.get("[data-cy=modal-title]")
      .should("be.visible")
      .should("have.text", "Lorem Ipsum");
  });
});
