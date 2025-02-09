import { createAndDisplayDays } from "./createAndDisplayDays.js";
import { createAndDisplayWeekDays } from "./createAndDisplayWeekDays.js";
import { createMonthYearEl } from "./createMonthYearEl.js";
function main() {
  createMonthYearEl(new Date());
  createAndDisplayDays();
  createAndDisplayWeekDays();
}

window.onload = main;
