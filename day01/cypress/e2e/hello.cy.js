describe('Search with google.com', () => {
  beforeEach(()=> {
    cy.visit('/')
  })

  it('Success with load first page', () => { 
    cy.get('#APjFqb').should('be.visible')
    cy.get('[name="q"]').should('be.visible')
  })

  it('Success with search by keyword=cypress', () => {
    // Act
    // cy.get('[name="q"]').type('cypress') // Hard code
    cy.get('[name="q"]').type(Cypress.env('keyword')) // Read from env
    cy.get('[name="q"]').type('{enter}')
    // Assert
    cy.get('#result-stats').should('be.visible')
    cy.get('#result-stats').contains('ผลการค้นหาประมาณ')
    cy.get('#result-stats').should('include.text', 'ผลการค้นหาประมาณ')
  })
  
})