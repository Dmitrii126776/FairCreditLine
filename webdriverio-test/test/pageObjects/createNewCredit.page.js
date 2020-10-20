import BasePage from "./Base.page";

class CreateNewCreditPage extends BasePage {
    get header() {
        return $('h1');
    }

    get CreditAprIF() {
        return $('#line_of_credit_apr');
    }

    get CreditLimitIF() {
        return $('#line_of_credit_credit_limit');
    }

    get CreateLineOfCreditBtn() {
        return $('[type="submit"]');
    }

    get ErrorMessageTwoEmptyFields() {
        return browser.$('//h2[contains(text(),"4 errors prohibited this line_of_credit from being")]');
    }

    get ErrorMessageOneEmptyField() {
        return browser.$('//h2[contains(text(),"2 errors prohibited this line_of_credit from being")]');
    }

    open(path) {
        return super.open('/line_of_credits/new');
    }

    createNewCredit(creditApr, creditLimit) {
        this.CreditAprIF.setValue(creditApr);
        this.CreditLimitIF.setValue(creditLimit);
        this.CreateLineOfCreditBtn.click();
    }
}

export default new CreateNewCreditPage();