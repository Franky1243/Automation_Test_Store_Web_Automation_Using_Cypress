class ContactUs {

    enterFirstName(firstname)
    {
        cy.get('#ContactUsFrm_first_name').type(firstname);
    }

    enterEmail(email)
    {
        cy.get('#ContactUsFrm_email').type(email);
    }

    enterEnquiry(enquiry)
    {
        cy.get('#ContactUsFrm_enquiry').type(enquiry);
    }

    clickOnResetButton()
    {
        cy.get('.col-md-1 > .btn').click();
    }

    clickOnSubmitButton()
    {
        cy.get('.col-md-6 > .btn').click();
    }


}

export default ContactUs;