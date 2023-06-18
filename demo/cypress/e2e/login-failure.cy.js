describe('Login fail spec', () => {
  it('Fail with wrong username', () => {
    // Arrange
    cy.visit('https://demo-login-workshop.vercel.app')
    
    // Act
    cy.get('#username_field').should('be.visible').type('demo2')
    cy.get('#password_field').should('be.visible').type('mode')
    cy.get('#login_button').should('be.visible').click()

    // Assert
    cy.get('#container > h1').contains('Error Page').should('be.visible')
    cy.get('#container > p').contains('Login failed. Invalid user name and/or password.').should('be.visible')
  })

  it('Fail with wrong password', () => {
    // Arrange
    cy.visit('https://demo-login-workshop.vercel.app')
    
    // Act
    cy.get('#username_field').should('be.visible').type('demo')
    cy.get('#password_field').should('be.visible').type('mode2')
    cy.get('#login_button').should('be.visible').click()

    // Assert
    cy.get('#container > h1').contains('Error Page').should('be.visible')
    cy.get('#container > p').contains('Login failed. Invalid user name and/or password.').should('be.visible')
  })
})