import { user } from "../userModel";
import "./content_style.scss";

const displayController = (() => {
  function render() {
    const currentStep = user.getCurrentStep();
    const contentList = document.querySelectorAll(
      "div.content-panel > .content"
    );
    contentList.forEach((page, index) => {
      page.classList.remove("active");
      if (index === currentStep - 1) page.classList.add("active");
    });
  }

  return { render };
})();

export { displayController };
