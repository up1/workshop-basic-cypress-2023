import users from '../fixtures/login.json'
describe('Login failure flow', () => {
    beforeEach(()=> {
      cy.visit('https://demo-login-workshop.vercel.app/')
      cy.get('#username_field').should('be.visible')
      cy.get('[data-test="username_field"]').should('be.visible')
    })
  
    for(let i=0; i<users.length; i++) {
      it('Success with username and password ' + (i+1), () => { 
        // Act
        cy.login(users[i].user, users[i].password)
        // Assert
        cy.get('[data-test="page_name"]').should('include.text','Error Page')
        cy.get('[data-test="result"]').should('include.text', 'Login failed. Invalid user name and/or password.')
      })
    }
  
    
  })