import { When, Then } from "@cucumber/cucumber";
import BurgerMenuComponent from "../components/burger-menu.component.js";

When("the user clicks on the burger menu icon", async () => {
  await BurgerMenuComponent.open();
});

When(
  "the user clicks on the {string} option from the burger menu",
  async (option) => {
    await BurgerMenuComponent.clickMenuItem(option);
  },
);

Then("the user should see the burger menu options:", async (dataTable) => {
  const expectedOptions = dataTable.raw().flat();
  const actualOptions = await BurgerMenuComponent.getMenuOptions();
  expect(actualOptions).toEqual(expectedOptions);
});
