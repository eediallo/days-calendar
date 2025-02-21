export function isFirstOccurrence(occurence, dayOfMonth) {
  return occurence === "first" && dayOfMonth <= 7;
}

export function isSecondOccurrence(occurence, dayOfMonth) {
  return occurence === "second" && dayOfMonth > 7 && dayOfMonth <= 14;
}

export function isThirdOccurrence(occurence, dayOfMonth) {
  return occurence === "third" && dayOfMonth > 14 && dayOfMonth <= 21;
}

/**
 * Checks if the given occurrence is the last occurrence of the specified day in the month.
 *
 * @param {string} occurence - The occurrence type, expected to be "last".
 * @param {number} dayOfMonth - The day of the month to check.
 * @param {number} year - The year of the date.
 * @param {number} month - The month of the date (0-based, where 0 is January and 11 is December).
 * @returns {boolean} - Returns true if the dayOfMonth is within the last 7 days of the month, otherwise false.
 */
export function isLastOccurrence(occurence, dayOfMonth, year, month) {
  if (occurence === "last") {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    return dayOfMonth > lastDayOfMonth - 7;
  }
  return false;
}
