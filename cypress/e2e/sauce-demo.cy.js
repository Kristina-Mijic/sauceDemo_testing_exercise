describe('Sauce Demo tests', () => {
  it('Login', () => {
    cy.visit('https://saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

    cy.get('#first-name').type('Kristina')
    cy.get('#last-name').type('Test')
    cy.get('#postal-code').type('1234')
    cy.get('#continue').click()
    cy.get('#finish').click()

    cy.get('.complete-header').should("contain.text", "THANK YOU FOR YOUR ORDER")
  })
})