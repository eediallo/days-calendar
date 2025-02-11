import { calendarConfig } from "../calendar/calendarConfig.js";
import { commemorativeDays } from "../data/comDays.js";
import { monthNames } from "../data/data.js";
import { getCommemorativeDayDate } from "../ics/getComDate.js";

export function getCommemorativeDay(day) {
  const year = calendarConfig.getYear(calendarConfig.currentDate);
  const month = calendarConfig.getMonth(calendarConfig.currentDate);

  const date = new Date(year, month, day);
  const dayName = date.toLocaleDateString("en-GB", { weekday: "long" });

  for (const commemorativeDay of commemorativeDays) {
    if (
      commemorativeDay.monthName === monthNames[month].name &&
      commemorativeDay.dayName === dayName
    ) {
      const calculatedDate = getCommemorativeDayDate(year, commemorativeDay);
      if (calculatedDate.getUTCDate() === day) {
        return commemorativeDay;
      }
    }
  }
  return null;
}
