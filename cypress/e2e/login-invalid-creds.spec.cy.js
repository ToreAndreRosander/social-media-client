describe('Invalid Login Credentials', () => {
    it('should display an error message for invalid credentials', () => {
     
      cy.visit('/');
  
      // Fill in the login form with invalid credentials
      cy.get('#loginEmail').type('invalidemail@example.com');
      cy.get('#loginPassword').type('invalidpassword');
      cy.get('#loginForm').submit();
  
      // Check that an error message is displayed
      cy.get('.error-message').should('exist');
    });
  });
  