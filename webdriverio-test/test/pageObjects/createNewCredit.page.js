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

    open(path) {
      return super.open('/line_of_credits/new');
    }
}

export default new CreateNewCreditPage();