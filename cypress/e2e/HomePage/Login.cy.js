import Login from "../../PageObjects/LoginPage";

describe("Login with different test cases", () => {

    let userdata;
    before( () => {
        cy.fixture('accountInfo').then( (data) => {
            userdata = data;
        })
    })

    beforeEach( () => {
        cy.visit("https://automationteststore.com/");     // Landed to automation test store website
        cy.title().should('eq', "A place to practice your automation skills!") // Title Assertion

        cy.get('#customer_menu_top > li > a').click();    // Click on Login or Register Button in Homepage
    })

    const loginObject = new Login();
    it("Login with valid credentials", () => {
       
        loginObject.enterLoginName(userdata.validLoginName);
        loginObject.enterPassword(userdata.validPassword);
        loginObject.clickOnLoginButton();
        cy.wait(5000);
        cy.screenshot();
    })

    it("Login with invalid credentials", () => {
        loginObject.enterLoginName(userdata.InvalidLoginName);
        loginObject.enterPassword(userdata.invalidPassword);
        loginObject.clickOnLoginButton();
        cy.wait(5000);
        cy.screenshot();
    })

    it("Login with invalid credentials and then clicking on forgot password button", () => {
        loginObject.enterLoginName(userdata.InvalidLoginName);
        loginObject.enterPassword(userdata.invalidPassword);
        loginObject.clickOnLoginButton();
        
        loginObject.clickOnForgotPassword();
        cy.wait(5000);
        cy.screenshot();
    })

    it("Login with invalid credentials and then clicking on forgot login button", () => {
        loginObject.enterLoginName(userdata.InvalidLoginName);
        loginObject.enterPassword(userdata.invalidPassword);
        loginObject.clickOnLoginButton();
        
        loginObject.clickOnForgotLogin();
        cy.wait(5000);
        cy.screenshot();
    })

})