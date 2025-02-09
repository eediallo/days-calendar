import { calendarConfig } from "./calendar/calendarConfig.js";
import { displayCalendar } from "./calendar/displayCalendar.js";
import { eventHandlers } from "./events/events.js";
import { renderMonthList } from "./jump/renderMonthList.js";

function main() {
  displayCalendar(calendarConfig.currentDate);
  eventHandlers();
  renderMonthList();
}
window.onload = main;
