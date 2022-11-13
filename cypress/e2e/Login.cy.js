describe("Login test", () => {
  it("Login loads correctly", () => {
    //act
    cy.visit(Cypress.env("login_url"));

    //assert
    cy.get(".title-default").should("contain", "Iniciar sesión");

    let input_email = cy.get("input[name='email']");
    input_email.should("exist");

    let input_pws = cy.get("input[name='password']");
    input_pws.should("exist");

    cy.get("ion-text").should("contain", "¿Olvidó su contraseña?");

    let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
    btn_login.should("exist");
    btn_login.should("have.attr", "aria-disabled", "true");

    let btn_signup = cy.get("ion-button").should("contain", "Crear Cuenta");
    btn_signup.should("exist");
  });

  it("Login with incorrect credentials", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type("kk@test.com");
    cy.get("input[name='password']").type("testUser");
    let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
    btn_login.click({multiple: true});

    //assert redirect to create account
    cy.url().should("include", Cypress.env("signup_url"));
  });

  it("Login with correct credentials", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type(Cypress.env("testUser").email);
    cy.get("input[name='password']").type(Cypress.env("testUser").pwd);
    let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
    btn_login.click({ multiple: true });

    //assert redirect to home
    cy.url().should("include", "/home");
  });
});
