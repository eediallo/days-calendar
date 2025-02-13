import { commemorativeDays } from "../data.js";
import { generateICalEntry } from "./generateCalEntry.js";
import { getCommemorativeDayDate } from "../comDays/getComDate.js";
import fs from "fs";

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
