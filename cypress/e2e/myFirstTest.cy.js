describe("My first test case", () => {
    it('verify title positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM');
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        // cy.get('.oxd-button').click();

        cy.xpath("//input[@placeholder='Username']").type("Admin")
        .should('have.value', 'Admin');
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        .should('have.value', 'admin123');
        cy.xpath("//button[@type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
        
    });

    

    // it('verify title negative', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     cy.title().should('eq', 'OrangeHRM123');
    // });


});