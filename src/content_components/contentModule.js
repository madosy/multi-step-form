import { displayController } from "./content_displayController";
import { clickHandler } from "./content_clickHandler";

const contentModule = (() => {
  sessionStorage.clear();
  displayController.render();
  clickHandler.addFunctionalityToDom();

  function update() {
    displayController.render();
  }

  function isValid() {
    const validationResult = clickHandler.validateForm();
    return validationResult;
  }

  return { update, isValid };
})();

export { contentModule };
