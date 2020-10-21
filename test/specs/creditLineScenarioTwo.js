import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import { creditPageData } from '../data/createNewCreditData';
import LineOfCreditPage from '../pageObjects/lineOfCredit.page';
import { lineOfCreditPageData } from '../data/lineOfCreditData';

describe('SCENARIO TWO CREATE CREDIT LINE AND TRACKING THREE TRANSACTIONS', () => {
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

  it('should validate that field Credit Available($500.00) equals Principal Balance in Transaction Table($500.00)', function () {
    expect(LineOfCreditPage.creditAvailable.getText()).contains(
      lineOfCreditPageData.principalBalanceFirstTransaction,
    );
  });

  it('should validate that user is able to do payment $200.00 on day 15', function () {
    LineOfCreditPage.createTransaction(
      lineOfCreditPageData.transactionTypePayment,
      lineOfCreditPageData.amountPaymentSecondTransaction,
      lineOfCreditPageData.transactionSecondDay,
    );
    browser.waitUntil(() => LineOfCreditPage.transactionsTable.isDisplayed());
  });

  it('should validate day and type of second transaction in Transaction Table', function () {
    expect(LineOfCreditPage.daySecondTransaction.getText()).eq(
      lineOfCreditPageData.transactionSecondDay,
    );
    expect(LineOfCreditPage.typeSecondTransaction.getText()).eq(
      lineOfCreditPageData.transactionTypePayment,
    );
  });

  it('should validate amount of second transaction in Transaction Table', function () {
    expect(LineOfCreditPage.amountSecondTransaction.getText()).eq(
      lineOfCreditPageData.amountSecondTransaction,
    );
  });

  it('should validate principal balance of second transaction in Transaction Table', function () {
    expect(LineOfCreditPage.principalBalanceSecondTransaction.getText()).eq(
      lineOfCreditPageData.principalBalanceSecondTransaction,
    );
  });

  it('should validate interest accrued of second transaction in Transaction Table', function () {
    expect(LineOfCreditPage.interestAccruedSecondTransaction.getText()).eq(
      lineOfCreditPageData.interestAccruedSecondTransaction,
    );
  });

  it('should validate that field Credit Available($300.00) equals Principal Balance in Transaction Table($300.00)', function () {
    expect(LineOfCreditPage.creditAvailable.getText()).contains(
      lineOfCreditPageData.principalBalanceSecondTransaction,
    );
  });

  it('should validate that user is able to draw $100.00 on day 25', function () {
    LineOfCreditPage.createTransaction(
      lineOfCreditPageData.transactionTypeDraw,
      lineOfCreditPageData.amountDrawThirdTransaction,
      lineOfCreditPageData.transactionThirdDay,
    );
    browser.waitUntil(() => LineOfCreditPage.transactionsTable.isDisplayed());
  });

  it('should validate day and type of third transaction in Transaction Table', function () {
    expect(LineOfCreditPage.dayThirdTransaction.getText()).eq(
      lineOfCreditPageData.transactionThirdDay,
    );
    expect(LineOfCreditPage.typeThirdTransaction.getText()).eq(
      lineOfCreditPageData.transactionTypeDraw,
    );
  });

  it('should validate amount of third transaction in Transaction Table', function () {
    expect(LineOfCreditPage.amountThirdTransaction.getText()).eq(
      lineOfCreditPageData.amountThirdTransaction,
    );
  });

  it('should validate principal balance of third transaction in Transaction Table', function () {
    expect(LineOfCreditPage.principalBalanceThirdTransaction.getText()).eq(
      lineOfCreditPageData.principalBalanceThirdTransaction,
    );
  });

  it('should validate interest accrued of third transaction in Transaction Table', function () {
    expect(LineOfCreditPage.interestAccruedThirdTransaction.getText()).eq(
      lineOfCreditPageData.interestAccruedThirdTransaction,
    );
  });

  it('should validate that field Credit Available($400.00) equals Principal Balance in Transaction Table($400.00)', function () {
    expect(LineOfCreditPage.creditAvailable.getText()).contains(
      lineOfCreditPageData.principalBalanceThirdTransaction,
    );
  });
});
