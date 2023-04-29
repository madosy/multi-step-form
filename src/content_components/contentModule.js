import { displayController } from "./content_displayController";

const contentModule = (() => {
  displayController.render();
  function update() {
    displayController.render();
  }

  return { update };
})();

export { contentModule };
