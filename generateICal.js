import fs from 'fs';
import path from 'path';
import { calculateOccurrenceDate } from './CommemorativeDays/CommemorativeDaysFunctions.js';

const DAYS_JSON_PATH = './data/days.json';

//Might be changed
async function loadCommemorativeDays() {
  try {
    const data = JSON.parse(fs.readFileSync(DAYS_JSON_PATH, 'utf8'));
    return data;
  } catch (error) {
    console.error('Error loading JSON data:', error);
    process.exit(1);
  }
}

function formatDateToICal(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function createICalEvent(event, date) {
  const formattedDate = formatDateToICal(date);
  return `BEGIN:VEVENT
DTSTAMP:${formattedDate}
DTSTART;VALUE=DATE:${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}
SUMMARY:${event.name}
DESCRIPTION:More info at ${event.descriptionURL}
URL:${event.descriptionURL}
END:VEVENT`;
}

async function generateICal() {
  const events = await loadCommemorativeDays();
  let icalData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Commemorative Days Calendar//NONSGML v1.0//EN`;

  for (let year = 2020; year <= 2030; year++) {
    events.forEach((event) => {
      const month = new Date(Date.parse(`${event.monthName} 1, ${year}`)).getMonth();
      const date = calculateOccurrenceDate(month, year, event.dayName, event.occurence);

      if (date instanceof Date && !isNaN(date.getTime())) {
        icalData += '\n' + createICalEvent(event, date);
      } else {
        console.error(`Invalid date for ${event.name} in ${year}`);
      }
    });
  }

  icalData += `\nEND:VCALENDAR`;

  const filePath = path.join(process.cwd(), 'commemorative_days.ics');

  fs.writeFileSync(filePath, icalData, 'utf8');
  console.log(`ICS file successfully generated: ${filePath}`);
}

generateICal();
