import ButtonComponent from "../components/button.component.js";
import ButtonSelectors from "../selectors/button.selectors.js";
import InputComponent from "../components/input.component.js";
import InputSelectors from "../selectors/input.selectors.js";

class CheckoutPO {
  async clickContinue() {
    const root = await $("[data-test='checkout-info-container']");
    await ButtonComponent.click(root, ButtonSelectors.Continue);
  }

  async clickFinish() {
    const root = await $("[data-test='checkout-summary-container']");
    await ButtonComponent.click(root, ButtonSelectors.Finish);
  }

  async fillInputField(fieldName, value) {
    const selector = InputSelectors[fieldName];
    if (!selector) {
      throw new Error(`No input selector found for field: ${fieldName}`);
    }
    const root = await $("[data-test='checkout-info-container']");
    await InputComponent.setInputValue(root, selector, value);
  }
}

export default new CheckoutPO();
