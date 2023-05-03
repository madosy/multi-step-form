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

  function getMonthlyPrice(planName) {
    return getPlanPrice("monthly", planName);
  }

  function getYearlyPrice(planName) {
    return getPlanPrice("yearly", planName);
  }

  return { getPlanPrice, getMonthlyPrice, getYearlyPrice };
})();

export { planPricingModel };
