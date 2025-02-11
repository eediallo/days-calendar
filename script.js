import { datesConfig } from "./datesConfig.js";
import { displayCalendar } from "./webCalendar/displayCalendar.js";
import { attachEventHandlers } from "./eventHandlers/events.js";
import { renderDropDowns } from "./jump/renderDropDown.js";

function main() {
  displayCalendar(datesConfig.currentDate);
  attachEventHandlers();
  renderDropDowns();
}
window.onload = main;
