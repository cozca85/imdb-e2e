describe('Top 250 TV show tests', () => {
    
    beforeEach(() => {
      // runs before each test in the block
      cy.clearAllLocalStorage()
      //baseURL main page access
      cy.visit('')
      //handle user preferences
      cy.get('[data-testid="accept-button"]').click()
  })

    it('Display 2nd photo of Danny Trejo under Breaking Bad', () => {
     // menu
     cy.get('[id="imdbHeader-navDrawerOpen"]').click()
     cy.get('.navlinkcat__itemTitle').contains('TV Shows').click()
     //Top 250 TV shows
     cy.get('.ipc-list-item__text').contains('Top 250 TV Shows').click()
     //find Breaking Bad
     cy.get('.ipc-title-link-wrapper').contains('Breaking Bad').click()
     //find and click on photos
     cy.get('.ipc-title__text').contains('Photos').click()
     //filter for Danny Trejo photos
     cy.get('[data-testid="mv-gallery-button"]').click()
     cy.get('a[href*="title/tt0903747"]').contains('Danny Trejo').click()
     cy.get('[href="/title/tt0903747/mediaviewer/rm123229952?ref_=ttmi_mi_nm_sf_2"] > img').click()
     cy.log('Second photo of Danny Trejo in Breaking Bad is displayed')
    }) 
})
