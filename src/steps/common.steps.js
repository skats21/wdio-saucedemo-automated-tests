import PagePO from "../pages/page.po.js";
import { Pages } from "../constants/pages.constants.js";
import { Then, When } from "@wdio/cucumber-framework";

const pagePO = new PagePO();

Then("the user should see the {string} page", async (pageName) => {
  const expectedPage = Pages[pageName];
  const currentUrl = await pagePO.getCurrentUrl();

  if (expectedPage.title) {
    const title = await pagePO.getTitle();
    expect(title).toBe(expectedPage.title);
  }
  expect(currentUrl).toContain(expectedPage.url);
});

When("the user clicks the 'Checkout' button", async () => {
  await pagePO.clickCheckoutButton();
});
