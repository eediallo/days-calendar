import { monthYearEl } from "../config/queries.js";
import { monthNames } from "../data/data.js";
import { datesConfig } from "../config/datesConfig.js";

export function createMonthYearEl(date) {
  const month = datesConfig.getMonth(date);
  const year = datesConfig.getYear(date);
  monthYearEl.textContent = `${monthNames[month].name} ${year}`;
}
