export function getDayOfWeekIndex(dayName) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek.indexOf(dayName);
}

export function getFirstDayOfMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, 1);  
}

export function calculateOccurrenceDate(month, year, dayName, occurrence) {
  const firstDay = getFirstDayOfMonth(new Date(year, month));
  const firstDayOfWeek = firstDay.getDay();  

  const targetDayIndex = getDayOfWeekIndex(dayName);  
  let offset = targetDayIndex - firstDayOfWeek;
  if (offset < 0) offset += 7;  

  let dateOfOccurrence = new Date(year, month, 1 + offset); 

  if (occurrence === 'second') {
    dateOfOccurrence.setDate(dateOfOccurrence.getDate() + 7);  
  } else if (occurrence === 'third') {
    dateOfOccurrence.setDate(dateOfOccurrence.getDate() + 14);  
  } else if (occurrence === 'last') {
    const lastDay = new Date(year, month + 1, 0);  
    offset = lastDay.getDay() - targetDayIndex;
    if (offset < 0) offset += 7;  
    dateOfOccurrence = new Date(lastDay.setDate(lastDay.getDate() - offset));
  }
  return dateOfOccurrence;
}
