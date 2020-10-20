import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import {creditPageData, errorMessage} from "../data/createNewCreditData";

describe('NEGATIVE TESTS CREATE NEW CREDIT LINE', () => {
    beforeEach(() => {
        CreateNewCreditPage.open();
    })

    it('should leave empty credit limit field and apr field - error message is appears', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.emptyCreditAprField, creditPageData.emptyCreditLimitField);
        browser.waitUntil(() => CreateNewCreditPage.FourErrorsMessage
            .getText() === errorMessage.fourErrorsMessage);
        expect(CreateNewCreditPage.CreditLimitFieldBlank.getText()).eq(errorMessage.creditLimitFieldBlank);
        expect(CreateNewCreditPage.CreditLimitNotNumber.getText()).eq(errorMessage.creditLimitNotNumber);
        expect(CreateNewCreditPage.AprFieldBlank.getText()).eq(errorMessage.aprFieldBlank);
        expect(CreateNewCreditPage.AprNotNumber.getText()).eq(errorMessage.aprNotNumber);
    });

    it('should leave empty credit limit field and right input apr field - error message is appears', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.creditApr, creditPageData.emptyCreditLimitField);
        browser.waitUntil(() => CreateNewCreditPage.TwoErrorsMessage
            .getText() === errorMessage.twoErrorsMessage);
        expect(CreateNewCreditPage.CreditLimitFieldBlank.getText()).eq(errorMessage.creditLimitFieldBlank);
        expect(CreateNewCreditPage.CreditLimitNotNumber.getText()).eq(errorMessage.creditLimitNotNumber);
    });

    it('should leave empty apr field  and right input credit limit field - error message is appears', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.emptyCreditAprField, creditPageData.creditLimit)
        browser.waitUntil(() => CreateNewCreditPage.TwoErrorsMessage
            .getText() === errorMessage.twoErrorsMessage);
        expect(CreateNewCreditPage.AprFieldBlank.getText()).eq(errorMessage.aprFieldBlank);
        expect(CreateNewCreditPage.AprNotNumber.getText()).eq(errorMessage.aprNotNumber);
    });

    it('should input not a number into apr field and credit limit field - error message is appears', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.creditAprNotNumber, creditPageData.creditLimitNotNumber);
        browser.waitUntil(() => CreateNewCreditPage.TwoErrorsMessage
            .getText() === errorMessage.twoErrorsMessage);
        expect(CreateNewCreditPage.AprNotNumber.getText()).eq(errorMessage.aprNotNumber);
        expect(CreateNewCreditPage.CreditLimitNotNumber.getText()).eq(errorMessage.creditLimitNotNumber);
    });
});