import search from '../fixtures/search.json'
describe('Search with google.com', () => {

  it('Success with search by keyword=cypress', () => {
    cy.visit('/')
    // Act
    cy.get('[name="q"]').type(search.keyword)
    cy.get('[name="q"]').type('{enter}')
    // Assert
    cy.get('#result-stats').should('be.visible')
    cy.get('#result-stats').contains('ผลการค้นหาประมาณ')
    cy.get('#result-stats').should('include.text', 'ผลการค้นหาประมาณ')
  })
  
})