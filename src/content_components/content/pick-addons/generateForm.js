import { generateOption } from "./generateAddons";

const generateForm = () => {
  const form = document.createElement("form");
  form.classList.add("pick-addons-form");

  //append all my options
  //need addons pricing model (similar to plan pricing)
  //they are just checkboxes with styling.

  const options = generateOption();
  options.forEach((item) => form.appendChild(item));

  return form;
};

export { generateForm };
