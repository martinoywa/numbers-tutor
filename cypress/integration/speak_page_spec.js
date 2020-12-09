const { cyan } = require("color-name")

describe('Speak page', () => {
    it('loads successfully', () => {
        cy.visit('/speak')
    })
})