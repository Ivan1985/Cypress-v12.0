/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

// POM Objects
import { LogIn } from '../../support/pom-objects/LogIn.cy'

describe('Logout Page suite', function () {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it('1. Logout succesufully', function () {
        cy.loginUser(standardUser.username, standardUser.password)
        cy.logoutUser()
        cy.get(LogIn.constLogInButton).should('be.visible')
    });

});