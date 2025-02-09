import { createMonthYearEl } from "./createMonthYearEl.js";
import { renderEmptyDays } from "./renderEmptyDays.js";
import { renderWeekdays } from "./renderWeekDays.js";
import { renderDaysInMonth } from "./createAndRenderDaysInMonth.js";

export function displayCalendar() {
  createMonthYearEl();
  renderWeekdays();
  renderEmptyDays();
  renderDaysInMonth();
}
