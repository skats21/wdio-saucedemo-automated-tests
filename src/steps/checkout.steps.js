import { When } from "@wdio/cucumber-framework";
import CartPO from "../pages/cart.po.js";
import CheckoutPO from "../pages/checkout.po.js";

When("the user clicks the checkout button", async () => {
  await CartPO.clickCheckout();
});

When("the user clicks the continue button", async () => {
  await CheckoutPO.clickContinue();
});

When("the user clicks the finish button", async () => {
  await CheckoutPO.clickFinish();
});

When(
  "the user sets the value {string} in the {string} field",
  async (value, fieldName) => {
    await CheckoutPO.fillInputField(fieldName, value);
  },
);
