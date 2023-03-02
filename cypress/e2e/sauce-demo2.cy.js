describe('Sauce Demo tests', () => {
  it('Adding product to the cart', () => {

  cy.fixture('example.json').then((data) => {

        cy.visit('https://saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()


        for(let i = 0; i < 6; i++) {
            cy.get('button.btn_inventory').eq(i).click()
        }

        cy.get('.shopping_cart_link').click()
        for(let i = 0; i < 6; i++) {
            cy.get('div.cart_item').eq(i).should('be.visible')
        }
//
//        cy.get('div.inventory_item_name').eq(0).should('have.text', data.itemTitleObj[0])
//        cy.get('div.inventory_item_name').eq(1).should('have.text', data.itemTitleObj[1])
//        cy.get('div.inventory_item_name').eq(2).should('have.text', data.itemTitleObj[2])
//        cy.get('div.inventory_item_name').eq(3).should('have.text', data.itemTitleObj[3])
//        cy.get('div.inventory_item_name').eq(4).should('have.text', data.itemTitleObj[4])
//        cy.get('div.inventory_item_name').eq(5).should('have.text', data.itemTitleObj[5])


//        for(let i = 0; i < data.itemTitleObj.length; i++) {
//          cy.get('div.inventory_item_name').eq(i).should('have.text', data.itemTitleObj[i])
//       }


        for(let i = 0; i < data.items.length; i++) {
            cy.get('div.inventory_item_name').eq(i).should('have.text', data.items[i].title)
            cy.get('div.inventory_item_desc').eq(i).should('have.text', data.items[i].desc)
            cy.get('div.inventory_item_price').eq(i).should('have.text', data.items[i].price)
        }
  })
})




   xit('Adding product to the cart', () => {
      cy.visit('https://saucedemo.com')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()

  //    cy.get('button.btn_inventory').eq(0).click()
  //    cy.get('button.btn_inventory').eq(1).click()
  //    cy.get('button.btn_inventory').eq(2).click()
  //    cy.get('button.btn_inventory').eq(3).click()
  //    cy.get('button.btn_inventory').eq(4).click()
  //    cy.get('button.btn_inventory').eq(5).click()

      for(let i = 0; i < 6; i++) {
          cy.get('button.btn_inventory').eq(i).click()
      }

      cy.get('.shopping_cart_link').click()
      for(let i = 0; i < 6; i++) {
          cy.get('div.cart_item').eq(i).should('be.visible')
      }
    })
})
