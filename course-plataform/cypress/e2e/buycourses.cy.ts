describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="email"]').type("jose@jose.com")
    cy.get('input[name="password"]').type("123456")
    cy.get('button[name="butao"]').click()
    cy.get(".go_somewhere").first().click()
    cy.get('button[name="compracurso"]').click()
    cy.get('input[name="cvc"]').type("123456")
    cy.get('input[name="expDate"]').type("123456")
    cy.get('input[name="CardNumber"]').type("123456")
    cy.get('button[name="comprei"]').click()
  })
})