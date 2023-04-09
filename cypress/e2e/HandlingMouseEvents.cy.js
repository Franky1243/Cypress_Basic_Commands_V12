import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Handling Mouse Events", () => {
    it.skip("Mouse Hover", () => {
        
        cy.visit("https://demo.opencart.com/");
        
        cy.get("li:nth-of-type(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > li:nth-of-type(2) > .nav-link")
        .should('not.be.visible');

        cy.get("li:nth-of-type(1) > .dropdown-toggle.nav-link").trigger('mouseover').click();
        cy.get("li:nth-of-type(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > li:nth-of-type(2) > .nav-link").should('be.visible');
    })

    it.skip("Right Click", () => {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        // // Approach 01
        // cy.get(".btn.btn-neutral.context-menu-one").trigger('contextmenu');
        // cy.get(".context-menu-icon.context-menu-icon-copy.context-menu-item > span").should('be.visible');


        //Approach 02
        cy.get(".btn.btn-neutral.context-menu-one").rightclick();
        cy.get(".context-menu-icon.context-menu-icon-copy.context-menu-item > span").should('be.visible');

    })

    it.skip("Double Click", () => {
        
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");

        cy.frameLoaded('#iframeResult');     // Loaded the frame

        // Approach 01
        // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe("#iframeResult").find("#demo").should('have.text', 'Hello World');

        // Approach 02

        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("#demo").should('have.text', 'Hello World');

    })

    it.skip("Drag and Drop using Plugin", () => {
        
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

        cy.get("#box6").should('be.visible');
        cy.get("#box106").should('be.visible');


        cy.get("#box6").drag("#box106", {force:true});

        cy.get("#box7").should('be.visible');
        cy.get("#box107").should('be.visible');


        cy.get("#box7").drag("#box107", {force:true});

        cy.get("#box5").should('be.visible');
        cy.get("#box105").should('be.visible');


        cy.get("#box5").drag("#box105", {force:true});

    })

    it.only("Scrolling Page", () => {
        
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');

        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(1) > img').should('be.visible');


    })


})