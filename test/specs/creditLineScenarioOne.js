import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import LineOfCreditPage from '../pageObjects/lineOfCredit.page';
import { creditPageData } from '../data/createNewCreditData';
import { lineOfCreditPageData } from '../data/lineOfCreditData';

describe('SCENARIO ONE CREATE CREDIT LINE AND TRACKING TRANSACTIONS', () => {
  before(() => {
    CreateNewCreditPage.open();
  });

  it('TC-004 should validate that user is able to create a new credit line', function () {
    CreateNewCreditPage.createNewCredit(creditPageData.creditApr, creditPageData.creditLimit);
    browser.waitUntil(
      () =>
        LineOfCreditPage.notification.getText() === lineOfCreditPageData.noticeSuccessfullyCreate,
    );
  });

  it('should ', function () {
    LineOfCreditPage.createTransaction(
      lineOfCreditPageData.transactionTypeDraw,
      lineOfCreditPageData.amountDraw,
      lineOfCreditPageData.transactionDay,
    );
    browser.waitUntil(() => LineOfCreditPage.transactionsTable.isDisplayed());
  });

  it('should ', function () {
    //LineOfCreditPage.interestTotal.getText() === lineOfCreditPageData.interestTotal,
    expect(LineOfCreditPage.interestTotal.getText()).contains(lineOfCreditPageData.interestTotal);
  });

  it('should Payoff', function () {
    //expect(LineOfCreditPage.totalPayoff.getText()).eq(lineOfCreditPageData.totalPayoff);
    expect(LineOfCreditPage.totalPayoff.getText()).contains(lineOfCreditPageData.totalPayoff);
  });

  it('should Principal Balance', function () {
    expect(LineOfCreditPage.dayOfTransaction.getText()).eq(lineOfCreditPageData.transactionDay);
    expect(LineOfCreditPage.typeOfTransaction.getText()).eq(
      lineOfCreditPageData.transactionTypeDraw,
    );
    expect(LineOfCreditPage.amountOfTransaction.getText()).eq(
      lineOfCreditPageData.amountOfTransaction,
    );
    expect(LineOfCreditPage.principalBalanceOfTransaction.getText()).eq(
      lineOfCreditPageData.principalBalance,
    );
    expect(LineOfCreditPage.interestAccruedOfTransaction.getText()).eq(
      lineOfCreditPageData.interestAccrued,
    );
  });
});
