import ChangePassword from "../../PageObjects/ChangePasswordPage";
import Login from "../../PageObjects/LoginPage";

describe("Change Password Section", () => {

    let userdata;
    before( () => {
        cy.fixture('accountInfo').then( (data) => {
            userdata = data;
        })
    })

    const loginObject = new Login();
    const ChangePasswordObject = new ChangePassword(); 

    beforeEach( () => {
        cy.visit("https://automationteststore.com/");                        // Landed to automation test store website  

        cy.get('#customer_menu_top > li > a').click();                       // Click on Login or Register Button in Homepage

        loginObject.enterLoginName(userdata.validLoginName);                 // Entering Login Name
        loginObject.enterPassword(userdata.validPassword);                   // Entering Password
        loginObject.clickOnLoginButton();                                    // Clicking on Login Button
        cy.get('.side_account_list > :nth-child(4) > a').click();

        

    })

    it("Verify that all required functionalities are there to change the password", () => {
        cy.get('#PasswordFrm_current_password').should('be.visible');
        cy.get('#PasswordFrm_password').should('be.visible');
        cy.get('#PasswordFrm_confirm').should('be.visible');
    })

    it("Verify that the system throws an error message when new password and confirm password don't match", () => {
        cy.get('#PasswordFrm_current_password').should('be.visible');
        cy.get('#PasswordFrm_password').should('be.visible');
        cy.get('#PasswordFrm_confirm').should('be.visible');

        ChangePasswordObject.setCurrentPassword(userdata.validPassword);
        ChangePasswordObject.setNewPassword(userdata.newPassword);
        ChangePasswordObject.setNewPasswordConfirm(userdata.InvalidConfirmPassword);

        ChangePasswordObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nOops, there is an error with information provided!')
            .and('be.visible');

    })

    it("Verify what happens when you give wrong current password", () => {
        cy.get('#PasswordFrm_current_password').should('be.visible');
        cy.get('#PasswordFrm_password').should('be.visible');
        cy.get('#PasswordFrm_confirm').should('be.visible');

        ChangePasswordObject.setCurrentPassword(userdata.invalidCurrentPassword);
        ChangePasswordObject.setNewPassword(userdata.newPassword);
        ChangePasswordObject.setNewPasswordConfirm(userdata.newPassword);

        ChangePasswordObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nOops, there is an error with information provided!')
            .and('be.visible');
    })

    it("Verify that system successfully changes the password with valid credentials", () => {
        cy.get('#PasswordFrm_current_password').should('be.visible');
        cy.get('#PasswordFrm_password').should('be.visible');
        cy.get('#PasswordFrm_confirm').should('be.visible');

        ChangePasswordObject.setCurrentPassword(userdata.validPassword);
        ChangePasswordObject.setNewPassword(userdata.newPassword);
        ChangePasswordObject.setNewPasswordConfirm(userdata.newPassword);

        ChangePasswordObject.clickOnContinueButton();

        cy.get('.alert')
            .should('have.text', '\n×\nSuccess: Your password has been successfully updated.')
            .and('be.visible');

    })



})