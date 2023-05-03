import { user } from "../userModel";
import "./content_style.scss";
import PubSub from "pubsub-js";

import { generatePersonalInfoForm } from "./content/personal-info/personalInfo";
import { generateSelectPlanPage } from "./content/select-plan/generateSelectPlanPage";

const displayController = (() => {
  function render() {
    const contentPanel = document.querySelector("div.content-panel");
    const currentStep = user.getCurrentStep();

    contentPanel.innerHTML = "";
    const personalInfo = generatePersonalInfoForm();
    const selectPlan = generateSelectPlanPage();

    if (currentStep === 1) {
      contentPanel.appendChild(selectPlan);
    }
  }

  PubSub.subscribe("planDurationChanged", render);

  return { render };
})();

export { displayController };
