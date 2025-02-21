import { commemorativeDays } from "../data.js";
import { generateICalEntry } from "./generateCalEntry.js";
import { getCommemorativeDayDate } from "../comDays/getComDate.js";
import fs from "fs";

/**
 * Generates an iCalendar (.ics) file content for commemorative days from 2020 to 2030.
 *
 * The generated iCalendar content includes the calendar version, product identifier,
 * calendar scale, and method. It iterates through the years 2020 to 2030 and for each
 * commemorative day, it calculates the date and generates an iCalendar entry.
 *
 * @returns {string} The generated iCalendar content as a string.
 */
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

const icalContent = generateICalFile();
fs.writeFile("./generated-days.ics.", icalContent, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(
      "iCalendar file has been generated and saved as generated-days.ics"
    );
  }
});
