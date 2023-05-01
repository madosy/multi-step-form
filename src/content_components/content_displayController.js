import { user } from "../userModel";
import "./content_style.scss";

import { generatePersonalInfoForm } from "./content/personalInfo";

const displayController = (() => {
  function render() {
    const contentPanel = document.querySelector("div.content-panel");
    const currentStep = user.getCurrentStep();
    // const contentList = document.querySelectorAll(
    //   "div.content-panel > .content"
    // );
    // contentList.forEach((page, index) => {
    //   page.classList.remove("active");
    //   if (index === currentStep - 1) page.classList.add("active");
    // });

    contentPanel.innerHTML = "";
    const personalInfo = generatePersonalInfoForm();

    if (currentStep === 1) {
      contentPanel.appendChild(personalInfo);
    }
  }

  return { render };
})();

export { displayController };
