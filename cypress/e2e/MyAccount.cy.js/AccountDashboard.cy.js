import Login from "../../PageObjects/LoginPage";
import AdminDashboard from "../../PageObjects/AccountDashboardPage";
import ConstantFunctionalities from "../../PageObjects/ConstantFunctionalitiesAndButtonPage";

describe("Account Dashboard Functionalities Checking", () => {


    // Fetching data from fixture
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
        
        

    })

    const adminDashboardObject = new AdminDashboard();

    it("Checking if all the major functionalities of account dashboard are working or not", () => {

        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' My Account');

        adminDashboardObject.clickOnMyWishListBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' My wish list');  

        adminDashboardObject.clickOnEditAccountDetailsBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' My Account Information');

        adminDashboardObject.clickOnChangePasswordBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' Change Password');

        adminDashboardObject.clickOnManageAddressBookBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' Address Book');

        adminDashboardObject.clickOnOrderHistoryBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' My Order History');

        adminDashboardObject.clickOnTransactionHistoryBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' My Transactions');

        adminDashboardObject.clickOnDownloadsBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' Account Downloads');

        adminDashboardObject.clickOnNotificationsBtn();
        cy.get('.footerlinks').scrollIntoView({ duration: 2000 });
        cy.get('.maintext').should('have.text', ' Notifications and Newsletter');

        adminDashboardObject.clickOnLogoffBtn();
        cy.get('.maintext').should('have.text', ' Account Logout');

    })

    const conFuncBtnObject = new ConstantFunctionalities();

    it.only("Checking if all the minor functionalities of account dashboard are working or not", () => {

        
        conFuncBtnObject.ClickOnLogo();                // Clicking on logo button
        cy.title().should('eq', 'A place to practice your automation skills!');
        cy.go('back');

        conFuncBtnObject.clickOnCurrencySelection('Euro');                // Clicking on logo button
        cy.get('.block_6 > .nav > .dropdown > .dropdown-toggle').should('have.text', '€ Euro');
        cy.go('back');

        conFuncBtnObject.clickOnCategoryHomeBtn();                  // Clicking on home button
        cy.go('back');

        conFuncBtnObject.clickOnCategoryApparelAndAccessoriesBtn();
        cy.go('back');

        conFuncBtnObject.clickOnCategoryMakeupBtn;
        cy.go('back');

        conFuncBtnObject.clickOnCategorySkinCareBtn();
        cy.go('back');

        conFuncBtnObject.clickOnCategoryFragranceBtn();
        cy.go('back');

        conFuncBtnObject.clickOnCategoryMenBtn();
        cy.go('back');

        conFuncBtnObject.clickOnCategoryHairCareBtn();
        cy.go('back');

        conFuncBtnObject.clickOnCategoryBooksBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterAboutUSBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterPrivacyPolicyBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterReturnPolicyBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterShippingBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterContactUsBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterSiteMapBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterAccountBtn();
        cy.go('back');

        conFuncBtnObject.clickOnFooterBasketBtn();
        cy.go('back');

        

        conFuncBtnObject.clickOnFooterLogoffBtn();
        








    })

})