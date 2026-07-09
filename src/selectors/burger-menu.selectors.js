const BurgerMenuSelectors = {
  openButton: "#react-burger-menu-btn",
  menu: ".bm-menu",
  menuItem: (label) =>
    `[data-test='${label.toLowerCase().replaceAll(" ", "-")}-sidebar-link']`,
};

export default BurgerMenuSelectors;
