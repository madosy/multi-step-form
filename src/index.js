import PubSub from "pubsub-js";
import "./index.scss";
import { sidebarModule } from "./sidebar_components/sidebarModule";
// import { displayController as navigationDisplayController } from "./navigation_components/displayController";
import { navigationModule } from "./navigation_components/navigationModule";

PubSub.subscribe("data_changed", () => {
  sidebarModule.update();
  navigationModule.update();
});
