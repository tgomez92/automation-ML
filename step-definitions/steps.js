import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/home.page';
import publicationPage from '../pageobjects/publication.page';
import ubicationPage from '../pageobjects/ubication.page';
import wantedPage from '../pageobjects/wanted.page';

const pages = {
    home: homePage
}

Given(/^I am on the (\w+) page$/, async (page) =>  {
    await pages[page].open()
});

When(/^I access to a (.+)$/, async (category) => {
    await browser.pause(2000);
    await homePage.clickOnCategories();
    await homePage.clickOnTechnology();
    await homePage.selectCategory(category);
});

When(/^I access to the most desired article$/, async () => {
    await wantedPage.accessToWanted();
});

When(/^I access to the ubication of Montevideo$/, async () => {
    await wantedPage.clickOnMontevideo();
});

Then(/^I should access to the correct (.+) category$/, async (category) => {
    let expectedCategory = category;
    expect(await wantedPage.getPageName()).toEqual(expectedCategory);
});

Then(/^I verify the results (.+) quantity$/, async (quantity) => {
    expect(await wantedPage.getCategoryResult()).toEqual(quantity);
});

Then(/^I can validate that the info is the same as the publication$/, async () => {
    let firtTitle = await ubicationPage.getFirstTitle();
    let firstPrice = await ubicationPage.getFirstPrice();
    await ubicationPage.accessToPublication();
    expect(firtTitle).toEqual(await publicationPage.getName());
    expect(firstPrice).toEqual(await publicationPage.getPrice());
});