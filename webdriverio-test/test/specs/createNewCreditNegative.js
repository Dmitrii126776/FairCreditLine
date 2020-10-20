import CreateNewCreditPage from '../pageObjects/createNewCredit.page';
import {creditPageData, errorMessage} from "../data/createNewCreditData";

describe('NEGATIVE TESTS CREATE NEW CREDIT LINE', () => {
    beforeEach(() => {
        CreateNewCreditPage.open();
    })

    it('should leave empty credit limit field and apr field', function () {
        CreateNewCreditPage.createNewCredit();
        browser.waitUntil(() => CreateNewCreditPage.ErrorMessageTwoEmptyFields
            .getText() === errorMessage.errorMessageFourErrors);
    });

    it('should leave empty credit limit field', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.creditApr);
        browser.waitUntil(() => CreateNewCreditPage.ErrorMessageOneEmptyField
            .getText() === errorMessage.errorMessageTwoErrors);
    });

    it('should leave empty apr field', function () {
        CreateNewCreditPage.createNewCredit(creditPageData.creditLimit)
        browser.waitUntil(() => CreateNewCreditPage.ErrorMessageOneEmptyField
            .getText() === errorMessage.errorMessageTwoErrors);
    });
});