///<reference types="Cypress"/>


describe("Assignment",()=>{
it('Greencard Application',()=>{
cy.visit("https://rahulshettyacademy.com/seleniumPractise");

cy.get('.product:visible').should('have.length',4);
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
})
});