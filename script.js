import { renderWeekdays } from "./calendar/renderWeekDays.js";
import { createAndDisplayWeekDays } from "./createAndDisplayWeekDays.js";
import { createMonthYearEl } from "./calendar/createMonthYearEl.js";
import { renderEmptyDays } from "./calendar/renderEmptyDays.js";
import { renderDaysInMonth } from "./calendar/createAndRenderDaysInMonth.js";
function main() {
  createMonthYearEl();
  renderWeekdays();
  renderEmptyDays();
  renderDaysInMonth();
}

window.onload = main;
