describe("Login test", () => {
  it("KC-2-1 Login loads correctly", () => {
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

  it("KC-2-2 Invalid email format", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type("example.com");
    cy.get("input[name='password']").type("testUser");
    let btn_login = cy
      .get("ion-button")
      .should("contain", "Iniciar sesión")
      .first();

    //assert button disabled
    btn_login.should("have.attr", "aria-disabled", "true");


    cy.get("input[name='email']").type("@test.com");
    cy.get("input[name='password']").type("testUser");

    //assert button disabled
    btn_login.should("have.attr", "aria-disabled", "true");

    cy.get("input[name='email']").type("example@test");
    cy.get("input[name='password']").type("testUser");

    //assert button disabled
    btn_login.should("have.attr", "aria-disabled", "true");
  });

  it("KC-2-3 Short password", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type(Cypress.env("testUser").email);
    cy.get("input[name='password']").type("a1");
    let btn_login = cy
      .get("ion-button")
      .should("contain", "Iniciar sesión")
      .first();

    //assert button disabled
    btn_login.should("have.attr", "aria-disabled", "true");
  });

  it("KC-2-4 Login with email not in database", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type("casdsada@mailnator.com");
    cy.get("input[name='password']").type("testUser");
    let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
    btn_login.first().click();

    //assert message error
    cy.verifyToastMsg("El correo electrónico no ha sido registrado");
  });

  it("KC-2-5 Login with wrong password", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type(Cypress.env("testUser").email);
    cy.get("input[name='password']").type("testUser");
    let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
    btn_login.first().click();

    //assert message error
    cy.verifyToastMsg("La contraseña ingresada es inválida");
  });

  it("KC-2-6 Login with correct credentials", () => {
    //arrange
    cy.visit(Cypress.env("login_url"));

    //act
    cy.get("input[name='email']").type(Cypress.env("testUser").email);
    cy.get("input[name='password']").type(Cypress.env("testUser").pwd);
    let btn_login = cy.get("ion-button").should("contain", "Iniciar sesión");
    btn_login.first().click();

    //assert redirect to home
    cy.url().should("include", "/home");

    cy.logout();
  });
});
