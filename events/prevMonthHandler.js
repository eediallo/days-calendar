import { calendarConfig } from "../calendar/calendarConfig.js";
import { displayCalendar } from "../calendar/displayCalendar.js";
import { calendarContainerEl } from "../queries.js";
export function prevMonthHandler() {
  calendarContainerEl.innerHTML = "";
  calendarConfig.currentDate.setMonth(
    calendarConfig.currentDate.getMonth() - 1
  );
  displayCalendar(calendarConfig.currentDate);
}
