import { Before, After } from "@wdio/cucumber-framework";
import LoginPO from "../pages/login.po.js";
import usersCredentials from "../config/users.credentials.js";

Before("@loggedIn", async () => {
  await LoginPO.openLoginPage();
  await LoginPO.login(
    usersCredentials.standardUser.username,
    usersCredentials.standardUser.password,
  );
});

After("@clearSession", async () => {
  await browser.reloadSession();
});
