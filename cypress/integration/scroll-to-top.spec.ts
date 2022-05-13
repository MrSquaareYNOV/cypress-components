/// <reference types="cypress" />
context("scroll to top", () => {
  beforeEach(() => {
    cy.visit("../../components/scroll-to-top.html");
  });

  it("should show button on scroll", () => {
    cy.get("[data-cy=scroll-to-top]").should("not.be.visible");
    cy.scrollTo("bottom");
    cy.get("[data-cy=scroll-to-top]").should("be.visible");
  });

  it("should scroll to top", () => {
    cy.scrollTo("bottom");
    cy.get("[data-cy=scroll-to-top]").click();
    cy.window().its("scrollY").should("be.equal", 0);
  });
});
