describe('User Login', () => {
    it('Tests that a user logs in and checks cart', () => {
        cy.visit('http://localhost:3000/user')
            .get('input')
            .click()
            .type('test-user')
            .should('have.value', 'test-user')
            .get("button")
            .contains("Sign In")
            .click()
            .url()
            .should("equal", "http://localhost:3000/")
            .get('button')
            .contains('Cart')
            .click()
            .url()
            .should("equal", "http://localhost:3000/shopping-cart")
            .get('.App')
            .should("contain", "Test Component");
    });
});