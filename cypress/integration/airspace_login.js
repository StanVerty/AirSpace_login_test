describe('login page test', function() {
    it('allows user to login using username and password', function() {
        cy.visit('/login');
        
        cy.get('h2')
            .invoke('text')
            .should('equal', 'Login Page');
        
        cy.get('#username')
            .type('tomsmith')
        
        cy.get('#password')
            .type('SuperSecretPassword!')

        cy.get('i.fa')
            .click()

        cy.get('h2')
            .invoke('text')
            .should('equal', ' Secure Area')

        cy.get('a.button')
            .click()
    });
});