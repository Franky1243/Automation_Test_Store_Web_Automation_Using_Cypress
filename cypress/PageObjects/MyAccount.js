class MyAccount {

    editFirstName(name)
    {
        cy.get('#AccountFrm_firstname').clear().type(name);
    }

    clearField(fieldName)
    {
        if(fieldName == "First Name")
        {
            cy.get('#AccountFrm_firstname').clear();
        }

        else if(fieldName == "Last Name")
        {
            cy.get('#AccountFrm_lastname').clear();
        }

        else if(fieldName == "Email")
        {
            cy.get('#AccountFrm_email').clear();
        }

        else if(fieldName == "Phone Number")
        {
            cy.get('#AccountFrm_telephone').clear();
        }

        else if(fieldName == "Fax")
        {
            cy.get('#AccountFrm_fax').clear();
        }
    }

    editLastName(name)
    {
        cy.get('#AccountFrm_lastname').clear().type(name);
    }

    editEmail(email)
    {
        cy.get('#AccountFrm_email').clear().type(email);
    }

    editPhoneNumber(number)
    {
        cy.get('#AccountFrm_telephone').clear().type(number);
    }

    editFax(fax)
    {
        cy.get('#AccountFrm_fax').clear().type(fax);
    }

    clickOnContinueButton()
    {
        cy.get('.col-md-12 > .btn-orange').click();
    }



}

export default MyAccount;