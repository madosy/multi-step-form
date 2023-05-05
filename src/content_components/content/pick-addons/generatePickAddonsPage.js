import "./pickAddons_style.scss";
import { generateForm } from "./generateForm";

const generatePickAddonsPage = () => {
  const container = document.createElement("div");
  container.classList.add("pick-addons");

  const header = document.createElement("h1");
  header.innerText = "Pick add-ons";
  header.classList.add("header");
  container.appendChild(header);

  const description = document.createElement("p");
  description.innerText = "Add-ons help enhance your gaming experience.";
  description.classList.add("description");
  container.appendChild(description);

  const myForm = generateForm();
  container.appendChild(myForm);

  return container;
};

export { generatePickAddonsPage };
