import { datesConfig } from "../datesConfig.js";
import { calendarContainerEl } from "../queries.js";
import { displayCalendar } from "../webCalendar/displayCalendar.js";

export function nextMonthHandler() {
  calendarContainerEl.innerHTML = "";
  datesConfig.currentDate.setMonth(datesConfig.currentDate.getMonth() + 1);
  displayCalendar(datesConfig.currentDate);
}
