import "./progressPanel_style.scss";

const stepPanelDisplayController = (() => {
  const stepList = [
    { step: 1, title: "Your Info" },
    { step: 2, title: "Select Plan" },
    { step: 3, title: "Add-Ons" },
    { step: 4, title: "Summary" },
  ];
  stepList.forEach(renderStep);
  document.querySelector('div[data-id="3"] > .icon').classList.add("filled"); //delete me later

  function renderStep({ step, title }) {
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
})();

export default { stepPanelDisplayController };
