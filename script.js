import { datesConfig } from "./datesConfig.js";
import { displayCalendar } from "./webCalendar/displayCalendar.js";
import { attachEventHandlers } from "./eventHandlers/attachEventHandlers.js";
import { renderDropDowns } from "./jump/renderDropDown.js";

function main() {
  displayCalendar(datesConfig.currentDate);
  renderDropDowns();
  attachEventHandlers();
}
window.onload = main;
