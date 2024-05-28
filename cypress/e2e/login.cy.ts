/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"
slowCypressDown()

describe("Login", () => {
  const loginUrl = `${Cypress.env("VITE_FRONTEND_URL")}/login`
  const userLocalStorageKey = Cypress.env("VITE_USER_LOCALSTORAGE_KEY")

  beforeEach(() => {
    cy.visit(loginUrl)
  })

  it("should show error messages for required fields", () => {
    cy.get("button[type=\"submit\"]").click()
    cy.contains("This field is required")
  })

  it("should log in successfully with any emails", () => {
    cy.get("input[name=\"email\"]").type("user@example.com")
    cy.get("input[name=\"password\"]").type("password123")

    cy.get("button[type=\"submit\"]").click()

    cy.url().should("not.include", "/login")

    cy.window()
      .its("localStorage")
      .invoke("getItem", userLocalStorageKey)
      .should("not.be.null")
  })
})
