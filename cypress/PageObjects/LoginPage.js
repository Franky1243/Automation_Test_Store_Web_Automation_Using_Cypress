class Login 
{
    enterLoginName(loginName)
    {
        cy.get('#loginFrm_loginname').type(loginName);
    }

    enterPassword(password)
    {
        cy.get('#loginFrm_password').type(password);
    }

    clickOnForgotPassword()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').click();
    }

    clickOnForgotLogin()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/loginname"]').click();
    }

    clickOnLoginButton()
    {
        cy.get('#loginFrm > fieldset > .btn').click();
    }
}

export default Login;