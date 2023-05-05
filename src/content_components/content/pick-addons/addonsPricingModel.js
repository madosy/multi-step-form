const addonsPricingModel = (() => {
  const addonsPricingList = [
    {
      name: "online service",
      description: "Access to multiplayer games",
      monthly: 1,
      yearly: 10,
    },
    {
      name: "larger storage",
      description: "Extra 1TB of cloud save",
      monthly: 2,
      yearly: 20,
    },
    {
      name: "customizable profile",
      description: "Custome theme on your profile",
      monthly: 2,
      yearly: 20,
    },
  ];

  function getAddonsList() {
    return [...addonsPricingList];
  }

  function getCost(addonName, planDuration) {
    const myAddon = addonsPricingList.find((addon) => addon.name == addonName);
    const addonsCost = myAddon[planDuration];
    return addonsCost;
  }

  function getDescription(addonName) {
    const myAddon = addonsPricingList.find((addon) => addon.name == addonName);
    return myAddon.description;
  }

  return { getAddonsList, getCost, getDescription };
})();

export { addonsPricingModel };
