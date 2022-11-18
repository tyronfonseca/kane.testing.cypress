// Expects to be in login page
Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env("login_url"));
        cy.get("input[name='email']").type(Cypress.env("testUser").email);
        cy.get("input[name='password']").type(Cypress.env("testUser").pwd);
        
        let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
        btn_login.click({ multiple: true });
});

Cypress.Commands.add('logout', () => {
    cy.visit('/edit-information');
    cy.wait(1000);
    let btn_logout = cy.get('ion-button').last();
    btn_logout.click({ force: true });
});

beforeEach(() => {
    cy.login()
});

afterEach(() => {
    cy.logout()
});