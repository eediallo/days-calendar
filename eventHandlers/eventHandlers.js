import {
  calendarContainerEl,
  monthSelect,
  yearSelect,
} from "../config/queries.js";
import { displayCalendar } from "../webCalendar/displayCalendar.js";
import { datesConfig } from "../config/datesConfig.js";

export function jumpToNextMonthAndYearHandler() {
  calendarContainerEl.innerHTML = "";
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  datesConfig.currentDate = new Date(selectedYear, selectedMonth, 1); // Update the current date
  displayCalendar(datesConfig.currentDate);
}

export function nextMonthHandler() {
  calendarContainerEl.innerHTML = "";
  datesConfig.currentDate.setMonth(datesConfig.currentDate.getMonth() + 1);
  displayCalendar(datesConfig.currentDate);
}

export function prevMonthHandler() {
  calendarContainerEl.innerHTML = "";
  datesConfig.currentDate.setMonth(datesConfig.currentDate.getMonth() - 1);
  displayCalendar(datesConfig.currentDate);
}
