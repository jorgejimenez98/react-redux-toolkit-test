/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"
slowCypressDown()

describe("Header main", () => {
  const loginUrl = `${Cypress.env("VITE_FRONTEND_URL")}/login`
  const userEmail = "user@example.com"
  const userLocalStorageKey = Cypress.env("VITE_USER_LOCALSTORAGE_KEY")

  it("should log in successfully with any email, display user name in header, change Language and logout", () => {
    cy.visit(loginUrl)
    cy.get("input[name=\"email\"]").type(userEmail)
    cy.get("input[name=\"password\"]").type("password123")
    cy.get("button[type=\"submit\"]").click()

    // Check Header
    cy.get("header").contains(userEmail).should("exist")

    // Change language to Spanish
    cy.get(".dropdown-toggle").eq(0).click()
    cy.get(".dropdown-item").contains("Español").click()

    // Check if the language has changed
    cy.contains("Español").should("exist")
    cy.contains("Prueba frontend de React").should("exist")

    // Logout
    cy.get(".dropdown-toggle").eq(1).click()
    cy.contains("Logout").click()

    // Check if logout redirects to login page
    cy.url().should("include", "/login")

    // Check localStorage
    cy.window()
      .its("localStorage")
      .invoke("getItem", userLocalStorageKey)
      .should("be.null")
  })
})
