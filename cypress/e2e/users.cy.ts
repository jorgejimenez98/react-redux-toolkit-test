/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"
slowCypressDown()

describe("Home Testing", () => {
  const loginUrl = `${Cypress.env("VITE_FRONTEND_URL")}/login`

  it("should see all users lists and redirect to posts details", () => {
    cy.visit(loginUrl)
    cy.get("input[name=\"email\"]").type("email@email.com")
    cy.get("input[name=\"password\"]").type("password123")
    cy.get("button[type=\"submit\"]").click()

    cy.wait(1000)

    // Check Title
    cy.contains("h1", "Users list").should("exist")

    // Click on User Posts and redirect
    cy.get(".list-group-item-action").should("exist")
    cy.get("[data-testid=redirect-link]").first().click()
    cy.url().should("include", "/user-posts/")
  })
})
