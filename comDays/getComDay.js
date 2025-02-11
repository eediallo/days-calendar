import { calendarConfig } from "../calendar/calendarConfig.js";
import { commemorativeDays } from "../data/comDays.js";
import { monthNames } from "../data/data.js";
import {
  firstOccurrence,
  secondOccurrence,
  thirdOccurrence,
  lastOccurrence,
} from "./occurrences.js";

export function getCommemorativeDay(day) {
  const year = calendarConfig.getYear(calendarConfig.currentDate);
  const month = calendarConfig.getMonth(calendarConfig.currentDate);

  const date = new Date(year, month, day);
  const dayName = date.toLocaleDateString("en-GB", { weekday: "long" });

  for (const commemorativeDay of commemorativeDays) {
    if (
      commemorativeDay.monthName === monthNames[month].name &&
      commemorativeDay.dayName === dayName
    ) {
      const occurence = commemorativeDay.occurence;
      const dayOfMonth = date.getDate();

      if (
        firstOccurrence(occurence, dayOfMonth) ||
        secondOccurrence(occurence, dayOfMonth) ||
        thirdOccurrence(occurence, dayOfMonth) ||
        lastOccurrence(occurence, dayOfMonth, year, month)
      ) {
        return commemorativeDay;
      }
    }
  }
  return null;
}
