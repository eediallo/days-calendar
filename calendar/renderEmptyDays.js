import { calendarContainerEl } from "../queries.js";
import { calendarConfig } from "./calendarConfig.js";

// Fill in the empty days before the first day of the month
function createEmptyDay() {
  const emptyDay = document.createElement("div");
  emptyDay.classList.add("calendar-day", "empty");
  return emptyDay;
}

export function renderEmptyDays() {
  for (let i = 0; i < calendarConfig.startingDay; i++) {
    calendarContainerEl.appendChild(createEmptyDay());
  }
}
