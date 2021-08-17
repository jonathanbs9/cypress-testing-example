// first_test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


  describe('Test Irontec.com', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.irontec.com/')
    })
    
    it('Visitar sección "Nosotros"', () => {
        const someText = "El software no es solo software."
        cy.contains( 'Nosotros' ).click({force:true});
        
        cy.url().should( 'include', '/nosotros' );
        
        cy.get('p:nth-child(3)')
            .should('contain',someText)
        
    })

    
  })