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

  PubSub.subscribe("confirm_button", () => {
    user.updateStep(user.getLastStep());
    PubSub.publish("form_confirmation");
  });

  PubSub.subscribe("change_step", (msg, { newStep }) => {
    user.updateStep(newStep);
    PubSub.publish("data_changed");
  });

  PubSub.subscribe("jump_to_step_2", () => {
    const newStep = 2;
    PubSub.publish("change_step", { newStep });
  });
})();
