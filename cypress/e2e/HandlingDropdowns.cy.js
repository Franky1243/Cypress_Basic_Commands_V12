describe("Handling Dropdowns", () => {
    it.skip("Dropdown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");

        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value','Italy')

    })

    it.skip("Dropdown without select", () => {
        cy.visit("https://www.booking.com");

        cy.get("input[placeholder='Where are you going?']").type('cox').type('{downArrow}').type('{downArrow}').type('{enter}')
        cy.get('.b8ef7618ca > .bb0b3e18ca > .fc63351294 > .b9def0936d > .b6dc9a9e69 > svg').click()
        

    })

    it.skip("Handling Auto Suggestive Dropdown", () => {
        cy.visit("https://www.wikipedia.org/");

        cy.get("#searchInput").type("ban")

        cy.get(".suggestion-title").contains('Bangladesh Liberation War').click()
        cy.get('.mw-page-title-main').should('have.text', 'Bangladesh Liberation War')
    })

    it("Handling Dynamic Auto Suggestive Dropdown", () => {
        cy.visit("https://www.google.com/");

        cy.get("input[name='q']").type("cypress automation")
        cy.wait(3000)
        cy.get("div.wM6W7d>span").each( ($el, index, $list) => {
            if($el.text()=="cypress automation tutorial")
            {
                cy.wrap($el).click()
            }
        })

        

    })
})