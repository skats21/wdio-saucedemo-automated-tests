class DropDownSelectComponent {
  constructor(selector) {
    this.element = $(selector);
  }

  async select(option) {
    await this.element.waitForDisplayed();
    await this.element.selectByVisibleText(option);
  }
}

export default DropDownSelectComponent;
