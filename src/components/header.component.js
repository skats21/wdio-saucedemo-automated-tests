import HeaderSelectors from "../selectors/header.selectors.js";

class HeaderComponent {
  async openCart() {
    const header = await $(HeaderSelectors.headerContainer);
    const cartLink = await header.$(HeaderSelectors.cartLink);
    await cartLink.waitForDisplayed();
    await cartLink.waitForClickable();
    await cartLink.click();
  }

  async getCartNumber() {
    const header = await $(HeaderSelectors.headerContainer);
    const cartBadge = await header.$(HeaderSelectors.cartBadge);
    const cartCountText = await cartBadge.getText();
    return parseInt(cartCountText, 10);
  }

  async openMenu() {
    //TO DO: Implement the method to open the menu
  }
}

export default new HeaderComponent();
