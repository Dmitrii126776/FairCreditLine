import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import { creditPageData, errorMessage } from '../data/createNewCreditData';

describe('NEGATIVE TESTS CREATE NEW CREDIT LINE', () => {
  beforeEach(() => {
    CreateNewCreditPage.open();
  });

  it('TC-033 should leave empty Credit limit field and empty Apr field - error message appears', function () {
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

  it('TC-034 should leave empty Credit limit field and input valid number in Apr field - error message appears', function () {
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

  it('TC-035 should leave empty Apr field and enter valid number in Credit limit field - error message appears', function () {
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

  it('TC-036 should enter not a number into Apr field and enter not a number into Credit limit field - error message appears', function () {
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

  it('TC-037 should enter valid number into Apr field and enter not a number into Credit limit field - error message appears', function () {
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

  it('TC-038 should enter valid number into Credit limit field and enter not a number into Apr field - error message appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.creditAprNotNumber,
      creditPageData.creditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.oneErrorsMessage.getText() === errorMessage.oneErrorMessage,
    );
    expect(CreateNewCreditPage.aprNotNumber.getText()).eq(errorMessage.aprNotNumber);
  });

  it('TC-039 should enter negative number into Apr field and negative number into Credit limit field - error message appears', function () {
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

  it('TC-040 should enter negative number into Apr field and valid number into Credit limit field - error message appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.negativeNumberApr,
      creditPageData.creditLimit,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.oneErrorsMessage.getText() === errorMessage.oneErrorMessage,
    );
    expect(CreateNewCreditPage.negativeNumberApr.getText()).eq(errorMessage.negativeNumberApr);
  });

  it('TC-041 should enter negative number into Credit limit field and valid number into Apr field - error message appears', function () {
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

  it('TC-042 should leave empty Credit limit field and enter negative number into Apr field - error message appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.negativeNumberApr,
      creditPageData.emptyCreditLimitField,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.threeErrorsMessage.getText() === errorMessage.threeErrorsMessage,
    );
    expect(CreateNewCreditPage.creditLimitFieldBlank.getText()).eq(
      errorMessage.creditLimitFieldBlank,
    );
    expect(CreateNewCreditPage.creditLimitNotNumber.getText()).eq(
      errorMessage.creditLimitNotNumber,
    );
    expect(CreateNewCreditPage.negativeNumberApr.getText()).eq(errorMessage.negativeNumberApr);
  });

  it('TC-043 should leave empty Apr field  and enter not a number into Credit limit field - error message appears', function () {
    CreateNewCreditPage.createNewCredit(
      creditPageData.emptyCreditAprField,
      creditPageData.creditLimitNotNumber,
    );
    browser.waitUntil(
      () => CreateNewCreditPage.threeErrorsMessage.getText() === errorMessage.threeErrorsMessage,
    );
    expect(CreateNewCreditPage.aprFieldBlank.getText()).eq(errorMessage.aprFieldBlank);
    expect(CreateNewCreditPage.aprNotNumber.getText()).eq(errorMessage.aprNotNumber);
    expect(CreateNewCreditPage.creditLimitNotNumber.getText()).eq(
      errorMessage.creditLimitNotNumber,
    );
  });
});
