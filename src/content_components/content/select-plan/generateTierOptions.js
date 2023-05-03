import { planPricingModel } from "./planPricingModel";

const generateTierOptions = () => {
  const container = document.createElement("div");
  container.classList.add("tier-container");

  const arcadeTier = tierFactory("arcade");
  const advancedTier = tierFactory("advanced");
  const proTier = tierFactory("pro");

  container
    .appendChild(arcadeTier)
    .appendChild(advancedTier)
    .appendChild(proTier);

  return container;
};

const tierFactory = (planName) => {
  const storedPlanDuration = sessionStorage.getItem("plan-select.duration");
  const storedPlanTier = sessionStorage.getItem("plan-select.tier");
  const price = planPricingModel.getPlanPrice(storedPlanDuration, planName);

  const label = document.createElement("label");
  label.setAttribute("for", planName);
  label.innerHTML = `
  <input name="plan" type="radio" id="${planName}">
  <span>${planName}</span>
  <span class="pricing ${storedPlanDuration}">$${price}/</span>`;

  const isPlanSelected = () => storedPlanTier === planName;

  const radioButton = label.querySelector("input");
  radioButton.checked = isPlanSelected();
  radioButton.addEventListener("change", () => {
    sessionStorage.setItem("plan-select.tier", planName);
  });

  return label;
};

export { generateTierOptions };
