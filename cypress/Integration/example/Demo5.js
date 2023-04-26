/// <reference types="Cypress" />

describe("Checkbox",( )=>{
    it.skip('Dropdown',()=>{
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('select').select('option3').should('have.value', 'option3');
    })
    it.skip('Dynamic Dropdown/Autocomplete',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()=="India"){
                cy.wrap($el).click();
            }
            cy.get('#autocomplete').should('have.value','India');
        })
    })
    it.skip('Visible or not visible feature',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    })
     it.skip('Alear with to option to click',()=>{
        cy.visit('https://demoqa.com/alerts');
        cy.get('#confirmButton').click();
        // cy.get('#show-textbox').click();
        // cy.get('#displayed-text').should('be.visible');
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('Hello , are you sure you want to confirm?')
            return false;
        })
    })
    it.skip('Multiple tabs',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();
    })

    it.only('Multiple tabs',()=>{
        
        cy.origin('https://rahulshettyacademy.com/AutomationPractice/',()=>{
        cy.visit('/') 
       });
       cy.origin('https://getcssscan.com/css-box-shadow-examples',()=>{
        cy.visit('/') 
       });
     
    })
})