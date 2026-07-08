import ProductsListSelectors from "../selectors/products-list.selectors.js";
import DropDownSelectComponent from "../components/drop-down-select.component.js";
import HeaderSelectors from "../selectors/header.selectors.js";

class ProductsListPO {
  getSortDropdown() {
    return new DropDownSelectComponent(ProductsListSelectors.sortDropdown);
  }

  async sortProductsBy(option) {
    const sortDropdown = this.getSortDropdown();
    await sortDropdown.select(option);
  }

  async getProducts() {
    const productsContainer = await this.getProductsContainer();
    await this.waitForProductsToLoad();
    return await productsContainer.$$(ProductsListSelectors.productItem);
  }

  async getName(product) {
    return await product.$(ProductsListSelectors.productName).getText();
  }

  async getDescription(product) {
    return await product.$(ProductsListSelectors.productDescription).getText();
  }

  async getPrice(product) {
    return await product.$(ProductsListSelectors.productPrice).getText();
  }

  async waitForProductsToLoad() {
    await browser.waitUntil(
      async () => {
        const productsContainer = await this.getProductsContainer();
        const products = await productsContainer.$$(
          ProductsListSelectors.productItem,
        );
        return products.length === 6;
      },
      {
        timeout: 5000,
        timeoutMsg: "Products did not load within the expected time",
      },
    );
  }

  async getProductsContainer() {
    return await $(ProductsListSelectors.productsContainer);
  }

  changeProductNameToSelectorFormat(productName) {
    return productName.toLowerCase().replaceAll(/\s+/g, "-");
  }

  async clickAddToCartButton(productName) {
    const products = await this.getProducts();
    for (const product of products) {
      const name = await this.getName(product);

      if (name === productName) {
        const addToCartButton = product.$(
          ProductsListSelectors.addToCartButton(
            this.changeProductNameToSelectorFormat(productName),
          ),
        );
        await addToCartButton.waitForDisplayed();
        await addToCartButton.waitForClickable();
        await addToCartButton.click();
        return;
      }
    }

    throw new Error(`Product "${productName}" was not found`);
  }

  async clickRemoveFromCartButton(productName) {
    const products = await this.getProducts();
    for (const product of products) {
      const name = await this.getName(product);

      if (name === productName) {
        const removeFromCartButton = product.$(
          ProductsListSelectors.removeFromCartButton(
            this.changeProductNameToSelectorFormat(productName),
          ),
        );
        await removeFromCartButton.waitForDisplayed();
        await removeFromCartButton.waitForClickable();
        await removeFromCartButton.click();
        return;
      }
    }

    throw new Error(`Product "${productName}" was not found`);
  }
}

export default new ProductsListPO();
