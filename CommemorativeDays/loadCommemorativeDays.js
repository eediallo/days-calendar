import { days } from '../data/days.js'; // Import directly from days.js
import { calculateOccurrenceDate } from './CommemorativeDaysFunctions.js';

export let commemorativeDays = [];

export async function loadCommemorativeDays(year) {
  try {
    commemorativeDays.length = 0;

    days.forEach((day) => {
      const month = new Date(Date.parse(`${day.monthName} 1, ${year}`)).getMonth();
      const commemorativeDate = calculateOccurrenceDate(month, year, day.dayName, day.occurence);

      if (!isNaN(commemorativeDate)) {
        commemorativeDays.push({
          name: day.name,
          date: commemorativeDate,
          descriptionURL: day.descriptionURL,
        });

        console.log(`${day.name} in ${year} falls on ${commemorativeDate.toDateString()}`);
      } else {
        console.error(`Invalid commemorative date for ${day.name}`);
      }
    });
  } catch (error) {
    console.error('Error loading commemorative days:', error);
  }
}
