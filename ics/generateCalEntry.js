export function generateICalEntry(commemorativeDay, date) {
  const dateFormatRegex = /-|:|\.\d\d\d/g;
  const startDate = date.toISOString().replace(dateFormatRegex, ""); // Format: YYYYMMDDTHHMMSSZ
  const endDate = new Date(date.getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .replace(dateFormatRegex, ""); // Add 1 day

  return `BEGIN:VEVENT
UID:${Math.random().toString(36).substring(2)}@commemorativeDays.com
DTSTAMP:${startDate}
DTSTART;VALUE=DATE:${startDate.slice(0, 8)}
DTEND;VALUE=DATE:${endDate.slice(0, 8)}
SUMMARY:${commemorativeDay.name}
DESCRIPTION:${commemorativeDay.descriptionURL}
END:VEVENT`;
}
