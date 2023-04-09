describe("Taking Screenshot", () => {
    it("Taking Screenshot using screenshot function", () => {

        cy.visit("https://demo.opencart.com/");

        cy.screenshot("Homepage");
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot("Logo");
        

    })

    it.only("Taking Screenshot automatically after test failure", () => {

        cy.visit("https://demo.opencart.com/");

        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should('have.text', 'Tablets');   // This line will throw an error

        /*  to capture screenshot automaticall on test failure,
            just run the following command on terminal :

        =>  npx cypress run --spec {copy and paste the relative path of the spec}
        */
        

    })
})