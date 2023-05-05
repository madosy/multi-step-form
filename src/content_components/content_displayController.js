import { user } from "../userModel";
import "./content_style.scss";
import PubSub from "pubsub-js";

import { generatePersonalInfoForm } from "./content/personal-info/personalInfo";
import { generateSelectPlanPage } from "./content/select-plan/generateSelectPlanPage";
import { generatePickAddonsPage } from "./content/pick-addons/generatePickAddonsPage";

const displayController = (() => {
  function render() {
    const contentPanel = document.querySelector("div.content-panel");
    const currentStep = user.getCurrentStep();

    contentPanel.innerHTML = "";
    const personalInfo = generatePersonalInfoForm();
    const selectPlan = generateSelectPlanPage();
    const pickAddons = generatePickAddonsPage();

    if (currentStep === 1) {
      contentPanel.appendChild(pickAddons);
      // contentPanel.appendChild(personalInfo);
    } else if (currentStep === 2) {
      contentPanel.appendChild(selectPlan);
    } else if (currentStep === 3) {
      contentPanel.innerHTML = "3";
    }
  }

  PubSub.subscribe("planDurationChanged", render);

  return { render };
})();

export { displayController };
