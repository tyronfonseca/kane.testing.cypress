describe('register_user', function() {

    it('KC1-1_register_user_with_valid_data', function() {

        cy.visit('https://kane-customer.web.app/signup')

        cy.get('.md > .md:nth-child(1) > .ion-untouched:nth-child(1) > .ng-untouched > .native-input').click()

        cy.get('.md > .md:nth-child(1) > .item-interactive:nth-child(1) > .ng-untouched > .native-input').type('Alex Jesus')

        cy.get('.md > .md:nth-child(2) > .item-interactive > .ng-untouched > .native-input').type('Rodriguez Martinez')

        cy.get('.md > .md > .item-interactive:nth-child(2) > .ng-untouched > .native-input').type('alexjesusrodriguez@gmail.com')

        cy.get('.md > .md > .ion-untouched:nth-child(3) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(3) > .ng-untouched > .native-input').type('asdf1234')

        cy.get('.md > .md > .ion-untouched:nth-child(4) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(4) > .ng-untouched > .native-input').type('asdf1234')

        cy.get('.md > .md > .ion-untouched > .ng-untouched > .native-input').first().click()

        cy.get('.md > .md > .item-interactive > .ng-untouched > .native-input').last().type('88888888')

        cy.get('.md > .md > .md:nth-child(6) > .item-interactive > .md:nth-child(2)').click()

        cy.contains('div', 'Efectivo').click()

        cy.contains('button', 'OK').click()

        cy.contains('Crear cuenta').click()


        cy.intercept({
            method: 'POST',
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiG-IqGOgC_t5Rmw4zM_CcRi8PG5UtPXk',
        }).as('createAccount')

        cy.wait('@createAccount').its('response.statusCode').should('eq', 400 || 200)

    })

    it('KC1-2_not_able_to_register_user_with_invalid_password', function() {

        cy.visit('https://kane-customer.web.app/signup')

        cy.get('.md > .md:nth-child(1) > .ion-untouched:nth-child(1) > .ng-untouched > .native-input').click()

        cy.get('.md > .md:nth-child(1) > .item-interactive:nth-child(1) > .ng-untouched > .native-input').type('Alex Jesus')

        cy.get('.md > .md:nth-child(2) > .item-interactive > .ng-untouched > .native-input').type('Rodriguez Martinez')

        cy.get('.md > .md > .item-interactive:nth-child(2) > .ng-untouched > .native-input').type('alexjesusrodriguez@gmail.com')

        cy.get('.md > .md > .ion-untouched:nth-child(3) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(3) > .ng-untouched > .native-input').type('1')

        cy.get('.md > .md > .ion-untouched:nth-child(4) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(4) > .ng-untouched > .native-input').type('1')

        cy.get('.md > .md > .ion-untouched > .ng-untouched > .native-input').first().click()

        cy.get('.md > .md > .item-interactive > .ng-untouched > .native-input').last().type('88888888')

        cy.get('.md > .md > .md:nth-child(6) > .item-interactive > .md:nth-child(2)').click()

        cy.contains('div', 'Efectivo').click()

        cy.contains('button', 'OK').click()

        cy.contains('Crear cuenta').click()

        cy.get('#ion-input-4-lbl').should('exist')


    })


    it('KC1-3_not_able_to_register_user_with_invalid_email', function() {

        cy.visit('https://kane-customer.web.app/signup')

        cy.get('.md > .md:nth-child(1) > .ion-untouched:nth-child(1) > .ng-untouched > .native-input').click()

        cy.get('.md > .md:nth-child(1) > .item-interactive:nth-child(1) > .ng-untouched > .native-input').type('Alex Jesus')

        cy.get('.md > .md:nth-child(2) > .item-interactive > .ng-untouched > .native-input').type('Rodriguez Martinez')

        cy.get('.md > .md > .item-interactive:nth-child(2) > .ng-untouched > .native-input').type('alexjesusrodriguez')

        cy.get('.md > .md > .ion-untouched:nth-child(3) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(3) > .ng-untouched > .native-input').type('asdf1234')

        cy.get('.md > .md > .ion-untouched:nth-child(4) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(4) > .ng-untouched > .native-input').type('asdf1234')

        cy.get('.md > .md > .ion-untouched > .ng-untouched > .native-input').first().click()

        cy.get('.md > .md > .item-interactive > .ng-untouched > .native-input').last().type('88888888')

        cy.get('.md > .md > .md:nth-child(6) > .item-interactive > .md:nth-child(2)').click()

        cy.contains('div', 'Efectivo').click()

        cy.contains('button', 'OK').click()

        cy.contains('Crear cuenta').click()

        cy.contains('span', 'El formato del correo electrónico no es válido').should('be.visible')


    })

    it('KC1-4_not_able_to_register_an_user_whose_password_does_not_match', function() {

        cy.visit('https://kane-customer.web.app/signup')

        cy.get('.md > .md:nth-child(1) > .ion-untouched:nth-child(1) > .ng-untouched > .native-input').click()

        cy.get('.md > .md:nth-child(1) > .item-interactive:nth-child(1) > .ng-untouched > .native-input').type('Alex Jesus')

        cy.get('.md > .md:nth-child(2) > .item-interactive > .ng-untouched > .native-input').type('Rodriguez Martinez')

        cy.get('.md > .md > .item-interactive:nth-child(2) > .ng-untouched > .native-input').type('alexjesusrodriguez@gmail.com')

        cy.get('.md > .md > .ion-untouched:nth-child(3) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(3) > .ng-untouched > .native-input').type('asdf1234')

        cy.get('.md > .md > .ion-untouched:nth-child(4) > .ng-untouched > .native-input').click()

        cy.get('.md > .md > .item-interactive:nth-child(4) > .ng-untouched > .native-input').type('1')

        cy.get('.md > .md > .ion-untouched > .ng-untouched > .native-input').first().click()

        cy.get('.md > .md > .item-interactive > .ng-untouched > .native-input').last().type('88888888')

        cy.get('.md > .md > .md:nth-child(6) > .item-interactive > .md:nth-child(2)').click()

        cy.contains('div', 'Efectivo').click()

        cy.contains('button', 'OK').click()

        cy.contains('Crear cuenta').click()

        cy.contains('span' ,'Las contraseñas no coinciden').should('be.visible')
    })

})
