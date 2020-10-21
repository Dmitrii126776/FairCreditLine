import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import { creditPageData } from '../data/createNewCreditData';
import LineOfCreditPage from '../pageObjects/lineOfCredit.page';
import { lineOfCreditPageData } from '../data/lineOfCreditData';

describe('CREATE NEW CREDIT LINE', () => {
  before(() => {
    CreateNewCreditPage.open();
  });

  it('TC-003 should validate header of page = New Line Of Credit', function () {
    expect(CreateNewCreditPage.header.getText()).eq(creditPageData.header);
  });

  it('TC-004 should validate that user is able to create a new credit line', function () {
    CreateNewCreditPage.createNewCredit(creditPageData.creditApr, creditPageData.creditLimit);
    browser.waitUntil(
      () =>
        LineOfCreditPage.notification.getText() === lineOfCreditPageData.noticeSuccessfullyCreate,
    );
  });
});
