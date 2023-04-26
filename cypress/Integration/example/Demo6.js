/// <reference types="Cypress" />

describe("Mouse Action",()=>{
    it('mouse hover',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#mousehover').invoke('show'); 
        cy.contains('Top').click({force:true});
        cy.get('#mousehover').trigger('mouseover'); 

       })
       it.skip('Drag and Drop', ()=>{
        cy.visit('https://demoqa.com/droppable/');
        cy.get("").trigger('mousedown',{which: 1});
        cy.get("").trigger('mousemove').trigger('mouseup',{force:true});
       
       })
       
       it("Scroll",()=>{
        cy.visit('https://en.wikipedia.org/wiki/Maasai_people');
       })
})