import "../support/commands";

describe("Add favorites test", () => {
    it("Favorites places button loads correctly", () => {
      cy.get('.title-small').should("contain", "Lugares favoritos").should('exist');
    });

    it("Add favorite", () => {   
      cy.get('.title-small').should("contain", "Lugares favoritos").click({ multiple: true });

      cy
      .get("*[class^='md button button-small button-solid ion-activatable ion-focusable hydrated']")
      .click();

      cy.get('input[name="input"]').type('Parque');
      cy.get('li', { timeout: 10000 }).should('exist').first().click();
      cy.get('input[name="name"]').type('Casa');

      cy
      .get("*[class^='btn btn-success md button button-solid ion-activatable ion-focusable hydrated']")
      .click();
      
      cy.wait(1500);

      cy.get("*[class^='sc-ion-label-md-h sc-ion-label-md-s md hydrated']")
      .should('exist')
      
      //Asserts

      cy.url().should("include", "/favorites-list");
      cy.get("*[class^='md button button-small button-solid ion-activatable ion-focusable hydrated']").should("exist");

    });

    it("Duplicated favorite", () => {
      cy.get('.title-small').should("contain", "Lugares favoritos").click({ multiple: true });
      cy.wait(1000);

      for(var place = 0; place < 2; place++){
        cy
        .get("*[class^='md button button-small button-solid ion-activatable ion-focusable hydrated']")
        .click();

        cy.get('input[name="input"]').type("Alajuela");
        cy.get('li', { timeout: 10000 }).should('exist').first().click();
        cy.get('input[name="name"]').type("Casa de mi madre");

        cy
        .get("*[class^='btn btn-success md button button-solid ion-activatable ion-focusable hydrated']")
        .click();
        
        cy.wait(1000);
      }
      cy.url().should("not.include", "/favorites-list");
    });

    it("Add favorites", () => {  
      cy.get('.title-small').should("contain", "Lugares favoritos").click({ multiple: true });
      cy.wait(1000);
      var places = [
        {
          name: 'Casa',
          location: 'Parque'
        },
        {
          name: 'Trabajo',
          location: 'San Jose'
        },
        {
          name: 'Escuela',
          location: 'Universidad'
        },
        {
          name: 'Buen restaurante',
          location: 'Dominos'
        },
        {
          name: 'Casa de mi novia',
          location: 'Heredia'
        }
      ]
      for(var place = 0; place < 5; place++){
        cy
        .get("*[class^='md button button-small button-solid ion-activatable ion-focusable hydrated']")
        .click();

        cy.get('input[name="input"]').type(places[place].location);
        cy.get('li', { timeout: 10000 }).should('exist').first().click();
        cy.get('input[name="name"]').type(places[place].name);

        cy
        .get("*[class^='btn btn-success md button button-solid ion-activatable ion-focusable hydrated']")
        .click();
      
        cy.wait(1500);

        cy.get("*[class^='sc-ion-label-md-h sc-ion-label-md-s md hydrated']")
        .should('exist')
      
        //Assert
        cy.url().should("include", "/favorites-list");
        cy.get("*[class^='md button button-small button-solid ion-activatable ion-focusable hydrated']").should("exist");
      }
      
    });
  });