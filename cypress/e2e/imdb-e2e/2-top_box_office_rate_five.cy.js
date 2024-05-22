describe('Top box office movie tests', () => {
    
    beforeEach(() => {
      // runs before each test in the block
      cy.clearAllLocalStorage()
      //baseURL main page access
      cy.visit('')
      //handle user preferences
      cy.get('[data-testid="accept-button"]').click()
    })
  
    it('Rates a top box movie with 5 stars', () => {  
      // menu
      cy.get('[id="imdbHeader-navDrawerOpen"]').click()
      //navigate to top box office list 
      cy.get('[data-testid="category-expando"]').contains('Movies').click()
      cy.get('.ipc-list-item__text').contains('Top Box Office').click()
      //choose 2nd item
      cy.get(':nth-child(2) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .sc-b189961a-0 > .ipc-title > .ipc-title-link-wrapper > .ipc-title__text').click()
      // locate and click on rating 
      cy.get('.sc-92625f35-11 > .sc-3a4309f8-0 > .sc-3a4309f8-1 > [data-testid="hero-rating-bar__user-rating"] > .ipc-btn > .ipc-btn__text > .sc-acdbf0f3-3 > .sc-4f0b1185-0 > [data-testid="hero-rating-bar__user-rating__unrated"]').click()
      //give it 5 stars and rate it
      cy.get('.ipc-starbar__rating').find('[aria-label="Rate 5"]').click('center',{ force: true });
      cy.get('.ipc-rating-prompt__rating-container > .ipc-btn > .ipc-btn__text').contains('Rate').click()
      //sign in here or implement before test with before()
  })
})

