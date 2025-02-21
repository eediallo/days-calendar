import {
  calendarContainerEl,
  monthSelect,
  yearSelect,
} from "../config/queries.js";
import { createAndDisplayCalendar } from "../webCalendar/createAnddisplayCalendar.js";
import { datesConfig } from "../config/datesConfig.js";

/**
 * Handles the event to jump to the next month and year in the calendar.
 * Clears the current calendar display, updates the current date to the selected month and year,
 * and creates and displays the new calendar for the updated date.
 */
export function jumpToNextMonthAndYearHandler() {
  calendarContainerEl.innerHTML = "";
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  datesConfig.currentDate = new Date(selectedYear, selectedMonth, 1); // Update the current date
  createAndDisplayCalendar(datesConfig.currentDate);
}

/**
 * Handles the event to navigate to the next month in the calendar.
 * Clears the current calendar display, updates the current date to the next month,
 * and creates and displays the updated calendar.
 */
export function nextMonthHandler() {
  calendarContainerEl.innerHTML = "";
  datesConfig.currentDate.setMonth(datesConfig.currentDate.getMonth() + 1);
  createAndDisplayCalendar(datesConfig.currentDate);
}

/**
 * Handles the event to navigate to the previous month in the calendar.
 * Clears the current calendar display, updates the current date to the previous month,
 * and then creates and displays the updated calendar.
 */
export function prevMonthHandler() {
  calendarContainerEl.innerHTML = "";
  datesConfig.currentDate.setMonth(datesConfig.currentDate.getMonth() - 1);
  createAndDisplayCalendar(datesConfig.currentDate);
}
