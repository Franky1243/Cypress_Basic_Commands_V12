class Login
{

    txtUsername = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblMsg = '.oxd-topbar-header-breadcrumb > .oxd-text';


    setUserName(username)
    {
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickOnSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.get(this.lblMsg).should('have.text', 'Dashboard');

    }
}

export default Login;