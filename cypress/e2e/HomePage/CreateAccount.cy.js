import SignUp from "../../PageObjects/SignUpPage";

describe("Create Account for new Users", () => {
    
    beforeEach( () => {
        cy.visit("https://automationteststore.com/");     // Landed to automation test store website
        cy.title().should('eq', "A place to practice your automation skills!") // Title Assertion

        cy.get('#customer_menu_top > li > a').click();    // Click on Login or Register Button in Homepage

        cy.get('#accountFrm > fieldset > .btn').click();   // Click on Continue Button on new Customer

        cy.title().should('eq', 'Create Account');   // Title assertion to check if we are on sign up page

    })

    let newUserdata;
    before( () => {
        cy.fixture('accountInfoForSignup').then( (data) => {
            newUserdata = data;
        })
    })
    
    const signUpObject = new SignUp();

    it("Create Account By giving all valid credentials", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        signUpObject.setZipCode(newUserdata.zipcode);
        signUpObject.setRegion(newUserdata.region);

        signUpObject.setLoginName(newUserdata.loginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("Yes");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Congratulations! Your new account has been successfully created!');




    })

    it("Create Account By giving existing email and login name", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        signUpObject.setZipCode(newUserdata.zipcode);
        signUpObject.setRegion(newUserdata.region);

        signUpObject.setLoginName(newUserdata.newLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("No");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.alert').should('have.text', '\n×\nError: E-Mail Address is already registered!');
    })

    it("Create Account By not giving any information", () => {

        
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.alert').should('have.text', '\n×\nError: You must agree to the Privacy Policy!');
    })

    it("Create Account By giving invalid email and login name", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.invalidEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        signUpObject.setZipCode(newUserdata.zipcode);
        signUpObject.setRegion(newUserdata.region);

        signUpObject.setLoginName(newUserdata.invalidLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("No");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get(':nth-child(5) > fieldset > .has-error > .help-block').should('have.text', 'Email Address does not appear to be valid!');
        cy.get(':nth-child(9) > fieldset > :nth-child(1) > .help-block').should('have.text', 'Login name must be alphanumeric only and between 5 and 64 characters!');

    })

    it("Create Account By not giving city name", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        
        signUpObject.setCountry(newUserdata.country);
        signUpObject.setZipCode(newUserdata.zipcode);
        signUpObject.setRegion(newUserdata.region);

        signUpObject.setLoginName(newUserdata.newLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("No");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.has-error > .help-block').should('have.text', 'City must be between 3 and 128 characters!');

    })

    it("Create Account By not selecting region", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        
        signUpObject.setZipCode(newUserdata.zipcode);
        

        signUpObject.setLoginName(newUserdata.newLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("No");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.has-error > .help-block').should('have.text', 'Please select a region / state!');
    })

    it("Create Account By not giving zip code", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        
        signUpObject.setRegion(newUserdata.region);
        

        signUpObject.setLoginName(newUserdata.newLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("No");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.has-error > .help-block')
            .should('have.text', 'Zip/postal code must be between 3 and 10 characters!')
            .and('be.visible');
    })

    it("Create Account By not giving confirm password", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        signUpObject.setZipCode(newUserdata.zipcode);
        signUpObject.setRegion(newUserdata.region);

        signUpObject.setLoginName(newUserdata.newLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        

        signUpObject.clickToSubscribe("No");
        signUpObject.clickToPrivacyPolicy();
        signUpObject.clickOnContinue();

        cy.screenshot();
        cy.get('.has-error > .help-block')
            .should('have.text', 'Password confirmation does not match password!')
            .and('be.visible');
    })

    it("Create Account By not clicking on privacy policy button", () => {

        signUpObject.setFirstName(newUserdata.firstname);
        signUpObject.setLastName(newUserdata.lastname);
        signUpObject.setEmail(newUserdata.newEmail);
        signUpObject.setTelephone(newUserdata.newTelephone);

        signUpObject.setAddress1(newUserdata.address1);
        signUpObject.setAddress2(newUserdata.address2);
        signUpObject.setCity(newUserdata.city);
        signUpObject.setCountry(newUserdata.country);
        signUpObject.setZipCode(newUserdata.zipcode);
        signUpObject.setRegion(newUserdata.region);

        signUpObject.setLoginName(newUserdata.newLoginName);
        signUpObject.setPassword(newUserdata.newPassword);
        signUpObject.setConfirmPassword(newUserdata.newConfirmPassword);

        signUpObject.clickToSubscribe("No");
        signUpObject.clickOnContinue();

        cy.screenshot();

        cy.get('.alert')
            .should('have.text', '\n×\nError: You must agree to the Privacy Policy!')
            .and('be.visible');
    })
})