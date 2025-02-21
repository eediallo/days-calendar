import { monthNames } from "../data.js";
import {
  isFirstOccurrence,
  isSecondOccurrence,
  isThirdOccurrence,
  isLastOccurrence,
} from "./occurrences.js";

/**
 * Get the date of a commemorative day for a given year.
 *
 * @param {number} year - The year for which to find the commemorative day.
 * @param {Object} commemorativeDay - An object representing the commemorative day.
 * @param {string} commemorativeDay.monthName - The name of the month (e.g., "January").
 * @param {string} commemorativeDay.dayName - The name of the day (e.g., "Monday").
 * @param {number} commemorativeDay.occurence - The occurrence of the day in the month (e.g., 1 for first, 2 for second, etc.).
 * @returns {Date} The date of the commemorative day.
 */
export function getCommemorativeDayDate(year, commemorativeDay) {
  const months = monthNames.map((month) => month.name);
  const month = months.indexOf(commemorativeDay.monthName);
  const targetDayName = commemorativeDay.dayName;
  const occurence = commemorativeDay.occurence;

  let date = new Date(Date.UTC(year, month, 1));

  // Find the first occurrence of the target day
  while (
    date.toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" }) !==
    targetDayName
  ) {
    date.setUTCDate(date.getUTCDate() + 1);
  }

  // Adjust for the specified occurrence
  while (
    !isFirstOccurrence(occurence, date.getUTCDate()) &&
    !isSecondOccurrence(occurence, date.getUTCDate()) &&
    !isThirdOccurrence(occurence, date.getUTCDate()) &&
    !isLastOccurrence(occurence, date.getUTCDate(), year, month)
  ) {
    date.setUTCDate(date.getUTCDate() + 7);
  }

  return date;
}
