import { getDayOfWeekIndex, getFirstDayOfMonth, calculateOccurrenceDate } from './CommemorativeDaysFunctions.js';

export async function loadCommemorativeDays() {
  try {
    const response = await fetch('./data/days.json');
    const data = await response.json();

    data.forEach((day) => {
      const year = day.year || 2024;
      const month = new Date(Date.parse(day.monthName + " 1, " + year)).getMonth(); 

      const commemorativeDate = calculateOccurrenceDate(month, year, day.dayName, day.occurence);

      // Will be removed later
      console.log(`${day.name} falls on ${commemorativeDate.toDateString()}`); 
    });
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}


