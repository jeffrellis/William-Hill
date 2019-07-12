describe('Scenario One', function() {
 it('Opens the William Hill web page', function() {
    cy.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false
})
	
	cy.visit('sports.williamhill.com/betting/en-gb/')
	//Takes a while to load cookie disclaimer so wait 20 seconds
	cy.wait(20000)
	
	cy.get('.cookie-disclaimer__text').should('exist')
	//Check that the cookie disclaimer button exists
	cy.get('.cookie-disclaimer__button').should('exist')

	//Now click on the Accept & close cookie disclaimer button
	cy.get('.cookie-disclaimer__button').click()
	
	//The cookie disclaimer button should have gone
	cy.get('.cookie-disclaimer__button').should('not.exist')
	
	//Assert the presence of the cdb cookie
	cy.getCookie('cdb').should('exist')
  
  })
})