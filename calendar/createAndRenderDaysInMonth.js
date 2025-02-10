import { getCommemorativeDay } from "../comDays/getComDay.js";
import { calendarContainerEl } from "../queries.js";
import { calendarConfig } from "./calendarConfig.js";

function createDayMonth(day) {
  const dayElement = document.createElement("div");
  dayElement.textContent = day;
  dayElement.classList.add("calendar-day");
  const commemorativeDay = getCommemorativeDay(day);
  if (commemorativeDay) {
    dayElement.classList.add("special");
    dayElement.setAttribute("data-tooltip", commemorativeDay.name);
  }
  return dayElement;
}

export function renderDaysInMonth(date) {
  const daysInMonth = calendarConfig.getDaysInMonth(date);
  for (let day = 1; day <= daysInMonth; day++) {
    calendarContainerEl.append(createDayMonth(day));
  }
}
