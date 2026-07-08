const getButton = async (root, selector) => {
  const button = root.$(selector);

  if (!(await button.isExisting())) {
    throw new Error(
      `Button not found inside provided root. Selector: ${selector}`,
    );
  }
  return button;
};

const click = async (root, selector) => {
  const button = await getButton(root, selector);
  await button.waitForDisplayed();
  await button.waitForClickable();
  await button.click();
};

export default {
  click,
};
