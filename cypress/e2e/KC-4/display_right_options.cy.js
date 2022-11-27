describe("Display Right Options Tests", () => {

    const logIn = () => {
        cy.visit(Cypress.env("login_url"));
        cy.get("input[name='email']").type(Cypress.env("newCreatedUser").email);
        cy.get("input[name='password']").type(Cypress.env("newCreatedUser").pwd);
        cy.get("ion-button").should("contain", "Iniciar sesión").first().click()
    }

    it("load_the_four_options_correctly_when_enter", () => {
        logIn()

        cy.get('.md > #container > div > .sc-ion-input-md-h > .native-input').click()

        // Punto de partida

        cy.get('.md > app-autocomplete-place:nth-child(1) > .item-interactive > .controls > .native-input').should('be.visible')


        // Punto de destino

        cy.get('.md > app-autocomplete-place:nth-child(2) > .item-interactive > .controls > .native-input').click().should('be.visible')



        cy.get('.md > .md > .md > .ion-untouched > .ng-untouched').should('be.visible')


        cy.get('ion-label').contains('Costo aproximado').should('be.visible');
    });

});