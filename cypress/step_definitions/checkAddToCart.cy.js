import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// const ProductItems = {
//     constAddToCartBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
//     constAddToCartTShirt: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
//     constAddToCartOnesie: '[data-test="add-to-cart-sauce-labs-onesie"]',
//     constAddToCartBikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
//     constAddToCartFleeceJacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
//     constAddToCartTShirtRed: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
// }
const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

import ProductItems from '../../support/pom-objects/Products.json'

Then('Adding All Items to Cart', () => {
    cy.addToCart(ProductItems.constAddToCartBackpack)
    cy.addToCart(ProductItems.constAddToCartTShirt)
    cy.addToCart(ProductItems.constAddToCartOnesie)
    cy.addToCart(ProductItems.constAddToCartBikeLight)
    cy.addToCart(ProductItems.constAddToCartFleeceJacket)
    cy.addToCart(ProductItems.constAddToCartTShirtRed)
})