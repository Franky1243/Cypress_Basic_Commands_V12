describe("Custom Commands", () => {

    it("Handling Links", () => {

        cy.visit("https://demo.nopcommerce.com/");

        // Without using custom commands
        //cy.get("div:nth-of-type(2) > .product-item  h2 > a").click();

        // With using custom commands
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("h1").should('have.text', 'Apple MacBook Pro 13-inch');

    });

    it("Overwriting Existing Commands", () => {

        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink("APPLE MACBOOK PRO 13-inch");    //using custom command
        cy.get("h1").should('have.text', 'Apple MacBook Pro 13-inch');

    });

    it.only("Login Command", () => {

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Log in");
        cy.loginapp("frankenstein.cse@gmail.com", "Franky*#1243");

        cy.get(".ico-account").should('have.text', 'My account');

    });
});