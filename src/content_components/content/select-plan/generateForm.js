import { planPricingModel } from "./planPricingModel";
import { generateTierOptions } from "./generateTierOptions";
import { generatePlanDurationToggle } from "./generatePlanDurationToggle";

const generateForm = () => {
  const form = document.createElement("form");
  form.classList.add("select-plan-form");

  if (!isPlanSelected()) initializePlan();

  const tierOptions = generateTierOptions();
  form.appendChild(tierOptions);

  const planDurationToggle = generatePlanDurationToggle();
  form.appendChild(planDurationToggle);

  return form;
};

function isPlanSelected() {
  const planDuration = sessionStorage.getItem("plan-select.duration");
  return planDuration != null;
}

function initializePlan() {
  sessionStorage.setItem("plan-select.duration", "monthly");
  sessionStorage.setItem("plan-select.tier", "arcade");
}

export { generateForm };
