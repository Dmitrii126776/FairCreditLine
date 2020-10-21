import HomePage from '../pageObjects/home.page';
import { homePageData } from '../data/homePageData';
import CreateNewCredit from '../pageObjects/createNewCredit.page';
import { creditPageData } from '../data/createNewCreditData';

describe('TEST HOMEPAGE', () => {
  before(() => {
    HomePage.open();
  });

  it('TC-001 should validate header Home Page = Listing Line Of Credits', function () {
    expect(HomePage.header.getText()).eq(homePageData.header);
  });

  it('TC-002 should validate user is redirected to the correct page for create a new credit line', function () {
    HomePage.newLineOfCredit();
    browser.waitUntil(() => CreateNewCredit.header.getText() === creditPageData.header);
  });
});
