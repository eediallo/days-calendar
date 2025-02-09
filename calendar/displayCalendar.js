import { createMonthYearEl } from "./createMonthYearEl.js";
import { renderEmptyDays } from "./renderEmptyDays.js";
import { renderWeekdays } from "./renderWeekDays.js";
import { renderDaysInMonth } from "./createAndRenderDaysInMonth.js";

export function displayCalendar(date) {
  createMonthYearEl(date);
  renderWeekdays();
  renderEmptyDays(date);
  renderDaysInMonth(date);
}
