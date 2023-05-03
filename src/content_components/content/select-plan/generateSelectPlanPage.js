import { generateForm } from "./generateForm";
import "./selectPlan_style.scss";

const generateSelectPlanPage = () => {
  const container = document.createElement("div");
  container.classList.add("select-plan");

  const header = document.createElement("h1");
  header.innerText = "Select your plan";
  header.classList.add("header");
  container.appendChild(header);

  const description = document.createElement("p");
  description.innerText = "You have the option of monthly or yearly billing.";
  description.classList.add("description");
  container.appendChild(description);

  const myForm = generateForm();
  container.appendChild(myForm);

  return container;
};

export { generateSelectPlanPage };
