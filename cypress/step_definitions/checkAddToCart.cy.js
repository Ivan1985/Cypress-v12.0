import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// const standardUser = Cypress.env('standardUser')
// const lockedOutUser = Cypress.env('lockedOutUser')

import { ProductItemsCucumber } from '../support/pom-objects/Products.cy.js';

Then('Adding All Items to Cart', () => {
    cy.addToCart(ProductItemsCucumber.constAddToCartBackpack)
    cy.addToCart(ProductItemsCucumber.constAddToCartTShirt)
    cy.addToCart(ProductItemsCucumber.constAddToCartOnesie)
    cy.addToCart(ProductItemsCucumber.constAddToCartBikeLight)
    cy.addToCart(ProductItemsCucumber.constAddToCartFleeceJacket)
    cy.addToCart(ProductItemsCucumber.constAddToCartTShirtRed)
})