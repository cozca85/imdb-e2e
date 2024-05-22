describe('Celebrity born years ago tests', () => {
    
    beforeEach(() => {
        // runs before each test in the block
        cy.clearAllLocalStorage()
        //baseURL main page access
        cy.visit('')
        //handle user preferences
        cy.get('[data-testid="accept-button"]').click()
    })
  
    it('Finds the celebrity born 40 years ago today and chooses the 1st name', () => {
        // menu
         cy.get('[id="imdbHeader-navDrawerOpen"]').click()
         cy.get('[data-testid="category-expando"]').contains('Celebs').click()
         cy.get('.ipc-list-item__text').contains('Born Today').click()
        // close today's birthday pane
         cy.get('button:contains("Birthday")').click()
         cy.get('[data-testid="accordion-item-birthDateAccordion"]').click()
         //prepare dates inputs for from and to
         let formattedDate = 'YYYY-MM-DD'
         cy.window().then((win) => {
            let today = new Date(win.Date());
            if((today.getMonth() + 1) < 10 ){
                formattedDate = `${today.getFullYear() - 40}-`+'0'+`${today.getMonth() + 1}-${today.getDate()}`;
            } else
            {
                formattedDate = `${today.getFullYear() - 40}-`+`${today.getMonth() + 1}-${today.getDate()}`;
            }
            cy.log(formattedDate)
            cy.get('[data-testid="birthDate-start"]').click().type(formattedDate).should('have.value',formattedDate)
            cy.get('[data-testid="birthDate-end"]').click().type(formattedDate).should('have.value',formattedDate)
            //results
            cy.get('[data-testid="adv-search-get-results"]').click({force: true})
         })
         //click on the first name and take a screenshot
         cy.get('.ipc-title__text').contains('1.').click()
         cy.screenshot({ capture: 'viewport' })
    })
})