import 'cypress-file-upload';

describe("File Uploads", () => {
    it('Single File Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile("fab.pdf");
        cy.wait(5000);
        //cy.get('#file-submit').click();
        

    })

    it('File Upload - Rename', () => {
        
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'fab.pdf', fileName:'myFile.pdf'});
        //cy.get("input[value='Upload']").click();

    })

    it('File Upload - Drag and Drop', () => {
        
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("fab.pdf", {subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename').contains('fab.pdf');

    })

    it('Multiple Files Upload', () => {
        
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(['fab.pdf', 'fab2.pdf']);
        cy.wait(5000);
        cy.get('#fileList > :nth-child(1)').should('have.text', 'fab.pdf');
        cy.get('#fileList > :nth-child(2)').should('have.text', 'fab2.pdf');

    })

    it.only('File Upload - Shadow Dom', () => {
        
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");

        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile('fab.pdf');
        cy.wait(5000);
        cy.get(".smart-item-name", {includeShadowDom:true}).should('have.text', 'fab.pdf');

    })
})