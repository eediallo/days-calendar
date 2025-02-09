import { monthYearEl } from "../queries.js";
import { monthNames } from "../data/data.js";
import { calendarConfig } from "./calendarConfig.js";

export function createMonthYearEl(date) {
  const month = calendarConfig.getMonth(date);
  const year = calendarConfig.getYear(date);
  monthYearEl.textContent = `${monthNames[month].name} ${year}`;
}
