import { calendarConfig } from "./webCalendar/calendarConfig.js";
import { displayCalendar } from "./webCalendar/displayCalendar.js";
import { eventHandlers } from "./events/events.js";
import { renderDropDowns } from "./jump/renderDropDown.js";

function main() {
  displayCalendar(calendarConfig.currentDate);
  eventHandlers();
  renderDropDowns();
}
window.onload = main;
