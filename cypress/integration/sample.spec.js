/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Journal', () => {
	beforeEach(() => {
		cy.visit('https://personalpublication.herokuapp.com/');
	})

	it('has title', () => {
		cy.contains('Personal Publication');
	})

	it('takes you to login', () => {
		cy.get('.login').click()
		cy.contains('Login')
		cy.url().should('include', 'login')
	})

	it('should login with correct fields', () => {
		cy.get('.login').click()
		cy.contains('Login')
		cy.url().should('include', 'login')
		cy.get('input[name=userName]').type('KyleS')
		cy.get('input[name=password]').type('test123')
		cy.get('input[name=Submit]').click()
	})
});