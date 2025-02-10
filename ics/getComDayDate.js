import { weekdays, monthNames } from "../data/data.js";
import { calendarConfig } from "../calendar/calendarConfig.js";

export function getCommemorativeDayDate(year, commemorativeDay) {
  const month = monthNames.indexOf(
    (m) => m.name === commemorativeDay.monthName
  );
  const dayName = commemorativeDay.dayName;
  const occurence = commemorativeDay.occurence;

  calendarConfig.currentDate = new Date(year, month, 1);

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
