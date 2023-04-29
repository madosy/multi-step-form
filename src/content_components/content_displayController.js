import { user } from "../userModel";

const displayController = (() => {
  const personalInfoPageContent = document.querySelector("div.personal-info");
  const selectPlanPageContent = document.querySelector("div.select-plan");
  const addOns = document.querySelector("div.add-ons");
  const summary = document.querySelector("div.summary");

  const contentList = document.querySelectorAll("div.content-panel > .content");
  console.log(contentList);

  function render() {
    const currentStep = user.getCurrentStep();
    contentList.forEach((page, index) => {
      page.classList.remove("active");
      if (index === currentStep - 1) page.classList.add("active");
    });
  }

  return { render };
})();

export { displayController };
