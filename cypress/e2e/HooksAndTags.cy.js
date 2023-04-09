describe("HooksAndTags", () => {

    before( () => {
        cy.log("********** Launch App *********");
    })

    after( () => {
        cy.log("********** Close App *********");
    })

    beforeEach( () => {
        cy.log("********** Login *********");
    })

    afterEach( () => {
        cy.log("********** Logout *********");
    })


    it('Search', () => {
        cy.log("********** Searching *********");
    })

    it.skip('Advanced Search', () => {
        cy.log("********** Advanced Searching *********");
    })

    it('Listing Products', () => {
        cy.log("********** Listing Products *********");
    })

})