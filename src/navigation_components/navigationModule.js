import { clickHandler } from "./navigation_clickHandler";
import { displayController } from "./navigation_displayController";
import { user } from "../userModel";
import PubSub from "pubsub-js";

const navigationModule = (() => {
  function update() {
    displayController.render();
  }
  return { update };
})();

export { navigationModule };
