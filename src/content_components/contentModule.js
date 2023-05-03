import { displayController } from "./content_displayController";
import { validationHandler } from "./content_validationHandler";

const contentModule = (() => {
  sessionStorage.clear();
  displayController.render();

  function update() {
    displayController.render();
  }

  function isValid() {
    const validationResult = validationHandler.validateForm();
    return validationResult;
  }

  return { update, isValid };
})();

export { contentModule };
