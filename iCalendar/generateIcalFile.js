import { commemorativeDays } from "../data.js";
import { generateICalEntry } from "./generateCalEntry.js";
import { getCommemorativeDayDate } from "../comDays/getComDate.js";

function generateICalFile() {
  let icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Special Days Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

  for (let year = 2020; year <= 2030; year++) {
    for (const commemorativeDay of commemorativeDays) {
      const date = getCommemorativeDayDate(year, commemorativeDay);
      icalContent += generateICalEntry(commemorativeDay, date) + "\n";
    }
  }

  icalContent += "END:VCALENDAR";
  return icalContent;
}

console.log(generateICalFile());
