import { createMonthYearEl } from "./createMonthYearEl.js";
import { renderEmptyDays } from "./renderEmptyDays.js";
import { renderWeekdays } from "./createAndRenderWeekDays.js";
import { renderDaysInMonth } from "./createAndRenderDaysInMonth.js";

export function displayCalendar(date) {
  createMonthYearEl(date);
  renderWeekdays();
  renderEmptyDays(date);
  renderDaysInMonth(date);
}
