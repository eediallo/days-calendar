import { calendarConfig } from "../calendar/calendarConfig.js";
import { displayCalendar } from "../calendar/displayCalendar.js";
import { calendarContainerEl } from "../queries.js";
export function handlePrevMonth() {
  calendarContainerEl.innerHTML = "";
  calendarConfig.currentDate.setMonth(
    calendarConfig.currentDate.getMonth() - 1
  );
  displayCalendar(calendarConfig.currentDate);
}
