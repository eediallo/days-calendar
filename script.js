import { datesConfig } from "./datesConfig.js";
import { displayCalendar } from "./webCalendar/displayCalendar.js";
import { eventHandlers } from "./events/events.js";
import { renderDropDowns } from "./jump/renderDropDown.js";

function main() {
  displayCalendar(datesConfig.currentDate);
  eventHandlers();
  renderDropDowns();
}
window.onload = main;
