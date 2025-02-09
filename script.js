import { renderWeekdays } from "./calendar/renderWeekDays.js";
import { createAndDisplayWeekDays } from "./createAndDisplayWeekDays.js";
import { createMonthYearEl } from "./calendar/createMonthYearEl.js";
function main() {
  createMonthYearEl();
  renderWeekdays();
  createAndDisplayWeekDays();
}

window.onload = main;
