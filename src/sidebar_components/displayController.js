import { user } from "../userModel";
import "./progressPanel_style.scss";

const displayController = (() => {
  console.log("sidebar display controller");

  const stepList = [
    { step: 1, title: "Your Info" },
    { step: 2, title: "Select Plan" },
    { step: 3, title: "Add-Ons" },
    { step: 4, title: "Summary" },
  ];

  function renderSteps() {
    stepList.forEach(appendGeneratedStep);
    highlightCurrentStep();
  }

  function appendGeneratedStep({ step, title }) {
    const circleIconWithNum = document.createElement("div");
    circleIconWithNum.classList.add("icon");
    circleIconWithNum.innerText = step;

    const subtitle = document.createElement("div");
    subtitle.classList.add("subtitle");
    subtitle.innerText = `step ${step}`;

    const stepTitle = document.createElement("div");
    stepTitle.classList.add("step-title");
    stepTitle.innerText = title;

    const stepContainer = document.createElement("div");
    stepContainer.classList.add("step-container");
    stepContainer.dataset.id = step; //assign identifier
    stepContainer.appendChild(circleIconWithNum);
    stepContainer.appendChild(subtitle);
    stepContainer.appendChild(stepTitle);

    const sideBar = document.querySelector(".side-bar");
    sideBar.appendChild(stepContainer);
  }

  function highlightCurrentStep() {
    const currentStep = user.getCurrentStep();
    const allIcons = document.querySelectorAll(".icon");
    const currentStepIcon = document.querySelector(
      `div[data-id="${currentStep}"] > .icon`
    );
    allIcons.forEach((icon) => icon.classList.remove("filled"));
    currentStepIcon.classList.add("filled");
  }

  return { renderSteps, highlightCurrentStep };
})();

export { displayController };
