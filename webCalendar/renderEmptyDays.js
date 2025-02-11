import { calendarContainerEl } from "../queries.js";
import { calendarConfig } from "./calendarConfig.js";

// Fill in the empty days before the first day of the month
function createEmptyDay() {
  const emptyDay = document.createElement("div");
  emptyDay.classList.add("calendar-day", "empty");
  return emptyDay;
}

export function renderEmptyDays(date) {
  const startingDay = calendarConfig.getStartingDay(date);
  for (let i = 0; i < startingDay; i++) {
    calendarContainerEl.appendChild(createEmptyDay());
  }
}
