import PubSub from "pubsub-js";

const generatePlanDurationToggle = () => {
  const label = document.createElement("label");
  label.classList.add("switch");

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.id = "toggle";

  const slider = document.createElement("span");
  slider.classList.add("slider");

  label.appendChild(checkbox);
  label.appendChild(slider);

  const storedPlanDuration = sessionStorage.getItem("plan-select.duration");
  if (storedPlanDuration === "yearly") checkbox.checked = true;

  const getSelectedPlanDuration = () =>
    checkbox.checked ? "yearly" : "monthly";

  const container = document.createElement("div");
  container.classList.add("toggle-container");
  const monthlyText = document.createTextNode("Monthly");
  const yearlyText = document.createTextNode("Yearly");

  checkbox.addEventListener("change", () => {
    sessionStorage.setItem("plan-select.duration", getSelectedPlanDuration());
    PubSub.publish("planDurationChanged");
  });

  container.appendChild(monthlyText);
  container.appendChild(label);
  container.appendChild(yearlyText);

  return container;
};

export { generatePlanDurationToggle };
