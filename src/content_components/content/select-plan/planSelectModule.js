const planSelectModule = (() => {
  const planPricingList = [
    {
      type: "monthly",
      arcade: 9,
      advanced: 12,
      pro: 15,
    },
    {
      type: "yearly",
      arcade: 90,
      advanced: 120,
      pro: 150,
    },
  ];

  sessionStorage.setItem("plan-select.duration", "yearly");
  sessionStorage.setItem("plan-select.tier", "arcade");

  const planDuration = sessionStorage.getItem("plan-select.duration");
  const planTier = sessionStorage.getItem("plan-select.tier");

  console.log({ planDuration, planTier });

  const selectedPricing = planPricingList.find(
    (plan) => plan.type === planDuration
  );

  const arcadePrice = selectedPricing.arcade;
  const advancedPrice = selectedPricing.advanced;
  const proPrice = selectedPricing.pro;

  console.log({ arcadePrice, advancedPrice, proPrice });
})();
