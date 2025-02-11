import { calendarContainerEl, monthSelect, yearSelect } from "../queries.js";
import { displayCalendar } from "../webCalendar/displayCalendar.js";
import { calendarConfig } from "../webCalendar/calendarConfig.js";

export function jumpHandler() {
  calendarContainerEl.innerHTML = "";
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  calendarConfig.currentDate = new Date(selectedYear, selectedMonth, 1); // Update the current date
  displayCalendar(calendarConfig.currentDate);
}
