import HomePage from '../pageObjects/home.page';
import {pageData} from "../data/homePageData";
import CreateNewCredit from '../pageObjects/createNewCredit.page';
import {creditPageData} from '../data/createNewCreditData';

describe('TEST HOMEPAGE',()=>{
    before(()=>{
       HomePage.open();
    });

    it('should verify header Home Page = Listing Line Of Credits', function () {
        expect(HomePage.header.getText()).eq(pageData.header);
    });

    it('should verify user is redirected to the correct page', function () {
        HomePage.newLineOfCredit();
        browser.waitUntil(() => CreateNewCredit.header.getText() === creditPageData.header);
    });
});