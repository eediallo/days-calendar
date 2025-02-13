import { weekdays } from "../data.js";
import { calendarContainerEl } from "../config/queries.js";

export function createWeekDayEl(day) {
  const dayEl = document.createElement("div");
  dayEl.textContent = day.slice(0, 3);
  dayEl.style.fontWeight = "bold";
  return dayEl;
}

function renderWeekdays() {
  const daysList = weekdays.map(createWeekDayEl);
  calendarContainerEl.append(...daysList);
}

export { renderWeekdays };
