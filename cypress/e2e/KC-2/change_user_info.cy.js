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

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('65321254')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        cy.get('.md > div > .md > .item:nth-child(6) > .md').click()

        cy.contains('div', 'Efectivo').click()

        cy.contains('span', 'Actualizar').click()

        cy.get('.md > .md > .md:nth-child(2) > .ion-align-self-center > .md').click()
    }

    const updatedSuccessfully = () => {

        cy.intercept({
            method: 'POST',
            url: '  https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/*',
        }).as('updateInfo')

        cy.wait('@updateInfo').its('response.statusCode').should('eq', 200)
    }

    it("KC-13-1_should_update_info_successfully ", () => {
        //act
        enterProfilePage()


        cy.get('.md > div > .md > .item:nth-child(3) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').type(' Maria')


        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        updatedSuccessfully()

        cy.get('.md > div > .md > .item:nth-child(4) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').type(' Extra')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        updatedSuccessfully()

        cy.get('.md > div > .md > .item:nth-child(5) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('65431232')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        updatedSuccessfully()

        cy.get('.md > div > .md > .item:nth-child(6) > .md').click()

        cy.contains('div', 'Tarjeta').click()

        cy.contains('span', 'Actualizar').click()

        updatedSuccessfully()


        clearInputsAndLogOut()


    });

    const notUpdatedSuccessfullyInterceptor = () => {

        cy.intercept({
            method: 'POST',
            url: '  https://firestore.googleapis.com/google.firestore.v1.Firestore/Write/*',
        }).as('updateInfo')

        cy.wait('@updateInfo').its('response.statusCode').should('not.eq', 200)
    }

    it("KC-13-2_should_not_update_phone_with_alphabetic_values ", () => {
        //act
        enterProfilePage()


        cy.get('.md > div > .md > .item:nth-child(5) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('This must not be allowed')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        notUpdatedSuccessfullyInterceptor()

        // Clear
        cy.get('.md > div > .md > .item:nth-child(5) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('This must not be allowed')


    });



    it("KC-13-3_should_not_update_email_with_invalid_format ", () => {
        //act
        enterProfilePage()


        cy.get('.md > div > .md > .item:nth-child(2) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('kanecustomer01')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()

        notUpdatedSuccessfullyInterceptor()

        // Clear
        cy.get('.md > div > .md > .item:nth-child(2) > .md').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').click()

        cy.get('.form > div > .item-interactive > .ng-untouched > .native-input').clear().type('kanecustomer01@mailinator.com')

        cy.get('.md > div > .form > .buttons > .button:nth-child(2)').click()


    });
});