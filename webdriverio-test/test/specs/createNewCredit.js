import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import {creditPageData} from "../data/createNewCreditData";
import LineOfCreditPage from '../pageObjects/lineOfCredit.page';
import {lineOfCreditPageData} from '../data/lineOfCreditData';

describe('CREATE NEW CREDIT LINE', () => {
    before(() => {
        CreateNewCreditPage.open();
    })

    it('should verify header of page = New Line Of Credit', function () {
        expect(CreateNewCreditPage.header.getText()).eq(creditPageData.header);
    });

    it('should verify that user create new credit line', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.creditApr, creditPageData.creditLimit);
        browser.waitUntil(() => LineOfCreditPage.notification
            .getText() === lineOfCreditPageData.noticeSuccessfullyCreate);
    });
});