import { user } from "../userModel";
import PubSub from "pubsub-js";

import { generatePersonalInfoForm } from "./content/personal-info/personalInfo";
import { generateSelectPlanPage } from "./content/select-plan/generateSelectPlanPage";
import { generatePickAddonsPage } from "./content/pick-addons/generatePickAddonsPage";
import { generateSummaryPage } from "./content/summary/generateSummaryPage";

const displayController = (() => {
  function render() {
    const contentPanel = document.querySelector("div.content-panel");
    const currentStep = user.getCurrentStep();

    contentPanel.innerHTML = "";

    if (currentStep === 1) {
      const personalInfo = generatePersonalInfoForm();
      contentPanel.appendChild(personalInfo);
    } else if (currentStep === 2) {
      const selectPlan = generateSelectPlanPage();
      contentPanel.appendChild(selectPlan);
    } else if (currentStep === 3) {
      const pickAddons = generatePickAddonsPage();
      contentPanel.appendChild(pickAddons);
    } else if (currentStep === 4) {
      const summary = generateSummaryPage();
      contentPanel.appendChild(summary);
    } else if (currentStep === 5) {
      contentPanel.innerHTML = "Thanks for submitting!";
    }
  }

  PubSub.subscribe("planDurationChanged", render);

  return { render };
})();

export { displayController };
