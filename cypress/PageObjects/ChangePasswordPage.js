class ChangePassword {
    
    setCurrentPassword(password)
    {
        cy.get('#PasswordFrm_current_password').type(password);
    }

    setNewPassword(password)
    {
        cy.get('#PasswordFrm_password').type(password);
    }

    setNewPasswordConfirm(password)
    {
        cy.get('#PasswordFrm_confirm').type(password);
    }

    clickOnBackButton()
    {
        cy.get('.col-md-12 > .btn-default').click();
    }

    clickOnContinueButton()
    {
        cy.get('.col-md-12 > .btn-orange').click();
    }

}

export default ChangePassword;