import Login from "../pageObjects/LoginPage.js"
import Login2 from "../pageObjects/LoginPage2.js"

describe("Login with POM", () => {
    
    // General Approach
    it("Login with General Approach", () => {

    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');

        

    })

    //Using POM 1st Approach
    it("Login with POM 1st Approach", () => {

        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const ln = new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickOnSubmit();
        ln.verifyLogin();

    })

    //Using POM 2nd Approach
    it("Login with POM 2nd Approach", () => {

        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const obj = new Login2();
        obj.setUserName("Admin");
        obj.setPassword("admin123");
        obj.clickOnSubmit();
        obj.verifyLogin();

    })

    //Using POM with Fixtures
    it.only("Login with POM with fixtures", () => {

        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangeHRM').then( (data) => {

            const obj = new Login2();
            obj.setUserName(data.username);
            obj.setPassword(data.password);
            obj.clickOnSubmit();
            obj.verifyLogin();


        })

        
    })
})