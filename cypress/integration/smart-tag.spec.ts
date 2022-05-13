/// <reference types="cypress" />
context("smart tag", () => {
  beforeEach(() => {
    cy.visit("../../components/smart-tag.html");
  });

  it("should show popup on over", () => {
    cy.get("[data-cy=tag-popup]").should("not.be.visible");
    cy.get("[data-cy=tag]").trigger("mouseover");
    cy.get("[data-cy=tag-popup]").should("be.visible");
  });

  it("should not show popup on out", () => {
    cy.get("[data-cy=tag]").trigger("mouseover");
    cy.get("[data-cy=tag]").trigger("mouseout");
    cy.get("[data-cy=tag-popup]").should("not.be.visible");
  });
});
