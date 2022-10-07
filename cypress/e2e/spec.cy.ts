describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click({ multiple: true, force: true });

    // The new url should include "/about"
    cy.url().should('include', '/about');

    cy.contains('h1', 'About Us');
  });
});
