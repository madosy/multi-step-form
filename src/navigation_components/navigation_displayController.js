import PubSub from "pubsub-js";
import { user } from "../userModel";

const displayController = (() => {
  console.log("navi display controller");

  const backButton = document.createElement("button");
  backButton.classList.add("back");
  backButton.textContent = "Go Back";
  backButton.addEventListener("click", () => PubSub.publish("back_button"));

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next Step";
  nextButton.classList.add("next");
  nextButton.addEventListener("click", () => PubSub.publish("next_button"));

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.classList.add("confirm");
  confirmButton.addEventListener("click", () =>
    PubSub.publish("confirm_button")
  );

  function render() {
    const currentStep = user.getCurrentStep();
    const lastStep = user.getLastStep();

    const navigationPanel = document.body.querySelector(".navigation-panel");
    navigationPanel.innerHTML = "";
    navigationPanel.appendChild(backButton);
    navigationPanel.appendChild(nextButton);

    if (currentStep === 1) {
      navigationPanel.querySelector("button.back").remove();
    } else if (currentStep === lastStep) {
      navigationPanel.querySelector("button.next").replaceWith(confirmButton);
    }
  }
  render();

  return { render };
})();

export { displayController };
