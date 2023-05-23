class AdminDashboard {

    

    clickOnAdminDashboardBtn()
    {
        cy.get('.side_account_list > :nth-child(1) > a').click();
    }

    clickOnMyWishListBtn()
    {
        cy.get('.side_account_list > :nth-child(2) > a').click();
    }

    clickOnEditAccountDetailsBtn()
    {
        cy.get('.side_account_list > :nth-child(3) > a').click();
    }

    clickOnChangePasswordBtn()
    {
        cy.get('.side_account_list > :nth-child(4) > a').click();
    }

    clickOnManageAddressBookBtn()
    {
        cy.get('.side_account_list > :nth-child(5) > a').click();
    }

    clickOnOrderHistoryBtn()
    {
        cy.get('.side_account_list > :nth-child(6) > a').click();
    }

    clickOnTransactionHistoryBtn()
    {
        cy.get('.side_account_list > :nth-child(7) > a').click();
    }

    clickOnDownloadsBtn()
    {
        cy.get('.side_account_list > :nth-child(8) > a').click();
    }

    clickOnNotificationsBtn()
    {
        cy.get('.side_account_list > :nth-child(9) > a').click();
    }

    clickOnLogoffBtn()
    {
        cy.get('.side_account_list > :nth-child(10) > a').click();
    }

    

}

export default AdminDashboard;