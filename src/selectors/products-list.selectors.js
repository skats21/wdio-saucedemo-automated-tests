const productsListSelectors = {
  productsContainer: "[data-test='inventory-container']",
  productItem: "[data-test='inventory-item']",
  productName: "[data-test='inventory-item-name']",
  productDescription: "[data-test='inventory-item-desc']",
  productPrice: "[data-test='inventory-item-price']",
  sortDropdown: "[data-test='product-sort-container']",
  addToCartButton: (productName) => `[data-test='add-to-cart-${productName}']`,
  removeFromCartButton: (productName) => `[data-test='remove-${productName}']`,
};

export default productsListSelectors;
