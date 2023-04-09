describe("Handling Tables in Cypress", () => {
    beforeEach("Login", () => {
        cy.visit("https://demo.opencart.com/admin/index.php");

        cy.get("input[placeholder='Username']").type("demo");
        cy.get("input[placeholder='Password']").type("demo");
        cy.get("button[type='submit']").click();

        cy.get(".btn-close").click();
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();
    })

    it.skip("Check number of rows and columns", () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10);
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7);
        

    })

    it.skip("Check cell data frome specific row & column", () => {
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)")
            .should('have.text', 'gorankreziccc90@gmail.com');

    })

    it.skip("Read all the rows & columns data in the first page", () => {
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(  ($row, index, $rows) => {
                cy.wrap($row).within(   () => {
                    cy.get("td").each(  ($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })

    })

    it.only("Pagination", () => {
        
        let totalPages;

        // cy.get('.row > .text-end').then(   (e) => {
        //     let mytext = e.text();
        //     totalPages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
        //     cy.log("Total Number of Pages =======> "+totalPages); 
        // })

        totalPages = 10;
        let pageIndex;

        for(let p=1; p<=totalPages; p++)
        {
            if(totalPages>1)
            {
                if(p == 1 || p == 2)
                {
                    cy.log("Active Page is =====> "+p);

                    cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                
                    cy.wait(3000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                        .each(  ($row, index, $rows) => {
                            cy.wrap($row).within(   () => {
                                cy.get("td:nth-child(3)").then( (e) => {
                                    cy.log(e.text());
                                })
                            })
                        })
                }
            }

            if(p == 2)
            {
                pageIndex = p+3;
            }

            if(totalPages>1)
            {
                if(p > 2 && p < 6)
                {
                    
                    cy.log("Active Page is =====> "+p);

                    cy.get("ul[class='pagination']>li:nth-child("+pageIndex+")").click();
                
                    cy.wait(3000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(  ($row, index, $rows) => {
                        cy.wrap($row).within(   () => {
                            cy.get("td:nth-child(3)").then( (e) => {
                                cy.log(e.text());
                            })
                        })
                    })
                    pageIndex++;
                }

                
            }

            if(totalPages > 1)
            {
                if(p > 5)
                {
                    cy.log("Active Page is =====> "+p);

                    cy.get("ul[class='pagination']>li:nth-child("+pageIndex+")").click();
                
                    cy.wait(3000);

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(  ($row, index, $rows) => {
                        cy.wrap($row).within(   () => {
                            cy.get("td:nth-child(3)").then( (e) => {
                                cy.log(e.text());
                            })
                        })
                    })
                    
                }
            }
        }

    })

    
})