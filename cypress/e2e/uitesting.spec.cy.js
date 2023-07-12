const { should } = require("chai")

context('Sauce Demo UI Testing', () => {
  beforeEach(() => {
    cy.visit('http://www.uitestingplayground.com/',  {timeout: 15000})
  })
  

  it('Load delay', () => {
    cy.get('a[href="/loaddelay"]').click()
    cy.get('button.btn.btn-primary', {timeout: 300000}).should('be.visible')

  })

  it('Progress bar', () => {
    cy.get('a[href="/progressbar"]').click()
    cy.get('#startButton').click()
    cy.get('#progressBar', {timeout:1000000}).should('have.text', '75%')
    cy.get('#stopButton').click()

  })
})
 
  