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
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Expects to be in login page
Cypress.Commands.add("login", () => {
  cy.visit(Cypress.env("login_url"));
  cy.get("input[name='email']").type(Cypress.env("testUser").email);
  cy.get("input[name='password']").type(Cypress.env("testUser").pwd);

  let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
  btn_login.first().click();
});

Cypress.Commands.add("logout", () => {
  cy.visit("/edit-information");
  cy.wait(5000);
  let btn_logout = cy.get("ion-button").last();
  btn_logout.click({ force: true });
});

Cypress.Commands.add("verifyToastMsg", (message) => {
  cy.get("ion-toast")
    .should("exist")
    .shadow()
    .contains(".toast-message", message);
});