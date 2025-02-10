export function secondOccurrence(occurence, dayOfMonth, commemorativeDayDay) {
  return occurence === "second" && dayOfMonth > 7 && dayOfMonth <= 14
    ? commemorativeDayDay
    : null;
}
