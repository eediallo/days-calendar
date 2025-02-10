export function thirdOccurrence(occurence, dayOfMonth, commemorativeDayDay) {
  return occurence === "third" && dayOfMonth > 14 && dayOfMonth <= 21
    ? commemorativeDayDay
    : null;
}
