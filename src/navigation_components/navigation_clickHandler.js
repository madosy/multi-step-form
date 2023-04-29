import PubSub from "pubsub-js";
import { user } from "../userModel";
import { contentModule } from "../content_components/contentModule";

const clickHandler = (() => {
  PubSub.subscribe("back_button", () => {
    const currentStep = user.getCurrentStep();
    const newStep = currentStep - 1;
    PubSub.publish("change_step", { newStep });
  });

  PubSub.subscribe("next_button", () => {
    if (!contentModule.isValid()) return;
    const currentStep = user.getCurrentStep();
    const newStep = currentStep + 1;
    PubSub.publish("change_step", { newStep });
  });

  PubSub.subscribe("change_step", (msg, { newStep }) => {
    console.log(`step passed to click handler: ${newStep}`);
    user.updateStep(newStep);
    PubSub.publish("data_changed");
  });
})();
