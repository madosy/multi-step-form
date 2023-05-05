import { getListOfAddons } from "./getListOfAddons";

const generateAddonsForm = () => {
  const form = document.createElement("form");
  form.classList.add("pick-addons-form");

  const options = getListOfAddons();
  options.forEach((item) => form.appendChild(item));

  return form;
};

export { generateAddonsForm };
