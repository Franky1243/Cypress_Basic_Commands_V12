describe("Assertions demo", () => {
    it("Implicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       
        // cy.url().should('include', 'orangehrmlive.com/')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm');

        // cy.url().should('include', 'orangehrmlive.com/')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm');

        cy.url().should('include', 'orangehrmlive.com/')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain', 'redhrm');

        cy.title().should('include', "Orange")
        .and('eq', "OrangeHRM")
        .and('contain', "HRM");

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist');
    })

    it.only("Explicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        .should('have.value', 'Admin')
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        .should('have.value', 'admin123')
        cy.xpath("//button[@type='submit']").click()

        let expName = "Paula Collings"
        cy.get('.oxd-userdropdown-name').then( (x) => {
            let actualName = x.text();

            //BDD Style

            expect(expName).to.equal(actualName)
            expect(expName).to.not.equal("Sohel Sarker")

            //TDD Style

            assert.equal(actualName, expName)
            assert.notEqual(actualName, "Sohel Sarker")

        })

        


    })
})