import { calendarContainerEl } from "../queries.js";
import { calendarConfig } from "./calendarConfig.js";

function createDayMonth(day) {
  const dayElement = document.createElement("div");
  dayElement.textContent = day;
  dayElement.classList.add("calendar-day");
  return dayElement;
}

export function renderDaysInMonth(date) {
  const daysInMonth = calendarConfig.getDaysInMonth(date);
  for (let day = 1; day <= daysInMonth; day++) {
    calendarContainerEl.append(createDayMonth(day));
  }
}
