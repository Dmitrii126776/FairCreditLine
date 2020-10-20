import BasePage from './Base.page';

class CreateNewCreditPage extends BasePage {
  get header() {
    return $('h1');
  }

  get creditAprIF() {
    return $('#line_of_credit_apr');
  }

  get creditLimitIF() {
    return $('#line_of_credit_credit_limit');
  }

  get createLineOfCreditBtn() {
    return $('[type="submit"]');
  }

  get fourErrorsMessage() {
    return browser.$('//h2[contains(text(),"4 errors prohibited this line_of_credit from being")]');
  }

  get threeErrorsMessage() {
    return browser.$('//h2[contains(text(),"3 errors prohibited this line_of_credit from being")]');
  }

  get twoErrorsMessage() {
    return browser.$('//h2[contains(text(),"2 errors prohibited this line_of_credit from being")]');
  }

  get oneErrorsMessage() {
    return browser.$('//h2[contains(text(),"1 error prohibited this line_of_credit from being")]');
  }

  get aprFieldBlank() {
    return browser.$('//li[contains(text(),"Apr can\'t be blank")]');
  }

  get aprNotNumber() {
    return browser.$('//li[contains(text(),"Apr is not a number")]');
  }

  get creditLimitFieldBlank() {
    return browser.$('//li[contains(text(),"Credit limit can\'t be blank")]');
  }

  get creditLimitNotNumber() {
    return browser.$('//li[contains(text(),"Credit limit is not a number")]');
  }

  get negativeNumberApr() {
    return browser.$('//li[contains(text(),"Apr must be greater than or equal to 0.0")]');
  }

  get negativeNumberCreditLimit() {
    return browser.$('//li[contains(text(),"Credit limit must be greater than or equal to 0.0")]');
  }

  open(path) {
    return super.open('/line_of_credits/new');
  }

  createNewCredit(creditApr, creditLimit) {
    this.creditAprIF.setValue(creditApr);
    this.creditLimitIF.setValue(creditLimit);
    this.createLineOfCreditBtn.click();
  }
}

export default new CreateNewCreditPage();
