import { calendarConfig } from "./calendar/calendarConfig.js";
import { displayCalendar } from "./calendar/displayCalendar.js";
import { eventHandlers } from "./events/events.js";
import { renderDropDowns } from "./jump/renderDropDown.js";
import {loadCommemorativeDays} from "./CommemorativeDays/loadCommemorativeDays.js";

function main() {
  displayCalendar(calendarConfig.currentDate);
  eventHandlers();
  renderDropDowns();
  loadCommemorativeDays();
}
window.onload = main;


