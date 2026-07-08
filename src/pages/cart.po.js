import ButtonComponent from "../components/button.component.js";
import ButtonSelectors from "../selectors/button.selectors.js";

class CartPO {
  async clickCheckout() {
    const root = await $("[data-test='cart-contents-container']");
    await ButtonComponent.click(root, ButtonSelectors.Checkout);
  }
}

export default new CartPO();
