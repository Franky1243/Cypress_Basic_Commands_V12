describe("Handling Alerts", () => {
    
    //js alert 01: it will have some text and an 'OK' button
    it.skip("javascript alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains("I am a JS Alert")
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //js alert 02: it will have some text and an 'OK' & a 'Cancel' button
    it.skip("javascript confirm alert - OK button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        //cypress automatically closed alert using ok button - default
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

     //js alert 02: it will have some text and an 'OK' & a 'Cancel' button
     it.skip("javascript confirm alert - Cancel button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })
        
        cy.on('window:confirm', () => false);  // cypress closes alert window by clicking cancel button

        cy.get('#result').should('have.text', 'You clicked: Cancel');

    })

    //js alert 03: it will have some text with a text box for user input along with 'OK' & a 'Cancel' button
    it.skip("javascript prompt alert ", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        
        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns('welcome');

        })

        cy.get("button[onclick='jsPrompt()']").click();

        // cypress will autoamtically close prompted alert - it will use OK button - by default

        cy.on('window:prompt',()=>false);

        cy.get('#result').should('have.text', 'You entered: welcome');

    })

    //js alert 04: Authenticated alert - it will have some text with a text box for username and password with 'OK' & a 'Cancel' button
    it("javascript autenticated alert ", () => {
        
        // //Approach 01
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: 
        //                                                             {
        //                                                                 username: "admin",
        //                                                                 password: "admin"
        //                                                             } });

        // cy.get('p').should('have.contain', 'Congratulations!');


        //Approach 02
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get('p').should('have.contain', 'Congratulations!');

    })
})