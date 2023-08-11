import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// const standardUser = Cypress.env('standardUser')
// const lockedOutUser = Cypress.env('lockedOutUser')

import { ProductItems } from '../support/pom-objects/Products.cy.js';

Then('Adding All Items to Cart', () => {
    cy.addToCart(ProductItems.constAddToCartBackpack)
    cy.addToCart(ProductItems.constAddToCartTShirt)
    cy.addToCart(ProductItems.constAddToCartOnesie)
    cy.addToCart(ProductItems.constAddToCartBikeLight)
    cy.addToCart(ProductItems.constAddToCartFleeceJacket)
    cy.addToCart(ProductItems.constAddToCartTShirtRed)
})