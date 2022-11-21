// Include this file if you want to use custom commands or overwrite existing commands
beforeEach(() => {
  cy.login();
});

afterEach(() => {
  cy.logout();
});