/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('Types into Google Search', () => {
    cy.get('.gLFyf.gsfi')
      .type('Googlethisautomaticly').should('have.value', 'Googlethisautomaticly')
    cy.get('.FPdoLc > center > .gNO89b')
      .click()
  })

  it('.Shows the google Logo', () => {
    cy.get('.gLFyf.gsfi')
  })

})
