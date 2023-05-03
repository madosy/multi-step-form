import { planPricingModel } from "./planPricingModel";
import arcadeIconImageFile from "./images/icon-arcade.svg";
import advancedIconImageFile from "./images/icon-advanced.svg";
import proIconImageFile from "./images/icon-pro.svg";

const generateTierOptions = () => {
  const container = document.createElement("div");
  container.classList.add("tier-container");

  const arcadeTier = tierFactory("arcade");
  const arcadeIcon = document.createElement("img");
  arcadeIcon.src = arcadeIconImageFile;
  arcadeTier.prepend(arcadeIcon);

  const advancedTier = tierFactory("advanced");
  const advancedIcon = document.createElement("img");
  advancedIcon.src = advancedIconImageFile;
  advancedTier.prepend(advancedIcon);

  const proTier = tierFactory("pro");
  const proIcon = document.createElement("img");
  proIcon.src = proIconImageFile;
  proTier.prepend(proIcon);

  container.appendChild(arcadeTier);
  container.appendChild(advancedTier);
  container.appendChild(proTier);

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
