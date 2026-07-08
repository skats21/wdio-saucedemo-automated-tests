import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPO from "../pages/login.po.js";

Given("the user is on the login page", async () => {
  await LoginPO.openLoginPage();
});

When(
  "the user logins with {string} and {string}",
  async (username, password) => {
    await LoginPO.login(username, password);
  },
);

Then("the user should see an error message", async () => {
  const errorMessage = await LoginPO.getErrorMessage();
  expect(errorMessage).toBe(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
