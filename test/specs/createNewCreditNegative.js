import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import { creditPageData, errorMessage } from '../data/createNewCreditData';

describe('NEGATIVE TESTS CREATE NEW CREDIT LINE', () => {
  beforeEach(() => {
    CreateNewCreditPage.open();
  });

  it('should leave empty credit limit field and apr field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.emptyCreditAprField,
      creditPageData.emptyCreditLimitField,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.fourErrorsMessage.getText() === errorMessage.fourErrorsMessage,
    );
    expect(CreateNewCreditPage.creditLimitFieldBlank.getText()).eq(
      errorMessage.creditLimitFieldBlank,
    );
    expect(CreateNewCreditPage.creditLimitNotNumber.getText()).eq(
      errorMessage.creditLimitNotNumber,
    );
    expect(CreateNewCreditPage.aprFieldBlank.getText()).eq(errorMessage.aprFieldBlank);
    expect(CreateNewCreditPage.aprNotNumber.getText()).eq(errorMessage.aprNotNumber);
  });

  it('should leave empty credit limit field and right input apr field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.creditApr,
      creditPageData.emptyCreditLimitField,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.twoErrorsMessage.getText() === errorMessage.twoErrorsMessage,
    );
    expect(CreateNewCreditPage.creditLimitFieldBlank.getText()).eq(
      errorMessage.creditLimitFieldBlank,
    );
    expect(CreateNewCreditPage.creditLimitNotNumber.getText()).eq(
      errorMessage.creditLimitNotNumber,
    );
  });

  it('should leave empty apr field  and right input credit limit field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.emptyCreditAprField,
      creditPageData.creditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.twoErrorsMessage.getText() === errorMessage.twoErrorsMessage,
    );
    expect(CreateNewCreditPage.aprFieldBlank.getText()).eq(errorMessage.aprFieldBlank);
    expect(CreateNewCreditPage.aprNotNumber.getText()).eq(errorMessage.aprNotNumber);
  });

  it('should input not a number into apr field and input not a number into credit limit field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.creditAprNotNumber,
      creditPageData.creditLimitNotNumber,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.twoErrorsMessage.getText() === errorMessage.twoErrorsMessage,
    );
    expect(CreateNewCreditPage.aprNotNumber.getText()).eq(errorMessage.aprNotNumber);
    expect(CreateNewCreditPage.creditLimitNotNumber.getText()).eq(
      errorMessage.creditLimitNotNumber,
    );
  });

  it('should input right number into apr field and input not a number into credit limit field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.creditApr,
      creditPageData.creditLimitNotNumber,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.oneErrorsMessage.getText() === errorMessage.oneErrorMessage,
    );
    expect(CreateNewCreditPage.creditLimitNotNumber.getText()).eq(
      errorMessage.creditLimitNotNumber,
    );
  });

  it('should input right number into credit limit field and input not a number into apr field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.creditAprNotNumber,
      creditPageData.creditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.oneErrorsMessage.getText() === errorMessage.oneErrorMessage,
    );
    expect(CreateNewCreditPage.aprNotNumber.getText()).eq(errorMessage.aprNotNumber);
  });

  it('should input negative numbers into apr field and into credit limit field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.negativeNumberApr,
      creditPageData.negativeNumberCreditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.twoErrorsMessage.getText() === errorMessage.twoErrorsMessage,
    );
    expect(CreateNewCreditPage.negativeNumberApr.getText()).eq(errorMessage.negativeNumberApr);
    expect(CreateNewCreditPage.negativeNumberCreditLimit.getText()).eq(
      errorMessage.negativeNumberCreditLimit,
    );
  });

  it('should input negative number into apr field and right into credit limit field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.negativeNumberApr,
      creditPageData.creditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.oneErrorsMessage.getText() === errorMessage.oneErrorMessage,
    );
    expect(CreateNewCreditPage.negativeNumberApr.getText()).eq(errorMessage.negativeNumberApr);
  });

  it('should input negative number into credit limit field and right into apr field - error message is appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.creditApr,
      creditPageData.negativeNumberCreditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.oneErrorsMessage.getText() === errorMessage.oneErrorMessage,
    );
    expect(CreateNewCreditPage.negativeNumberCreditLimit.getText()).eq(
      errorMessage.negativeNumberCreditLimit,
    );
  });
});
