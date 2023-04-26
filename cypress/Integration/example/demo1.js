///<reference types="Cypress"/>

describe('This is my Suit collection for OrangeHRM',  () =>{
it('This is my first test', () =>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
cy.get("[name='username']").type('Admin')
cy.get("[name='password']").type('admin123')
cy.get(".oxd-button").click();
cy.get(".oxd-userdropdown-icon").click();
cy.contains("Logout").click();

});
it('',()=>{
cy.visit("https://automationteststore.com/");

})
});