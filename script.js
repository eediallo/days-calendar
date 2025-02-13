import { datesConfig } from "./config/datesConfig.js";
import { createAndDisplayCalendar } from "./webCalendar/createAnddisplayCalendar.js";
import { attachEventHandlers } from "./eventHandlers/attachEventHandlers.js";
import { renderDropDowns } from "./jump/renderDropDown.js";

function main() {
  createAndDisplayCalendar(datesConfig.currentDate);
  renderDropDowns();
  attachEventHandlers();
}
window.onload = main;
