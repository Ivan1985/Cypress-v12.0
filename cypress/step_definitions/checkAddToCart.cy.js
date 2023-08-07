import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// const standardUser = Cypress.env('standardUser')
// const lockedOutUser = Cypress.env('lockedOutUser')

import { ProductItemsCucumber } from '/Users/ivan.ignjatovic/CypressProjects/Cypress-v12.0/cypress/support/pom-objects/Products.cy.js';

Then('Adding All Items to Cart', () => {
    cy.addToCart(ProductItemsCucumber.constAddToCartBackpack)
    cy.addToCart(ProductItemsCucumber.constAddToCartTShirt)
    cy.addToCart(ProductItemsCucumber.constAddToCartOnesie)
    cy.addToCart(ProductItemsCucumber.constAddToCartBikeLight)
    cy.addToCart(ProductItemsCucumber.constAddToCartFleeceJacket)
    cy.addToCart(ProductItemsCucumber.constAddToCartTShirtRed)
})