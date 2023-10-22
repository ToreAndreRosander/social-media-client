describe('User Logout', () => {
    it('should allow the user to log out', () => {
     
      cy.visit('/');
  
      // Fill in the login form with valid credentials
      cy.get('#loginEmail').type('validemail@example.com');
      cy.get('#loginPassword').type('validpassword');
      cy.get('#loginForm').submit();

      // Click the logout button
      cy.get('[data-auth="logout"]').click();
  
      // Check that the user is logged out and redirected to the login page
      cy.url().should('include', '/'); 
    });
  });
  