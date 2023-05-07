import PubSub from "pubsub-js";
import "./index.scss";
import { sidebarModule } from "./sidebar_components/sidebarModule";
import { navigationModule } from "./navigation_components/navigationModule";
import { contentModule } from "./content_components/contentModule";

PubSub.subscribe("data_changed", () => {
  sidebarModule.update();
  navigationModule.update();
  contentModule.update();
});

PubSub.subscribe("form_confirmation", () => {
  navigationModule.update();
  contentModule.update();
});
