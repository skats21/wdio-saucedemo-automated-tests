import { When, Then } from "@wdio/cucumber-framework";
import HeaderComponent from "../components/header.component.js";

When("the user clicks on the cart icon", async () => {
  await HeaderComponent.openCart();
});

Then(
  /^the user should see that there (?:is|are) (\d+) item(?:s)? in the cart$/,
  async (expectedCount) => {
    const cartCount = await HeaderComponent.getCartNumber();
    expect(Number(cartCount)).toBe(Number(expectedCount));
  },
);
