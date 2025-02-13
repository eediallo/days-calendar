import fs from 'fs/promises';
import path from 'path';
import { commemorativeDays, loadCommemorativeDays } from './CommemorativeDays/loadCommemorativeDays.js';


function formatDateToICal(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function createICalEvent(event) {
  const formattedDate = formatDateToICal(event.date);
  return `BEGIN:VEVENT
DTSTAMP:${formattedDate}
DTSTART;VALUE=DATE:${event.date.getFullYear()}${String(event.date.getMonth() + 1).padStart(2, '0')}${String(event.date.getDate()).padStart(2, '0')}
SUMMARY:${event.name}
DESCRIPTION:More info at ${event.descriptionURL}
URL:${event.descriptionURL}
END:VEVENT`;
}

async function generateICal() {
  let icalData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Commemorative Days Calendar//NONSGML v1.0//EN`;

  for (let year = 2020; year <= 2030; year++) {
    await loadCommemorativeDays(year); // Load data for the year

    commemorativeDays.forEach((event) => {
      if (event.date instanceof Date && !isNaN(event.date.getTime())) {
        icalData += '\n' + createICalEvent(event);
      } else {
        console.error(`Invalid date for ${event.name} in ${year}`);
      }
    });
  }

  icalData += `\nEND:VCALENDAR`;

  const filePath = path.join(process.cwd(), 'commemorative_days.ics');
  await fs.writeFile(filePath, icalData, 'utf8');

  console.log(`✅ ICS file successfully generated: ${filePath}`);
}

generateICal();
