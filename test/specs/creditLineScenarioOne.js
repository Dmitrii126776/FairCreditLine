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

  it('should validate that user is able to draw $500.00 on day 1', function () {
    LineOfCreditPage.createTransaction(
      lineOfCreditPageData.transactionTypeDraw,
      lineOfCreditPageData.amountDrawFirstTransaction,
      lineOfCreditPageData.transactionFirstDay,
    );
    browser.waitUntil(() => LineOfCreditPage.transactionsTable.isDisplayed());
  });

  it('should validate day and type of first transaction in Transaction Table', function () {
    expect(LineOfCreditPage.dayFirstTransaction.getText()).eq(
      lineOfCreditPageData.transactionFirstDay,
    );
    expect(LineOfCreditPage.typeFirstTransaction.getText()).eq(
      lineOfCreditPageData.transactionTypeDraw,
    );
  });
  it('should validate amount of first transaction in Transaction Table', function () {
    expect(LineOfCreditPage.amountFirstTransaction.getText()).eq(
      lineOfCreditPageData.amountFirstTransaction,
    );
  });

  it('should validate principal balance of first transaction in Transaction Table', function () {
    expect(LineOfCreditPage.principalBalanceFirstTransaction.getText()).eq(
      lineOfCreditPageData.principalBalanceFirstTransaction,
    );
  });

  it('should validate interest accrued of first transaction in Transaction Table', function () {
    expect(LineOfCreditPage.interestAccruedFirstTransaction.getText()).eq(
      lineOfCreditPageData.interestAccruedFirstTransaction,
    );
  });

  it('should validate that field Interest at 30 days has result $14.38', function () {
    expect(LineOfCreditPage.interestTotal.getText()).contains(
      lineOfCreditPageData.interestTotalFirstTransaction,
    );
  });

  it('should validate that field Total Payoff at 30 days has result $514.38', function () {
    expect(LineOfCreditPage.totalPayoff.getText()).contains(
      lineOfCreditPageData.totalPayoffFirstTransaction,
    );
  });

  it('should validate that field Credit Available($500.00) equals amount in Transaction Table($500.00)', function () {
    expect(LineOfCreditPage.creditAvailable.getText()).contains(
      lineOfCreditPageData.amountFirstTransaction,
    );
  });
});
