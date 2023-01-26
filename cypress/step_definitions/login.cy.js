import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

Given('Navigate to web site', () => {
    cy.visit('/');
})

When('Enter login credentials', () => {
    cy.loginUser(standardUser.username, standardUser.password)
})

Then('Should be logged in', () => {
    
})

// Given('user is logged in', () => {
//     cy.visit('https://automationexercise.com/');
// })

// When('user navigate to {string} tab', (tabName) => {
//     cy.get('[data-test="nav-' + tabName + '-tab"]').click()
// });

// Then('user is on {string} tab', (tabName) => {
//     cy.get('[data-test="nav-' + tabName + '-tab"]')
//       .invoke('attr', 'aria-selected')
//       .should('eql', 'true')
//     cy.wait(2000)
// });