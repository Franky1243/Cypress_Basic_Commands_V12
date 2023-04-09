describe("Checking UI Elements", () => {
    // it("Checking Radio Buttons", () => {
    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        
    //     // visibility of radio buttons
    //     cy.get("input[id='male']").should('be.visible');
    //     cy.get("input[id='female']").should('be.visible');

    //     //selecting radio buttons

    //     cy.get("input[id='male']").check().should('be.checked')
    //     cy.get("input[id='female']").should('not.be.checked')

    //     cy.get("input[id='female']").check().should('be.checked')
    //     cy.get("input[id='male']").should('not.be.checked')
    // })

    it("Checking check boxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        
        // visibility of check boxes
        cy.get("input#monday").should('be.visible')

        //checking checkboxes
        cy.get("input#monday").check().should('be.checked')

        //unchecking check boxes
        cy.get("input#monday").uncheck().should('not.be.checked')

        //selecting all the check boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselecting all the check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting first and last check boxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
        
    })
})