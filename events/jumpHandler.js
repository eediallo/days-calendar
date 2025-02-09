import { calendarContainerEl, monthSelect, yearSelect } from "../queries.js";
import { displayCalendar } from "../calendar/displayCalendar.js";
import { calendarConfig } from "../calendar/calendarConfig.js";

export function jumbHandler() {
  calendarContainerEl.innerHTML = "";
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  calendarConfig.currentDate = new Date(selectedYear, selectedMonth, 1); // Update the current date
  displayCalendar(calendarConfig.currentDate);
}
