describe('User Login and Access Profile', () => {
    it('should log in and access the user profile', () => {
        cy.visit('/'); 
    
        // Fill in the login form with valid credentials
        cy.get('#loginEmail').type('validemail@example.com', { force: true });

        cy.get('#loginPassword').type('validpassword', { force: true });
        cy.get('#loginForm').submit();
    
        // Check that the user is logged in and can access their profile
        cy.get('.profile-button').should('exist');
    });
});
  