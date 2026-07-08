import ProductsListPO from "../pages/products-list.po.js";
import { When, Then } from "@wdio/cucumber-framework";

Then("the user should see {int} products", async (expectedCount) => {
  const products = await ProductsListPO.getProducts();
  expect(products.length).toBe(expectedCount);
});

Then("each product should have a name, description, and price", async () => {
  const products = await ProductsListPO.getProducts();
  for (const product of products) {
    const name = await ProductsListPO.getName(product);
    const description = await ProductsListPO.getDescription(product);
    const price = await ProductsListPO.getPrice(product);
    expect(name).toBeTruthy();
    expect(description).toBeTruthy();
    expect(price).toBeTruthy();
  }
});

When("the user sorts products by {string}", async (option) => {
  await ProductsListPO.sortProductsBy(option);
});

Then("the products should be sorted by price in ascending order", async () => {
  const products = await ProductsListPO.getProducts();
  const prices = [];
  for (const product of products) {
    const priceText = await ProductsListPO.getPrice(product);
    const price = parseFloat(priceText.replace("$", ""));
    prices.push(price);
  }
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});

Then("the products should be sorted by price in descending order", async () => {
  const products = await ProductsListPO.getProducts();
  const prices = [];
  for (const product of products) {
    const priceText = await ProductsListPO.getPrice(product);
    const price = parseFloat(priceText.replace("$", ""));
    prices.push(price);
  }
  const sortedPrices = [...prices].sort((a, b) => b - a);
  expect(prices).toEqual(sortedPrices);
});

When("the user adds {string} to the cart", async (productName) => {
  await ProductsListPO.clickAddToCartButton(productName);
});

When("the user removes {string} from the cart", async (productName) => {
  await ProductsListPO.clickRemoveFromCartButton(productName);
});
