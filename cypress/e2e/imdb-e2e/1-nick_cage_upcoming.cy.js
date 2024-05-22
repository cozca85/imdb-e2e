describe('Nicholas Cage film page tests', () => {
    
    beforeEach(() => {
        // runs before each test in the block
        cy.clearAllLocalStorage()
        //baseURL main page access
        cy.visit('')
        //handle user preferences
        cy.get('[data-testid="accept-button"]').click()
    })

    it('Navigates to first upcoming movie of Nicholas Cage', () => {
      //search text for Nicholas Case 
      cy.get('[id="suggestion-search"]').clear().type('Nicholas Cage').should('have.value', 'Nicholas Cage');
      cy.get('[data-testid="search-result--const"]').contains('Face/Off (1997)').click()
      //assert we are on correct Nicholas Case page with his birthday
      cy.get('[data-testid="birth-and-death-birthdate"]').should('include.text','January 7, 1964')
      //find Upcoming titles and expand them
      cy.get('.ipc-inline-list__item').contains('Upcoming').click()
      // find first completed upcoming title 
      cy.get('[data-testid="nm_flmg_unrel_credit_actor_1"]').should('include.text','Completed').click()
      //get movie title for verification
      cy.get('[data-testid="hero__primary-text"]').should('to.not.be.empty').invoke('text').then((text) => {
        cy.log('Upcoming and completed move title for Nicholas Cage is: '+text)
    })
    })
  })
  