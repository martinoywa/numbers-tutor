describe('HomePage', () => {
    it('successfully loads', () => {
        cy.visit('/index')
    })
    it('contains the write button', () => {
        cy.get('.buttons').find('>a')
        cy.contains('Write')
    })
    it('contains the Voice button', () => {
        cy.get('.buttons').find('>a')
        cy.contains('Voice')
    })
})