describe('Search with google.com', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '/complete/search*',
      },
      []
    ).as('search')
    cy.intercept(
      {
        method: 'GET',
        url: '/client_204*',
      },
      []
    ).as('client_204')
    cy.visit('/')
    cy.wait(['@search', '@client_204'])
  })

  it('Success with load first page', { tags: ['group01'] }, () => {
    cy.get('#APjFqb').should('be.visible')
    cy.get('[name="q"]').should('be.visible')
  })

})