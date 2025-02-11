import { calendarConfig } from "../webCalendar/calendarConfig.js";
import { calendarContainerEl } from "../queries.js";
import { displayCalendar } from "../webCalendar/displayCalendar.js";

export function nextMonthHandler() {
  calendarContainerEl.innerHTML = "";
  calendarConfig.currentDate.setMonth(
    calendarConfig.currentDate.getMonth() + 1
  );
  displayCalendar(calendarConfig.currentDate);
}
