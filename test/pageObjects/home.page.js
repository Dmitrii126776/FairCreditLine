import BasePage from './Base.page';

class HomePage extends BasePage {
  get header() {
    return $('h1');
  }

  get newCreditLine() {
    return $('[href="/line_of_credits/new"]');
  }

  open(path) {
    super.open('/');
  }

  newLineOfCredit() {
    this.newCreditLine.click();
  }
}

export default new HomePage();
