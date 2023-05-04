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
  sessionStorage.setItem("plan-select.duration", "yearly");
  sessionStorage.setItem("plan-select.tier", "arcade");
}

// const generateSelect = (() => {
//   sessionStorage.setItem("plan-select.duration", "yearly");
//   sessionStorage.setItem("plan-select.tier", "pro");

//   const planDuration = sessionStorage.getItem("plan-select.duration");
//   const planTier = sessionStorage.getItem("plan-select.tier");

//   const selectedPricing = planPricingList.find(
//     (plan) => plan.type === planDuration
//   );

//   const arcadeTier = generateTier({
//     name: "arcade",
//     price: planPricingModel.getPlanPrice,
//     checked: planTier == "arcade",
//   });

//   const advancedTier = generateTier({
//     name: "advanced",
//     price: selectedPricing.advanced,
//     checked: planTier == "advanced",
//   });

//   const proTier = generateTier({
//     name: "pro",
//     price: selectedPricing.pro,
//     checked: planTier == "pro",
//   });

//   const container = document.createElement("div");
//   container.appendChild(arcadeTier);
//   container.appendChild(advancedTier);
//   container.appendChild(proTier);

//   const returnAllGeneratedTiers = () => container;

//   return { returnAllGeneratedTiers };
// })();

export { generateForm };
