describe('template spec', () => {

  it('Success with load first page', () => {
    cy.visit('/')
    cy.get('#APjFqb').should('be.visible')
    cy.get('[name="q"]').should('be.visible')
  })

  it('Success with search by keyword=cypress', () => {
    // Arrange
    cy.visit('/')
    // Act
    cy.get('[name="q"]').type('cypress')
    cy.get('[name="q"]').type('{enter}')
    // Assert
    cy.get('#result-stats').should('be.visible')
    cy.get('#result-stats').contains('ผลการค้นหาประมาณ')
    cy.get('#result-stats').should('include.text', 'ผลการค้นหาประมาณ')
  })
  
})