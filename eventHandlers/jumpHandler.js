import { calendarContainerEl, monthSelect, yearSelect } from "../queries.js";
import { displayCalendar } from "../webCalendar/displayCalendar.js";
import { datesConfig } from "../datesConfig.js";

export function jumpHandler() {
  calendarContainerEl.innerHTML = "";
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  datesConfig.currentDate = new Date(selectedYear, selectedMonth, 1); // Update the current date
  displayCalendar(datesConfig.currentDate);
}
