import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

Given('Navigate to the web site', () => {
    cy.visit('/')
})

When('Login with empty username and pass', () => {
    cy.get('[data-test="login-button"]').click()
})

When('Login with correct username and pass', () => {
    cy.loginUser(standardUser.username, standardUser.password)
})

Then('Error message should be visible', () => {
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
})

Then('Open Products page', () => {
    cy.get('.title').contains('Products')
})

Then('Logout user', () => {
    cy.logoutUser()
})