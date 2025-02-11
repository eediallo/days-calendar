export function firstOccurrence(occurence, dayOfMonth, commemorativeDayDay) {
  return occurence === "first" && dayOfMonth <= 7 ? commemorativeDayDay : null;
}

export function secondOccurrence(occurence, dayOfMonth, commemorativeDayDay) {
  return occurence === "second" && dayOfMonth > 7 && dayOfMonth <= 14
    ? commemorativeDayDay
    : null;
}

export function thirdOccurrence(occurence, dayOfMonth, commemorativeDayDay) {
  return occurence === "third" && dayOfMonth > 14 && dayOfMonth <= 21
    ? commemorativeDayDay
    : null;
}

export function lastOccurrence(
  occurence,
  dayOfMonth,
  commemorativeDayDay,
  year,
  month
) {
  if (occurence === "last") {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    if (dayOfMonth > lastDayOfMonth - 7) {
      return commemorativeDayDay;
    }
  }
  return null;
}
