import Login from "../../PageObjects/LoginPage";
import MyAccount from "../../PageObjects/MyAccount";

describe("Edit Account Details", () => {

    // Fetching data from fixture
    let userdata;
    before( () => {
        cy.fixture('accountInfo').then( (data) => {
            userdata = data;
        })
    })

    let userdata2;
    before( () => {
        cy.fixture('editAccount').then( (data2) => {
            userdata2 = data2;
        })
    })

    const loginObject = new Login();

    beforeEach( () => {
        cy.visit("https://automationteststore.com/");                        // Landed to automation test store website  

        cy.get('#customer_menu_top > li > a').click();                       // Click on Login or Register Button in Homepage

        loginObject.enterLoginName(userdata.validLoginName);                 // Entering Login Name
        loginObject.enterPassword(userdata.validPassword);                   // Entering Password
        loginObject.clickOnLoginButton();                                    // Clicking on Login Button
        cy.get('.side_account_list > :nth-child(3) > a').click();            // Clicking on Edit Account Details Button

        

    })

    const MyAccountObject = new MyAccount();

    it("Verify that the system throws an error if mandatory field first name is blank", () => {

        
        MyAccountObject.clearField("First Name");
        MyAccountObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', "\n×\nOops, there is an error with information provided!")
            .and('be.visible');

    }) 

    it("Verify that the system throws an error if mandatory field last name is blank", () => {

        MyAccountObject.editFirstName(userdata2.newFirstName);
        MyAccountObject.editLastName(userdata2.newLastName);
        MyAccountObject.clearField("Last Name");
        MyAccountObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', "\n×\nOops, there is an error with information provided!")
            .and('be.visible');

    }) 

    it("Verify that the system throws an error if mandatory field email is blank", () => {

        MyAccountObject.editFirstName(userdata2.newFirstName);
        MyAccountObject.editLastName(userdata2.newLastName);
        MyAccountObject.clearField("Email");
        MyAccountObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', "\n×\nOops, there is an error with information provided!")
            .and('be.visible');

    }) 

    it("Verify that the system updates the information", () => {

        MyAccountObject.editFirstName(userdata2.newFirstName);
        MyAccountObject.editLastName(userdata2.newLastName);
        MyAccountObject.clickOnContinueButton();

        cy.get('.alert')
            .should("have.text", "\n×\nSuccess: Your account has been successfully updated.")
            .and('be.visible');

        cy.get('.side_account_list > :nth-child(3) > a').click(); 
        
        cy.get('#AccountFrm_firstname').should('have.value', userdata2.newFirstName);
        cy.get('#AccountFrm_lastname').should('have.value', userdata2.newLastName);

    }) 

    it("Verify that the system doesn't throw an error for clearing optional information", () => {

        
        MyAccountObject.clearField("Phone Number");
        MyAccountObject.clickOnContinueButton();

        cy.get('.alert')
            .should("have.text", "\n×\nSuccess: Your account has been successfully updated.")
            .and('be.visible');

         

    })



})