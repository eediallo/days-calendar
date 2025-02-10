export function firstOccurrence(occurence, dayOfMonth, commemorativeDayDay) {
  return occurence === "first" && dayOfMonth <= 7 ? commemorativeDayDay : null;
}
