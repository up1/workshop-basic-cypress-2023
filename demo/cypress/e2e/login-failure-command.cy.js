import datas from "../fixtures/login-fails.json"

describe('Login fail spec', () => {
  datas.forEach( data => {
    it(data.test_case, () => {
      // Arrange
      cy.visit('https://demo-login-workshop.vercel.app')
      
      // Act
      cy.login(data.usename, data.password)
  
      // Assert
      cy.get('#container > h1').contains('Error Page').should('be.visible')
      cy.get('#container > p').contains('Login failed. Invalid user name and/or password.').should('be.visible')
    })
  })
  
})