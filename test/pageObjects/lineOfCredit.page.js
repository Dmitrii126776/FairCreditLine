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

  get creditAvailable(){
    return browser.$('//body/p[3]');
  }

  get interestTotal() {
    return browser.$('//body/p[5]');
  }

  get totalPayoff() {
    return browser.$('//body/p[6]');
  }

  get transactionsTable() {
    return browser.$('#transactions_table');
  }

  get dayOfTransaction() {
    return browser.$('//tbody/tr[1]/td[1]');
  }

  get typeOfTransaction() {
    return browser.$('//tbody/tr[1]/td[2]');
  }

  get amountOfTransaction() {
    return browser.$('//tbody/tr[1]/td[3]');
  }

  get principalBalanceOfTransaction() {
    return browser.$('//tbody/tr[1]/td[4]');
  }

  get interestAccruedOfTransaction() {
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
