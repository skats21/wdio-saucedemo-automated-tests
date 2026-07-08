import HeaderSelectors from "../selectors/header.selectors.js";

class PagePO {
  async open(path) {
    await browser.url(path);
  }

  async getTitle() {
    const header = await $(HeaderSelectors.headerContainer);
    const title = await header.$(HeaderSelectors.title);
    await title.waitForDisplayed();
    const text = await title.getText();
    return text;
  }

  async getCurrentUrl() {
    return await browser.getUrl();
  }
}

export default PagePO;
