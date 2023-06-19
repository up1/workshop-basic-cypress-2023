describe('template spec', () => {

  it('passes 01', () => {
    cy.visit('/')
    cy.get('#APjFqb').should('be.visible')
    cy.get('[name="q"]').should('be.visible')
  })
  

})