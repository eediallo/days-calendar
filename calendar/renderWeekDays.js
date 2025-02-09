import { createDayEl } from "./createDayEl.js";
import { weekdays } from "../data/data.js";
import { calendarContainerEl } from "../queries.js";
function renderWeekdays() {
  const daysList = weekdays.map(createDayEl);
  calendarContainerEl.append(...daysList);
}

export { renderWeekdays };
