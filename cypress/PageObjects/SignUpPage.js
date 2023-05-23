class SignUp {

    setFirstName(firstName)
    {
        cy.get('#AccountFrm_firstname').type(firstName);
    }

    setLastName(lastName)
    {
        cy.get('#AccountFrm_lastname').type(lastName);
    }

    setEmail(email)
    {
        cy.get('#AccountFrm_email').type(email);
    }

    setTelephone(telephone)
    {
        cy.get('#AccountFrm_telephone').type(telephone);
    }

    setFax(fax)
    {
        cy.get('#AccountFrm_fax').type(fax);
    }

    setCompany(company)
    {
        cy.get('#AccountFrm_company').type(company);
    }

    setAddress1(address)
    {
        cy.get('#AccountFrm_address_1').type(address);
    }

    setAddress2(address)
    {
        cy.get('#AccountFrm_address_2').type(address);
    }

    setCity(city)
    {
        cy.get('#AccountFrm_city').type(city);
    }

    setRegion(region)
    {
        cy.get('#AccountFrm_zone_id', {timeout:5000}).select(region);
    }

    setZipCode(zipcode)
    {
        cy.get('#AccountFrm_postcode').type(zipcode);
    }

    setCountry(country)
    {
        cy.get('#AccountFrm_country_id', {timeout:10000}).select(country);
    }

    setLoginName(loginname)
    {
        cy.get('#AccountFrm_loginname').type(loginname);
    }

    setPassword(password)
    {
        cy.get('#AccountFrm_password').type(password);
    }

    setConfirmPassword(confirmPassword)
    {
        cy.get('#AccountFrm_confirm').type(confirmPassword);
    }

    clickToSubscribe(answer)
    {
        if(answer == "Yes")
        {
            cy.get('#AccountFrm_newsletter1').click();
        }
        
        else if(answer == "No")
        {
            cy.get('#AccountFrm_newsletter0').click();
        }
    }

    clickToPrivacyPolicy()
    {
        cy.get('#AccountFrm_agree').click();
    }

    clickOnContinue()
    {
        cy.get('.col-md-2 > .btn').click();
    }

    


}

export default SignUp;