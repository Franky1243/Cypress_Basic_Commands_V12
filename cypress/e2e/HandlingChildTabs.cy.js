describe("Handling Tabs", () => {
    it.skip("Approach 01 WebDriver University", () => {
        cy.visit("https://webdriveruniversity.com/");

        cy.get("a[id='actions']").invoke('removeAttr', 'target').click();

        cy.get('#double-click').dblclick();
        cy.get('#click-box').trigger('mousedown')
        cy.wait(3000)
        cy.get('#click-box').trigger('mouseup')
    })

    it.skip("Approach 01", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");      // parent tab
        cy.get("div[class='example'] > a").invoke('removeAttr', 'target').click();    //removing target attribute
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');   //checking new window

        cy.wait(5000);

        cy.go('back');     // back to parent tab
    })

    it("Approach 02", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");         // parent tab
        cy.get("div[class='example'] > a").then((e) => {
            let url = e.prop('href');

            cy.visit(url);               // chaild tab
        });

        
        cy.wait(5000)

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');   //checking new window

        cy.go('back');                    //back to parent tab
    });
});
