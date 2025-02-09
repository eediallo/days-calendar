import { monthYearEl } from "../queries.js";
import { monthNames } from "../data/data.js";
import { calendarConfig } from "./calendarConfig.js";

export function createMonthYearEl() {
  monthYearEl.textContent = `${monthNames[calendarConfig.month]} ${
    calendarConfig.year
  }`;
}
