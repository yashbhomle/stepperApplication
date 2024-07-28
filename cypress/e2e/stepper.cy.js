/// <reference types="cypress" />

describe("End to end test case for stepper application", () => {
  it("Home Page validation", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='mainTitle']").should(
      "contain",
      "Welcome to banking application"
    );
    cy.get("[data-cy='startBtn']").should("have.text", "Let's Start");
    cy.get("[data-cy='startBtn']").click();
    cy.get("[data-cy='stepperStep1']").should("have.text", "Personal Details");
    cy.get("[data-cy='stepperStep2']").should("have.text", "Asset Details");
    cy.get("[data-cy='stepperStep3']").should("have.text", "Terms & Condition");
    cy.get("[data-cy='firstName']").type("Yash");
    cy.get("[data-cy='lastName']").type("Bhomle");
    cy.get("[data-cy='email']").type("xyz@gmail.com");
    cy.get("[data-cy='personalDetailBtn']").click();
    cy.get("[data-cy='assetName']").type("SOV31");
    cy.get("[data-cy='assetNumber']").type("123456");
    cy.get("[data-cy='assetDetailBtn']").click();
    cy.get("[data-cy='termsBtn']").click();
  });
});
