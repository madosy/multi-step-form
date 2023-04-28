import PubSub from "pubsub-js";
import { displayController } from "./displayController";

const sidebarModule = (() => {
  displayController.renderSteps();
  displayController.highlightCurrentStep();

  function update() {
    displayController.highlightCurrentStep();
  }

  return { update };
})();

export { sidebarModule };
