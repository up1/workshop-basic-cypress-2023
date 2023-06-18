import datas from "../fixtures/login-fails.json"

describe('Login fail spec', () => {
  datas.forEach( data => {
    it(data.test_case, () => {
      // Arrange
      cy.visit('https://demo-login-workshop.vercel.app')
      
      // Act
      cy.get('#username_field').should('be.visible').type(data.usename)
      cy.get('#password_field').should('be.visible').type(data.password)
      cy.get('#login_button').should('be.visible').click()
  
      // Assert
      cy.get('#container > h1').contains('Error Page').should('be.visible')
      cy.get('#container > p').contains('Login failed. Invalid user name and/or password.').should('be.visible')
    })
  })
  
})