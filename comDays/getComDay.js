import { datesConfig } from "../config/datesConfig.js";
import { commemorativeDays, monthNames } from "../data.js";
import { getCommemorativeDayDate } from "./getComDate.js";

/**
 * Retrieves the commemorative day for a given day of the month.
 *
 * @param {number} day - The day of the month to check for a commemorative day.
 * @returns {Object|null} The commemorative day object if found, otherwise null.
 */
export function getCommemorativeDay(day) {
  const year = datesConfig.getYear(datesConfig.currentDate);
  const month = datesConfig.getMonth(datesConfig.currentDate);

  const date = new Date(year, month, day);
  const dayName = date.toLocaleDateString("en-GB", { weekday: "long" });

  for (const commemorativeDay of commemorativeDays) {
    if (
      commemorativeDay.monthName === monthNames[month].name &&
      commemorativeDay.dayName === dayName
    ) {
      const calculatedDate = getCommemorativeDayDate(year, commemorativeDay);
      if (calculatedDate.getUTCDate() === day) {
        return commemorativeDay;
      }
    }
  }
  return null;
}
