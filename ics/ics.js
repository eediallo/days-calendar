import { calendarConfig } from "../calendar/calendarConfig.js";
import { commemorativeDays } from "../data/comDays.js";
import { weekdays } from "../data/data.js";
import { monthNames } from "../data/data.js";

function getCommemorativeDayDate(year, commemorativeDay) {
  const month = monthNames.indexOf(
    (m) => m.name === commemorativeDay.monthName
  );
  const dayName = commemorativeDay.dayName;
  const occurence = commemorativeDay.occurence;

  calendarConfig.currentDate = new Date(year, month, 1);

  // Find the first occurrence of the target day
  while (calendarConfig.currentDate.getDay() !== weekdays.indexOf(dayName)) {
    calendarConfig.currentDate.setDate(
      calendarConfig.currentDate.getDate() + 1
    );
  }

  if (occurence === "second") {
    calendarConfig.currentDate.setDate(
      calendarConfig.currentDate.getDate() + 7
    );
  } else if (occurence === "third") {
    calendarConfig.currentDate.setDate(
      calendarConfig.currentDate.getDate() + 14
    );
  } else if (occurence === "last") {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    calendarConfig.currentDate.setDate(lastDayOfMonth - 6);
    while (calendarConfig.currentDate.getDay() !== weekdays.indexOf(dayName)) {
      calendarConfig.currentDate.setDate(
        calendarConfig.currentDate.getDate() + 1
      );
    }
  }

  return calendarConfig.currentDate;
}

// generateICalEntry generates an iCal entry for a special day
function generateICalEntry(commemorativeDay, date) {
  const startDate = date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  console.log(startDate, "STARTDATE==========>");
  const endDate = new Date(date.getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .replace(/-|:|\.\d\d\d/g, ""); // Add 1 day

  return `
      BEGIN:VEVENT
      UID:${Math.random().toString(36).substring(2)}@commemorativeDays.com
      DTSTAMP:${startDate}
      DTSTART;VALUE=DATE:${startDate.slice(0, 8)}
      DTEND;VALUE=DATE:${endDate.slice(0, 8)}
      SUMMARY:${commemorativeDay.name}
      DESCRIPTION:${commemorativeDay.descriptionURL}
      END:VEVENT`;
}

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
