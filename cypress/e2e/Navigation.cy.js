describe("Navigation Test Suite", () => {
    it("Navigation Test", () => {
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', 'Your Store');

        cy.clickLink('Tablets');
        cy.title().should('eq', 'Tablets');


        cy.go('back');
        cy.title().should('eq', 'Your Store');

        cy.go('forward');
        cy.title().should('eq', 'Tablets');

        cy.go(-1);
        cy.title().should('eq', 'Your Store');

        cy.go(1);
        cy.get("div#content > h2").should('have.text', 'Tablets');
    })
})