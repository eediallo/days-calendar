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
