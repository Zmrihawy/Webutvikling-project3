describe('Search bar functionality', () => {
    it('Confirms the search on Macbook Pro', () => {

        // Go to this page
        cy.visit('http://localhost:3000/component-list')
            .get('input')
            .type('MacBook')
            .click()
            .should('have.value', 'MacBook')
            .get('.MuiButton-containedPrimary')
            .click()
            .get('.App')
            .contains("13-inch MacBook Pro");
    })
});