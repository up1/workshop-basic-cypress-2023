describe('Login success flow', () => {
    beforeEach(()=> {
      cy.visit('https://demo-login-workshop.vercel.app/')
      cy.get('#username_field').should('be.visible')
      cy.get('[data-test="username_field"]').should('be.visible')
    })
  
    it('Success with username and password', () => { 
      // Act
      cy.login('demo', 'mode')
      // Assert
      cy.get('[data-test="page_name"]').should('include.text','Welcome Page')
      cy.get('[data-test="result"]').should('include.text', 'Login succeeded. Now you can logout.')
    })
  
    
  })