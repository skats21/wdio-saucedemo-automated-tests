import LogInSelectors from "../selectors/login.selectors.js";
import PagePO from "./page.po.js";

class LoginPO extends PagePO {
  async login(username, password) {
    await $(LogInSelectors.usernameInput).setValue(username);
    await $(LogInSelectors.passwordInput).setValue(password);
    await $(LogInSelectors.loginButton).click();
  }

  async openLoginPage() {
    await super.open("/");
  }

  async getErrorMessage() {
    return await $(LogInSelectors.errorMessage).getText();
  }
}

export default new LoginPO();
