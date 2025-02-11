import { monthNames } from "../data/data.js";
import {
  isFirstOccurrence,
  isSecondOccurrence,
  isThirdOccurrence,
  isLastOccurrence,
} from "./occurrences.js";

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
