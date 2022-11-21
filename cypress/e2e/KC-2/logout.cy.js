describe("Logout test", () => {
    it("KC-2-31 Logout Test", () => {
        cy.login();
        cy.visit("/edit-information");
        let btn_logout = cy.get("ion-button").last();
        btn_logout.click({ force: true });
        });

  });
  