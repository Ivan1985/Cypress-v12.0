/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

// POM
import { LogIn } from '../../support/pom-objects/LogIn.cy'
import { ProductTitle } from '../../support/pom-objects/Products.cy'
import { SideMenuButton } from '../../support/pom-objects/Header.cy'

// Fixtures
import { productTitle } from '../../fixtures/constProducts.cy'

describe('Side Menu', function () {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it.only('1. Verify Side Menu Items', function () {
        cy.loginUser(standardUser.username, standardUser.password)
        cy.get(ProductTitle.constProductTitle).contains(productTitle.title)
        cy.get(SideMenuButton.constMenuButton).click()
        cy.sideMenuItems()
        cy.get(".bm-cross-button").click()
        cy.get(".bm-menu-wrap")
            .invoke('attr', 'aria-hidden')
            .should('eql', 'true')
            // test commit
    });

});