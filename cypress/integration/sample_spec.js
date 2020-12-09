describe('My first Test', () => {
    it('Visits kitchen sink', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
    })
})