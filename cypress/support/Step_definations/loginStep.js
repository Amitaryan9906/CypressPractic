import {Before ,Given, When,And, Then} from "cypress-cucumber-preprocessor/steps";

Given('open the browser and Navigatento the Login Page',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(2000);
})
When("Enter username {word}",(name)=>{
    cy.get("[name='username']").type(name);
})
When("Enter the Name {word}",(password)=>{
    cy.get("[name='password']").type(password);
    cy.wait(2000);
})

When("Click on the Login",()=>{
    cy.get(".oxd-button").click();
})

Then('Login should be Successful',(firstword, lastword)=>{
    const fullmassage =firstword+" "+lastword;
    cy.log(fullmassage);
})