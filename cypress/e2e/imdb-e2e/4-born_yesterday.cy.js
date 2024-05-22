describe('Birthdate celebrity tests', () => {
    
    beforeEach(() => {
      // runs before each test in the block
      cy.clearAllLocalStorage()
      //baseURL main page access
      cy.visit('')
      //handle user preferences
      cy.get('[data-testid="accept-button"]').click()
  })

  it('Finds the celebrity born yesterday and picks the 3rd name', () => {
    // menu
    cy.get('[id="imdbHeader-navDrawerOpen"]').click()
    cy.get('[data-testid="category-expando"]').contains('Celebs').click()
    cy.get('.ipc-list-item__text').contains('Born Today').click()
    // close today's birthday pane
    cy.get('button:contains("Birthday")').click()
    let formattedDate = 'MM-DD'
    cy.window().then((win) => {
        const newDate = new Date(win.Date());
        let yesterday = new Date(win.Date());
        yesterday.setDate(newDate.getDate() - 1);
        if((yesterday.getMonth() + 1) < 10 ){
            formattedDate = '0'+`${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
        } else
        {
            formattedDate = `${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
        }
        cy.log(formattedDate)
        cy.get('[data-testid="accordion-item-birthdayAccordion"]').click()
        cy.get('[data-testid="birthday-input-test-id"]').click().type(formattedDate).type("{enter}").should('have.value', formattedDate)
        cy.get('[data-testid="adv-search-get-results"]').click({force: true})
    })
    //click on 3rd name and take a screenshot
    cy.get('.ipc-title__text').contains('3.').click()
    cy.screenshot({ capture: 'viewport' })
  })
})