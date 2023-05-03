const planPricingModel = (() => {
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

  function getPlanPrice(planType, planName) {
    const userSelectedSet = planPricingList.find(
      (plan) => plan.type === planType
    );
    const userSelectedPlanPrice = userSelectedSet[planName];
    return userSelectedPlanPrice;
  }

  return { getPlanPrice };
})();

export { planPricingModel };
