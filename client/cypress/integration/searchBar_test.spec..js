// This tests that if someone searches input words "MacBook" should get a hit on the "13-inch MacBook Pro" from the backend
describe('Search bar functionality', () => {
    it('Confirms the search on MacBook Pro', () => {
        cy.visit('http://localhost:3000/component-list')
            .get('input')
            .click()
            .type('MacBook')
            .should('have.value', 'MacBook')
            .get('.MuiButton-containedPrimary')
            .click()
            .get('.App')
            .should("contain", "13-inch MacBook Pro");
    })
});


describe('Gets a component from the database.', () => {
    it('Checks if a component exists in the database.', () => {
        cy.request('http://localhost:5000/api/component/5dac9bc861f6230305dae0c4')
            .its("body")
            .its("name")
            .should( "equal", "Iphone 11 Pro\n")
    });
});
