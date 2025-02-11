import { datesConfig } from "../datesConfig.js";
import { displayCalendar } from "../webCalendar/displayCalendar.js";
import { calendarContainerEl } from "../queries.js";
export function prevMonthHandler() {
  calendarContainerEl.innerHTML = "";
  datesConfig.currentDate.setMonth(datesConfig.currentDate.getMonth() - 1);
  displayCalendar(datesConfig.currentDate);
}
