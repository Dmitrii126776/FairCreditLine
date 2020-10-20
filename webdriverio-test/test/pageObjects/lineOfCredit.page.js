import BasePage from "./Base.page";

class LineOfCreditPage extends BasePage {
    get notification () {
        return $('#notice');
    }
}

export default new LineOfCreditPage();