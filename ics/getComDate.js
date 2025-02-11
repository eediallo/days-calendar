import { monthNames, weekdays } from "../data/data.js";
import {
  firstOccurrence,
  secondOccurrence,
  thirdOccurrence,
  lastOccurrence,
} from "../comDays/occurrences.js";

export function getCommemorativeDayDate(year, commemorativeDay) {
  const months = monthNames.map((month) => month.name);
  const month = months.indexOf(commemorativeDay.monthName);
  const targetDayName = commemorativeDay.dayName;
  const occurence = commemorativeDay.occurence;

  // Get the first day of the month
  let date = new Date(year, month, 1);

  // Find the first occurrence of the target day
  while (
    date.toLocaleDateString("en-GB", { weekday: "long" }) !== targetDayName
  ) {
    date.setDate(date.getDate() + 1);
  }

  // Adjust for the specified occurrence
  while (
    !firstOccurrence(occurence, date.getDate()) &&
    !secondOccurrence(occurence, date.getDate()) &&
    !thirdOccurrence(occurence, date.getDate()) &&
    !lastOccurrence(occurence, date.getDate(), year, month)
  ) {
    date.setDate(date.getDate() + 7);
  }

  return date;
}
