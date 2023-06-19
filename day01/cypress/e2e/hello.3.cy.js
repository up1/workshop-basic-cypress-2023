import datas from '../fixtures/search.json'
describe('Search with google.com', () => {

  datas.forEach( data => {
    it(data.case_name, () => {
      cy.visit('/')
      // Act
      cy.get('[name="q"]').type(data.keyword)
      cy.get('[name="q"]').type('{enter}')
      // Assert
      cy.get('#result-stats').should('be.visible')
      cy.get('#result-stats').contains('ผลการค้นหาประมาณ')
      cy.get('#result-stats').should('include.text', 'ผลการค้นหาประมาณ')
    })
  })

  
  
})