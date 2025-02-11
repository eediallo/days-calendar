import { commemorativeDays } from "../data/comDays.js";
import { getCommemorativeDayDate } from "./getComDayDate.js";
import { generateICalEntry } from "./generateIcalEntry.js";
import fs from "fs";

function generateICalFile() {
  let icalContent = `BEGIN:VCALENDAR
     VERSION:2.0
     PRODID:-//Commemorative Days Calendar//EN
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

fs.writeFile("./iCalendar.ics", generateICalFile(), (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Content has been successfully save in iCalendar.ics");
  }
});
