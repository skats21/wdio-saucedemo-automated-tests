const getInput = async (root, selector) => {
  const input = root.$(selector);
  if (!(await input.isExisting())) {
    throw new Error(
      `Input not found inside provided root. Selector: ${selector}`,
    );
  }
  return input;
};

const setInputValue = async (root, selector, value) => {
  const input = await getInput(root, selector);
  await input.waitForDisplayed();
  await input.setValue(value);
};

const clearInputValue = async (root, selector) => {
  const input = await getInput(root, selector);
  await input.clearValue();
};

const getInputValue = async (root, selector) => {
  const input = await getInput(root, selector);
  return await input.getValue();
};

export default {
  setInputValue,
  clearInputValue,
  getInputValue,
};
