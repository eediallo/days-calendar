import { createWeekDayEl } from "./createWeekDayEl.js";
import { weekdays } from "../data/data.js";
import { calendarContainerEl } from "../queries.js";
function renderWeekdays() {
  const daysList = weekdays.map(createWeekDayEl);
  calendarContainerEl.append(...daysList);
}

export { renderWeekdays };
