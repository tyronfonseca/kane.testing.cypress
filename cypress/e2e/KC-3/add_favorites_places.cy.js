import "../support/commands";

describe("Add favorites test", () => {
    it("Favorites places button loads correctly", () => {
      cy.login();
      
      cy.get('.title-small').should("contain", "Lugares favoritos").click({ multiple: true });

      cy
      .get("*[class^='md button button-small button-solid ion-activatable ion-focusable hydrated']")
      .click();

      cy.get('input[name="input"]').type('Parque');
      cy.wait(1500);
      cy.get('li').first().click();
      cy.get('input[name="name"]').type('Casa');

      cy
      .get("*[class^='btn btn-success md button button-solid ion-activatable ion-focusable hydrated']")
      .click();
      
      cy.wait(1500);
      cy.url().should("include", 'favorites-list');
      
      cy.logout();
    });
  });