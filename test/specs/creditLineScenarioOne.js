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

  it('should validate that user is able to draw $500.00 at first day', function () {
    LineOfCreditPage.createTransaction(
      lineOfCreditPageData.transactionTypeDraw,
      lineOfCreditPageData.amountDraw,
      lineOfCreditPageData.transactionDay,
    );
    browser.waitUntil(() => LineOfCreditPage.transactionsTable.isDisplayed());
  });

  it('should validate that line interest at 30 days has result $14.38', function () {
    expect(LineOfCreditPage.interestTotal.getText()).contains(lineOfCreditPageData.interestTotal);
  });

  it('should validate that line total payoff at 30 days has result $514.38', function () {
    expect(LineOfCreditPage.totalPayoff.getText()).contains(lineOfCreditPageData.totalPayoff);
  });

  it('should validate that credit available($500.00) equals amount of transaction', function () {
    expect(LineOfCreditPage.creditAvailable.getText()).contains(
      lineOfCreditPageData.amountOfTransaction,
    );
  });

  it('should validate day and type of first transaction', function () {
    expect(LineOfCreditPage.dayOfTransaction.getText()).eq(lineOfCreditPageData.transactionDay);
    expect(LineOfCreditPage.typeOfTransaction.getText()).eq(
      lineOfCreditPageData.transactionTypeDraw,
    );
  });
  it('should validate amount of first transaction', function () {
    expect(LineOfCreditPage.amountOfTransaction.getText()).eq(
      lineOfCreditPageData.amountOfTransaction,
    );
  });

  it('should validate principal balance of first transaction', function () {
    expect(LineOfCreditPage.principalBalanceOfTransaction.getText()).eq(
      lineOfCreditPageData.principalBalance,
    );
  });

  it('should validate interest accrued of first transaction', function () {
    expect(LineOfCreditPage.interestAccruedOfTransaction.getText()).eq(
      lineOfCreditPageData.interestAccrued,
    );
  });
});
