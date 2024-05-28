/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"
slowCypressDown()

describe("Post Testing", () => {
  const loginUrl = `${Cypress.env("VITE_FRONTEND_URL")}/login`

  beforeEach(() => {
    cy.visit(loginUrl)
    cy.get("input[name=\"email\"]").type("email@email.com")
    cy.get("input[name=\"password\"]").type("password123")
    cy.get("button[type=\"submit\"]").click()

    cy.get("[data-testid=redirect-link]").first().click()
  })

  it("should delete a post", () => {
    // Click on the first post's delete button
    cy.get(".list-group-item").should("exist")
    cy.get(".list-group-item")
      .first()
      .get("[data-testid=delete-button]")
      .first()
      .click()

    // Confirm deletion
    cy.contains("Delete").should("exist")
    cy.contains("button", "Accept").click()

    cy.wait(500)

    cy.get(".list-group-item").should("have.length", 9)
  })

  it("should edit a post", () => {
    cy.get(".list-group-item")
      .first()
      .get("[data-testid=edit-button]")
      .first()
      .click()

    // Verify Modal
    cy.contains("Edit Post").should("exist")

    // Edit data
    const newTitle = "New Post Title"
    const newBody = "This is the edited body of the post."
    cy.get("input[name=\"title\"]").clear().type(newTitle)
    cy.get("textarea[name=\"body\"]").clear().type(newBody)

    // Submit the edit form
    cy.contains("button", "Edit").click()

    // Verify new data
    cy.get(".list-group-item").should("contain", newTitle)
    cy.get(".list-group-item").should("contain", newBody)
  })
})
