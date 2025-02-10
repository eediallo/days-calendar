import { calendarConfig } from "../calendar/calendarConfig.js";
import { commemorativeDays } from "../data/comDays.js";
import { monthNames } from "../data/data.js";
import { firstOccurrence } from "./firstOccurrence.js";
import { secondOccurrence } from "./secondOccurence.js";
import { thirdOccurrence } from "./thirdOccurrence.js";
import { lastOccurrence } from "./lastOccurrence.js";

export function getCommemorativeDay(day) {
  const year = calendarConfig.getYear(calendarConfig.currentDate);
  const month = calendarConfig.getMonth(calendarConfig.currentDate);

  const date = new Date(year, month, day);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  for (const commemorativeDayDay of commemorativeDays) {
    if (
      commemorativeDayDay.monthName === monthNames[month].name &&
      commemorativeDayDay.dayName === dayName
    ) {
      const occurence = commemorativeDayDay.occurence;
      const dayOfMonth = date.getDate();

      const result =
        firstOccurrence(occurence, dayOfMonth, commemorativeDayDay) ||
        secondOccurrence(occurence, dayOfMonth, commemorativeDayDay) ||
        thirdOccurrence(occurence, dayOfMonth, commemorativeDayDay) ||
        lastOccurrence(occurence, dayOfMonth, commemorativeDayDay, year, month);

      if (result) {
        return result;
      }
    }
  }
  return null;
}
