import ContactUs from "../../PageObjects/ContactUsPage";

describe("Functionality check of contact us option", () => {

    beforeEach( () => {
        cy.visit("https://automationteststore.com/");    // Landed to the website
        cy.title().should('eq', 'A place to practice your automation skills!');   //Title assertion of homepage
        cy.get('.info_links_footer > :nth-child(5) > a').click();    // Navigated to Contact Us page
        cy.title().should('eq', 'Contact Us');   // Title Assertion of contact us page
        
    })

    let userdata;
    // Fetching data from fixture
    before( () => {
        cy.fixture('accountInfoForContactUs').then( (data) => {
            userdata = data;
        })
    })

    const contactUsObject = new ContactUs();    // Object instance of ContactUs page

    it("Functionality check of contact us by giving all valid credentials", () => {

        contactUsObject.enterFirstName(userdata.validFirstName);   // Entering First name
        contactUsObject.enterEmail(userdata.validEmail);           // Entering Email
        contactUsObject.enterEnquiry(userdata.enquiry);            // Entering enquiry message

        contactUsObject.clickOnSubmitButton();                     // Clicking on submit button

        cy.get('.mb40 > :nth-child(3)')
            .should('have.text', userdata.ExpMessageForValid)      // expected message assertion
            .and('be.visible');                                    // Visibility assertion

        cy.screenshot();          // Taking screenshot of the whole page

    })

    it("Functionality check of contact us by giving invalid first name", () => {

        contactUsObject.enterFirstName(userdata.invalidFirstName);   // Entering First name
        contactUsObject.enterEmail(userdata.validEmail);           // Entering Email
        contactUsObject.enterEnquiry(userdata.enquiry);            // Entering enquiry message

        contactUsObject.clickOnSubmitButton();                     // Clicking on Submit button

        // The system is accepting everything in first name whether it's only numbers or special characters

        cy.get('.mb40 > :nth-child(3)')  
            .should('not.be.visible');

        cy.screenshot();          // Taking screenshot of the whole page
    })

    it("Functionality check of contact us by giving invalid email", () => {

        contactUsObject.enterFirstName(userdata.validFirstName);   // Entering First name
        contactUsObject.enterEmail(userdata.invalidEmail);           // Entering Email
        contactUsObject.enterEnquiry(userdata.enquiry);            // Entering enquiry message

        contactUsObject.clickOnSubmitButton();                     // Clicking on Submit button

        cy.get('.element_error')
            .should('have.text', userdata.emailInvalidErrorMessage)
            .and('be.visible');

        cy.screenshot();          // Taking screenshot of the whole page
        

    })

    it("Functionality check of contact us by giving blank enquiry", () => {

        contactUsObject.enterFirstName(userdata.validFirstName);   // Entering First name
        contactUsObject.enterEmail(userdata.validEmail);           // Entering Email

        contactUsObject.clickOnSubmitButton();                     // Clicking on Submit button

        cy.get('.element_error')
            .should('have.text', userdata.enquiryBlankErrorMessage)
            .and('be.visible');

        cy.screenshot();          // Taking screenshot of the whole page
    })

    it("Functionality check of contact us by giving no information at all", () => {

        contactUsObject.clickOnSubmitButton();                     // Clicking on Submit button

        cy.get('#field_11 > .help-block > .element_error')
            .should('have.text', userdata.firstNameBlankErrorMessage)
            .and('be.visible');

        cy.get('#field_12 > .help-block > .element_error')
            .should('have.text', userdata.emailBlankErrorMessage)
            .and('be.visible');

        cy.get('#field_13 > .help-block > .element_error')
            .should('have.text', userdata.enquiryBlankErrorMessage)
            .and('be.visible');


        cy.screenshot();          // Taking screenshot of the whole page
    })

    it("Functionality check of contact us by giving only numbers as email", () => {

        contactUsObject.enterFirstName(userdata.validFirstName);   // Entering First name
        contactUsObject.enterEmail(userdata.onlyNumbersInsteadOfEmail);           // Entering Email
        contactUsObject.enterEnquiry(userdata.enquiry);            // Entering enquiry message

        contactUsObject.clickOnSubmitButton();                     // Clicking on Submit button


        cy.get('#field_12 > .help-block > .element_error')
            .should('have.text', userdata.emailInvalidErrorMessage)
            .and('be.visible');

        cy.screenshot();          // Taking screenshot of the whole page
    })

    

})