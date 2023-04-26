
describe('Books API',()=>{
    it('Authentication',()=>{
        cy.request({
            method: 'POST',
            url: `https://simple-books-api.glitch.me/api-clients/`,
            headers: {
                accept: 'application/json'
            },
            body: {
                clientName: `Amit${Math.random()}`,
                clientEmail: "amit" + Math.random() + "@gmail.com",
            },
        }).then((response) => {
            expect(response.status).to.eql(201);
            let responseBody = JSON.stringify(response.body);
            cy.log("responseBody", responseBody);
        })
    })
})

