import { planPricingModel } from "../select-plan/planPricingModel";
import { addonsPricingModel } from "../pick-addons/addonsPricingModel";

const generateSummaryTable = () => {
  const summaryTable = document.createElement("div");
  summaryTable.classList.add("summary-table");

  let totalPrice = 0;

  const planSummary = document.createElement("div");
  planSummary.classList.add("plan");
  const planTier = sessionStorage.getItem("plan-select.tier");
  const planDuration = sessionStorage.getItem("plan-select.duration");
  const perText = () => (planDuration === "monthly" ? "mo" : "yr");
  const planCost = planPricingModel.getPlanPrice(planDuration, planTier);
  totalPrice += planCost;
  planSummary.innerHTML = `
  <div class="plan-name">${planTier}</div>
  <div class="plan-price">$${planCost}/${perText()}</div>`;
  summaryTable.appendChild(planSummary);

  const allAvailableAddons = addonsPricingModel
    .getAddonsList()
    .map((addon) => addon.name);
  allAvailableAddons.forEach((addon) => {
    const isAddonSelected = sessionStorage.getItem(`pick-addons.${addon}`);

    if (isAddonSelected === "true") {
      const name = addon;
      const price = addonsPricingModel.getCost(addon, planDuration);
      totalPrice += price;

      const addonContainer = document.createElement("div");
      addonContainer.classList.add("addon");
      addonContainer.innerHTML = `
        <div class="name">${name}</div>
        <div class="price">+$${price}/${perText()}`;
      summaryTable.appendChild(addonContainer);
    }
  });

  const totalPriceContainer = document.createElement("div");
  totalPriceContainer.classList.add("total");
  const totalPerText = () => (planDuration === "monthly" ? "month" : "year");
  totalPriceContainer.innerHTML = `
    <div class="total-text">Total (per ${totalPerText()})
    <div class="total-price">+${totalPrice}/${perText()}`;
  summaryTable.appendChild(totalPriceContainer);

  return summaryTable;
};
export { generateSummaryTable };
