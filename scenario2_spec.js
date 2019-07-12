describe('Scenario One', function() {
 it('Opens the William Hill web page', function() {
    cy.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false
})
	
	cy.visit('sports.williamhill.com/betting/en-gb/')
	//Takes a while to load cookie disclaimer so wait 20 seconds
	
	
	//cy.get('#joinLink').should('exist')
	
	 // Select language and change to Duetsch
    cy.get('.js-language-button').click()
	cy.get('#de > span').click()
	
	cy.get('#joinLink').should('contain', 'Anmelden')
	
	//Select language and change to Greek
	cy.get('.js-language-button').click()
	cy.get('#el > span').click()
	
	cy.get('#joinLink').should('contain', 'Εγγραφή')
	
	//Select language and change to Japanese
	cy.get('.js-language-button').click()
	cy.get('#ja > span').click()
	
	cy.get('#joinLink').should('contain', '登録')
  })
})