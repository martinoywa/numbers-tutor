describe('Write Page', () => {
    it('successfully loads', () => {
        cy.visit('/write')
    })
    it('contains the main canvas area', () => {
        cy.get('.number-input').find('>canvas')
    })
    it('contains clear button', () => {
        cy.get('.write_number').find('>button')
        cy.contains('Clear')
    })
})