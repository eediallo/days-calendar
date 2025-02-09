import { monthYearEl } from "../queries.js";
import { monthNames } from "../data/data.js";

const month = (date) => date.getMonth();
const year = (date) => date.getFullYear();

export function createMonthYearEl(date) {
  monthYearEl.textContent = `${monthNames[month(date)]} ${year(date)}`;
}
