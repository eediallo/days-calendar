import { monthYearEl } from "../config/queries.js";
import { monthNames } from "../data.js";
import { datesConfig } from "../config/datesConfig.js";

/**
 * Creates and sets the text content of an element to display the month and year based on the provided date.
 *
 * @param {Date} date - The date object from which to extract the month and year.
 */
export function createMonthYearEl(date) {
  const month = datesConfig.getMonth(date);
  const year = datesConfig.getYear(date);
  monthYearEl.textContent = `${monthNames[month].name} ${year}`;
}
