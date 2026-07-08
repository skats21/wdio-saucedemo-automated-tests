import BurgerMenuSelectors from "../selectors/burger-menu.selectors.js";

class BurgerMenuComponent {
  async open() {
    const openBtn = await $(BurgerMenuSelectors.openButton);
    await openBtn.waitForDisplayed();
    await openBtn.click();
    const menu = await this.getRootElm();
    await menu.waitForDisplayed();
    await browser.waitUntil(async () => {
      const menuItems = await menu.$$(".bm-item");
      return menuItems.length === 4;
    });
  }

  async clickMenuItem(option) {
    const root = await this.getRootElm();
    const optionElement = await root.$(BurgerMenuSelectors.menuItem(option));
    await optionElement.click();
  }

  async getMenuOptions() {
    const root = await this.getRootElm();
    const optionElements = await root.$$(".bm-item");
    const options = [];
    for (const optionElement of optionElements) {
      const optionText = await optionElement.getText();
      options.push(optionText);
    }
    return options;
  }

  async getRootElm() {
    return await $(BurgerMenuSelectors.menu);
  }
}

export default new BurgerMenuComponent();
