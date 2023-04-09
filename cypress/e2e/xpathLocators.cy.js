describe("locating elements with xpath", () => {
    it("finding no of items", () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//section[@id='featured']/div/div/div/div").should('have.length', 4);
    })

    it("finding no of items 2", () => {
        cy.visit("https://automationteststore.com/");
        cy.xpath("//section[@id='featured']").xpath("./div/div/div/div").should('have.length', 4);
    })
})