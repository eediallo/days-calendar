import { calendarConfig } from "./calendar/calendarConfig.js";
import { displayCalendar } from "./calendar/displayCalendar.js";
import { eventHandlers } from "./events/events.js";

function main() {
  displayCalendar(calendarConfig.currentDate);
  eventHandlers();
}
window.onload = main;
