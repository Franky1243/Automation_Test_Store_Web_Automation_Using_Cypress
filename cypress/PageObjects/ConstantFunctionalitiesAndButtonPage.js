class ConstantFunctionalities {

    ClickOnLogo()
    {
        cy.get('.logo > img').click();
    }

    clickOnCurrencySelection(currency)
    {
        cy.get('.block_6 > .nav > .dropdown > .dropdown-toggle').click();
        if(currency == "Euro")
        {
            cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(1) > a").click();
        }

        else if(currency == "Pound")
        {
            cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(2) > a").click();
            
        }

        else if(currency == "US Dollar")
        {
            cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > ul > li:nth-child(3) > a").click();
        }

    }



    

    enterOnSearch(search)
    {
        cy.get("#filter_keyword").type(search);
    }

    clickOnCategoryHomeBtn()
    {
        cy.get('.nav-pills > :nth-child(1) > .active').click();
    }

    clickOnCategoryApparelAndAccessoriesBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

    }

    clickOnCategoryMakeupBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click();
    }

    clickOnCategorySkinCareBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click();
    }

    clickOnCategoryFragranceBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=49"]').click();
    }

    clickOnCategoryMenBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click();
    }

    clickOnCategoryHairCareBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click();
    }

    clickOnCategoryBooksBtn()
    {
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click();
    }

    clickOnFooterAboutUSBtn()
    {
        cy.get('.info_links_footer > :nth-child(1) > .dropdown > a').click();
    }

    clickOnFooterPrivacyPolicyBtn()
    {
        cy.get('.info_links_footer > :nth-child(2) > .dropdown > a').click();
    }

    clickOnFooterReturnPolicyBtn()
    {
        cy.get(':nth-child(3) > .dropdown > a').click();
    }

    clickOnFooterShippingBtn()
    {
        cy.get(':nth-child(4) > .dropdown > a').click();
    }

    clickOnFooterContactUsBtn()
    {
        cy.get('.info_links_footer > :nth-child(5) > a').click();
    }

    clickOnFooterSiteMapBtn()
    {
        cy.get('.info_links_footer > :nth-child(6) > a').click();
    }

    clickOnFooterLogoffBtn()
    {
        cy.get('.info_links_footer > :nth-child(7) > a').click();
    }

    clickOnFooterAccountBtn()
    {
        cy.get('.info_links_footer > :nth-child(8) > a').click();
    }

    clickOnFooterBasketBtn()
    {
        cy.get('.info_links_footer > :nth-child(9) > a').click();
    }

    clickOnFooterContributeBtn()
    {
        cy.get('.b_block > a > img').click();
    }



}

export default ConstantFunctionalities;