

describe("MyTestSuite", () => {

    /*it.only("Fixtures Demo Test With Direct Access", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('orangeHRM').then( (data) => {

            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);

            cy.get(".orangehrm-login-button").click();

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text', data.expected);
        })
    })*/

    let userdata;
    before( () => {
        
        cy.fixture('orangeHRM').then( (data) => {
            userdata = data;
        })
        
    })


    it("Fixtures Demo Test Access Through Hooks", () => {
        
        cy.visit("http://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);

        cy.get(".orangehrm-login-button").click();

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text', userdata.expected);
    })

})