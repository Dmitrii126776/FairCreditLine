import BasePage from './Base.page';

class LineOfCreditPage extends BasePage {
  get notification() {
    return $('#notice');
  }

  get transactionType() {
    return $('#transaction_type');
  }

  get transactionAmount() {
    return $('#transaction_amount');
  }

  get transactionDay() {
    return $('#transaction_applied_at');
  }

  get saveTransactionBtn() {
    return $('[type="submit"]');
  }

  get BackLink() {
    return $('.line_of_credits.show > a');
  }

  get interestTotal() {
    //return browser.$('//strong[contains(text(),"Interest at 30 days:")]');
    return browser.$('//body/p[5]');
  }

  get totalPayoff() {
    return browser.$('//body/p[6]');
    //return browser.$('//strong[contains(text(),"Total Payoff at 30 days:")]');
  }

  get transactionsTable() {
    return browser.$('#transactions_table');
  }

  get dayOfTransaction() {
    //return browser.$('//th[contains(text(),"Day")]');
    return browser.$('//tbody/tr[1]/td[1]');
  }

  get typeOfTransaction() {
    //return browser.$('//th[contains(text(),"Type")]');
    return browser.$('//tbody/tr[1]/td[2]');
  }

  get amountOfTransaction() {
    return browser.$('//tbody/tr[1]/td[3]');
  }

  get principalBalanceOfTransaction() {
    //return browser.$('//th[contains(text(),"Principal Balance")]');
    return browser.$('//tbody/tr[1]/td[4]');
  }

  get interestAccruedOfTransaction() {
    //return browser.$('//th[contains(text(),"Interest Accrued")]');
    return browser.$('//tbody/tr[1]/td[5]');
  }

  createTransaction(type, amount, day) {
    this.transactionType.selectByVisibleText(type);
    this.transactionAmount.setValue(amount);
    this.transactionDay.selectByVisibleText(day);
    this.saveTransactionBtn.click();
  }
}

export default new LineOfCreditPage();
