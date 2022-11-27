describe("Change User Information Tests", () => {

    const enterProfilePage = () => {
        cy.visit(Cypress.env("login_url"));
        cy.get("input[name='email']").type(Cypress.env("testUser").email);
        cy.get("input[name='password']").type(Cypress.env("testUser").pwd);
        cy.get("ion-button").should("contain", "Iniciar sesión").first().click()
        cy.get('.toolbar-title-medium > .header > div > .photoUrl > img').click()
    }

    const clearInputsAndLogOut = () => {
        cy.get('.md > div > .md > .item:nth-child(3) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('Juana')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        cy.get('.md > div > .md > .item:nth-child(4) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('Mora')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        cy.get('.md > div > .md > .item:nth-child(5) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').type(' 32')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        cy.get('.md > div > .md > .item:nth-child(6) > .md').click()

        cy.contains('div', 'Efectivo').click()

        cy.contains('span', 'Actualizar').click()

        cy.get('.md > .md > .md:nth-child(2) > .ion-align-self-center > .md').click()
    }

    const updatedSuccesfully = () => {


        cy.intercept({
            method: 'POST',
            url: '  https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/*',
        }).as('updateInfo')

        cy.wait('@updateInfo').its('response.statusCode').should('eq', 200)
    }

    it("KC-13-1 ", () => {
        //act
        enterProfilePage()




        cy.get('.md > div > .md > .item:nth-child(3) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').type(' Maria')


        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        updatedSuccesfully()

        cy.get('.md > div > .md > .item:nth-child(4) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').type(' Extra')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        updatedSuccesfully()

        cy.get('.md > div > .md > .item:nth-child(5) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('65431232')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        updatedSuccesfully()

        cy.get('.md > div > .md > .item:nth-child(6) > .md').click()

        cy.contains('div', 'Tarjeta').click()

        cy.contains('span', 'Actualizar').click()

        updatedSuccesfully()


        clearInputsAndLogOut()


    });
});