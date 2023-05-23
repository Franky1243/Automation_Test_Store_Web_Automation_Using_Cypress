import Login from "../../PageObjects/LoginPage";
import EditAddress from "../../PageObjects/EditAddressPage";

describe("Managing Address Book", () => {

    const EditAddressObject = new EditAddress();

    let userdata;
    before( () => {
        cy.fixture('accountInfo').then( (data) => {
            userdata = data;
        })
    })

    const loginObject = new Login();

    beforeEach( () => {
        cy.visit("https://automationteststore.com/");                        // Landed to automation test store website  

        cy.get('#customer_menu_top > li > a').click();                       // Click on Login or Register Button in Homepage

        loginObject.enterLoginName(userdata.validLoginName);                 // Entering Login Name
        loginObject.enterPassword(userdata.validPassword);                   // Entering Password
        loginObject.clickOnLoginButton();                                    // Clicking on Login Button
        cy.get('.side_account_list > :nth-child(5) > a').click();

        

    })

    it("Verify that the address book page is opened", ()=> {

        cy.get('.heading4')
            .should('have.text', 'Address Book Entries')
            .and('be.visible');

    })

    it("Verify that the current address can be edited with valid data", ()=> {

        cy.get('tr > .pull-right > .btn').click();
        EditAddressObject.clearField("First Name");
        EditAddressObject.setFirstName("Franky");
        EditAddressObject.setRegion("Khulna");

        EditAddressObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nYour address has been successfully updated')
            .and('be.visible');


    })

    it("Verify that the system will throw an error if a mandatory field is blank while editing the address", ()=> {

        cy.get('tr > .pull-right > .btn').click();
        EditAddressObject.clearField("First Name");

        EditAddressObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nOops, there is an error with information provided!')
            .and('be.visible');


    })

    it("Verify that the system will display a success message after adding a new valid address", ()=> {

        cy.get('.col-md-12 > .btn-orange').click();

        EditAddressObject.setFirstName("Frank");
        EditAddressObject.setLastName("Lampard");
        EditAddressObject.setCompany("ABC Company");
        EditAddressObject.setAddress1("Wolf Street");
        EditAddressObject.setAddress2("Vooter Bari");
        EditAddressObject.setCity("Malibagh");
        EditAddressObject.setCountry("Bangladesh");
        EditAddressObject.setRegion("Chittagong");
        EditAddressObject.setPostCode("1362");
        EditAddressObject.setDefaultAddress("Yes");
        EditAddressObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nYour address has been successfully inserted')
            .and('be.visible');


    })

    it.only("Verify that the system will display an error message after leaving a mandatory field blank", ()=> {

        cy.get('.col-md-12 > .btn-orange').click();

        EditAddressObject.setLastName("Lampard");
        EditAddressObject.setCompany("ABC Company");
        EditAddressObject.setAddress1("Wolf Street");
        EditAddressObject.setAddress2("Vooter Bari");
        EditAddressObject.setCity("Malibagh");
        EditAddressObject.setCountry("Bangladesh");
        EditAddressObject.setRegion("Chittagong");
        EditAddressObject.setPostCode("1362");
        EditAddressObject.setDefaultAddress("Yes");
        EditAddressObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nOops, there is an error with information provided!')
            .and('be.visible');



    })

    

})