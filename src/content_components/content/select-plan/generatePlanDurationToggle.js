import PubSub from "pubsub-js";

const generatePlanDurationToggle = () => {
  const toggle = document.createElement("input");
  toggle.classList.add("plan-duration-toggle");
  toggle.setAttribute("type", "checkbox");

  const storedPlanDuration = sessionStorage.getItem("plan-select.duration");
  if (storedPlanDuration === "yearly") toggle.checked = true;

  const getSelectedPlanDuration = () => (toggle.checked ? "yearly" : "monthly");

  toggle.addEventListener("change", () => {
    sessionStorage.setItem("plan-select.duration", getSelectedPlanDuration());
    PubSub.publish("planDurationChanged");
  });

  return toggle;
};

export { generatePlanDurationToggle };
