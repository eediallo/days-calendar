export function firstOccurrence(occurence, dayOfMonth) {
  return occurence === "first" && dayOfMonth <= 7;
}

export function secondOccurrence(occurence, dayOfMonth) {
  return occurence === "second" && dayOfMonth > 7 && dayOfMonth <= 14;
}

export function thirdOccurrence(occurence, dayOfMonth) {
  return occurence === "third" && dayOfMonth > 14 && dayOfMonth <= 21;
}

export function lastOccurrence(occurence, dayOfMonth, year, month) {
  if (occurence === "last") {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    return dayOfMonth > lastDayOfMonth - 7;
  }
  return false;
}
