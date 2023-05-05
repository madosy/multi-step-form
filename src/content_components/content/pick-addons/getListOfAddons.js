import { addonsPricingModel } from "./addonsPricingModel";
import { convertAddonToHTML } from "./convertAddonToHTML";

function getListOfAddons() {
  const planDuration = sessionStorage.getItem("plan-select.duration");
  const addonsList = addonsPricingModel.getAddonsList();
  const arrayOfAddons = [];

  addonsList.forEach((addon) => {
    const convertedAddon = convertAddonToHTML(addon);
    arrayOfAddons.push(convertedAddon);
  });

  return arrayOfAddons;
}

export { getListOfAddons };
