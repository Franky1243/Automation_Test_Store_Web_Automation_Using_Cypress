class EditAddress {

    clearField(fieldName)
    {
        if(fieldName == "First Name")
        {
            cy.get('#AddressFrm_firstname').clear();
        }

        else if(fieldName == "Last Name")
        {
            cy.get('#AddressFrm_lastname').clear();
        }

        else if(fieldName == "Company")
        {
            cy.get('#AddressFrm_company').clear();
        }

        else if(fieldName == "Address 1")
        {
            cy.get('#AddressFrm_address_1').clear();
        }

        else if(fieldName == "Address 2")
        {
            cy.get('#AddressFrm_address_2').clear();
        }

        else if(fieldName == "City")
        {
            cy.get('#AddressFrm_city').clear();
        }

        else if(fieldName == "Zip Code")
        {
            cy.get('#AddressFrm_postcode').clear();
        }

        
    }

    setCountry(country)
    {
        cy.get('#AddressFrm_country_id', {timeout:10000}).select(country);
    }

    setRegion(region)
    {
        cy.get('#AddressFrm_zone_id', {timeout:5000}).select(region);
    }

    setFirstName(firstName)
    {
        cy.get('#AddressFrm_firstname').type(firstName);
    }

    setLastName(lastName)
    {
        cy.get('#AddressFrm_lastname').type(lastName);
    }

    setCompany(company)
    {
        cy.get('#AddressFrm_company').type(company);
    }

    setAddress1(address1)
    {
        cy.get('#AddressFrm_address_1').type(address1);
    }

    setAddress2(address2)
    {
        cy.get('#AddressFrm_address_2').type(address2);
    }

    setCity(city)
    {
        cy.get('#AddressFrm_city').type(city);
    }

    setPostCode(postcode)
    {
        cy.get('#AddressFrm_postcode').type(postcode);
    }

    setDefaultAddress(sign)
    {
        if(sign == 'Yes')
        {
            cy.get('#AddressFrm_default1').click();
        }

        else if(sign == 'No')
        {
            cy.get('#AddressFrm_default0').click();
        }
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

export default EditAddress;