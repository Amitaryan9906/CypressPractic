/// <reference types="Cypress" />
describe('Promise & Then',()=>{
it('First Application example on Promise and Then',()=>{
    cy.visit('https://automationteststore.com/');
    cy.get('.productName').contains('Skinsheen')
})
})