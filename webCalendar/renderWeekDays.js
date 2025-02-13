import { createWeekDayEl } from "./createWeekDayEl.js";
import { weekdays } from "../data.js";
import { calendarContainerEl } from "../config/queries.js";

function renderWeekdays() {
  const daysList = weekdays.map(createWeekDayEl);
  calendarContainerEl.append(...daysList);
}

export { renderWeekdays };
