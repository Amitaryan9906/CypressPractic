

describe('Testing the API of Trello',()=>{
    const token = "ATTAc9523160cd9d918d3b41b8834918024e86cadca8e57f408b8b9766f17c3a21af9BC3A426";
    const apiKey = "0db963d80ffc2a5f2002f14a8fbd46bf";
    
    it('Create a Board',()=>{
      cy.request({
        method: "POST",
        url: `https://api.trello.com/1/boards/?name=BOARD2&key=${apiKey}&token=${token}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    const boardId = "644772f7b7af2f3035227fba";

it('Delete a Board',()=>{
  cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${token}`
  }).then((response) => {
      expect(response.status).to.eq(200);
  })
})

    
})