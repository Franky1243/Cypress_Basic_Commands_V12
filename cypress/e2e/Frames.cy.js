import 'cypress-iframe'

describe("Handling iFrames", () => {
    it("Approach 01", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        
        iframe.clear().type("Welcome Franky {ctrl+a}");
        cy.get("[title='Bold']").click();
        

    })

    it("Approach 02 - by using custom commands", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        cy.getIframe('#mce_0_ifr').clear().type("Welcome Franky {ctrl+a}");


        
        cy.get("[title='Bold']").click();
        

    })

    it("Approach 03 - by using cypress-iframe plugin", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        cy.frameLoaded('#mce_0_ifr');       // Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome home {ctrl+a}");
        
        cy.get("[title='Bold']").click();
    })
})