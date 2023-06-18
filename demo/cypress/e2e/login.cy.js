describe('template spec', () => {
  it('passes', { tags: ['login'] }, () => {

    // Arrange
    cy.visit('https://demo-login-workshop.vercel.app')
    
    // Act
    cy.get('#username_field').should('be.visible').type('demo')
    cy.get('#password_field').should('be.visible').type('mode')
    cy.get('#login_button').should('be.visible').click()

    // Assert
    cy.contains('Login succeeded. Now you can logout.')
      .should('be.visible')

    cy.get('#container > h1').contains('Welcome Page').should('be.visible')
    cy.get('#container > p').contains('Login succeeded. Now you can logout.').should('be.visible')
  })
})