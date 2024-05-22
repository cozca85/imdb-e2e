// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
/*
Cypress.Commands.add('getYesterdayMMDD',(date) =>
{
    let yesterday = new Date(date);
    yesterday.setDate(date.getDate - 1);
    const formattedDate = `${yesterday.getMonth() + 1}-${yesterday.getDate()}}`;
    cy.log('yesterday is ' + formattedDate);
    return formattedDate;
})
*/
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })