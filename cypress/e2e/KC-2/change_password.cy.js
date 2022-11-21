describe("Change Password ", () => {

    it("KC-2-10 Invalid Actual Password (non existing pass)", () => {
        cy.visit("https://kane-customer.web.app/login");
        
        //login
        cy.get("input[name='email']").type("kanecustomer01@mailinator.com");
        cy.get("input[name='password']").type("asdf1234");
        let btn_login = cy.get("ion-button").contains("Iniciar sesión");
        btn_login.first().click();

        // go to profile
        cy.get('.photoUrl > img').click();
        
        //change password
        let btn_changePassword = cy.get("ion-button").contains("Cambiar contraseña");
        btn_changePassword.click();
        cy.get(':nth-child(1) > .ng-untouched > .native-input').type("12345678");
        cy.get(':nth-child(2) > .ng-untouched > .native-input').type("testpass1234");
        cy.get(':nth-child(3) > .ng-untouched > .native-input').type("testpass1234");
        cy.get('[type="submit"] > span').click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('¡Error!');
         })
        });

        it("KC-2-10 Invalid Actual Password (pass under 6 chars)", () => {
            cy.visit("https://kane-customer.web.app/login");
            
            //login
            cy.get("input[name='email']").type("kanecustomer01@mailinator.com");
            cy.get("input[name='password']").type("asdf1234");
            let btn_login = cy.get("ion-button").contains("Iniciar sesión");
            btn_login.first().click();
    
            // go to profile
            cy.get('.photoUrl > img').click();
            
            //change password
            let btn_changePassword = cy.get("ion-button").contains("Cambiar contraseña");
            btn_changePassword.click();
            cy.get(':nth-child(1) > .ng-untouched > .native-input').type("1234");
            cy.get(':nth-child(2) > .ng-untouched > .native-input').type("testpass1234");
            cy.get(':nth-child(3) > .ng-untouched > .native-input').type("testpass1234");
            cy.get('[type="submit"] > span').click();
    
            cy.get('.form > .ion-color').should("contain", "La contraseña debe tener al menos 6 carácteres.");
            });

        it("KC-2-10 Invalid New Password", () => {
            cy.visit("https://kane-customer.web.app/login");
            
            login
            cy.get("input[name='email']").type("kanecustomer01@mailinator.com");
            cy.get("input[name='password']").type("asdf1234");
            let btn_login = cy.get("ion-button").contains("Iniciar sesión");
            btn_login.first().click();
    
            //go to profile
            cy.get('.photoUrl > img').click();
            
            //change password
            let btn_changePassword = cy.get("ion-button").contains("Cambiar contraseña");
            btn_changePassword.click();
            cy.get(':nth-child(1) > .ng-untouched > .native-input').type("asdf1234");
            cy.get(':nth-child(2) > .ng-untouched > .native-input').type("1234");
            cy.get(':nth-child(3) > .ng-untouched > .native-input').type("1234");
            cy.get('[type="submit"] > span').click();
    
            cy.get('.form > .ion-color').should("contain", "La contraseña debe tener al menos 6 carácteres.");
        });

    it("KC-2-10 Valid Actual and New Password", () => {
        cy.visit("https://kane-customer.web.app/login");
        
        //login
        cy.get("input[name='email']").type("kanecustomer01@mailinator.com");
        cy.get("input[name='password']").type("asdf12345");
        let btn_login = cy.get("ion-button").contains("Iniciar sesión");
        btn_login.first().click();

        // go to profile
        cy.get('.photoUrl > img').click();
        
        //change password
        let btn_changePassword = cy.get("ion-button").contains("Cambiar contraseña");
        btn_changePassword.click();
        cy.get(':nth-child(1) > .ng-untouched > .native-input').type("asdf1234");
        cy.get(':nth-child(2) > .ng-untouched > .native-input').type("asdf12345");
        cy.get(':nth-child(3) > .ng-untouched > .native-input').type("asdf12345");
        cy.get('[type="submit"] > span').click();

        //logout
        cy.visit("https://kane-customer.web.app/edit-information");
        cy.get(':nth-child(2) > .ion-align-self-center > .button').click();
        });
});
