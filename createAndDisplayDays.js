import { createCeil } from "./createCeil.js";
import {weekdays} from "./data.js";
const calendarEl = document.querySelector("#calendar-container");
console.log(calendarEl);
function createAndDisplayDays() {
  const daysList = weekdays.map(createCeil);
  console.log(daysList);
  calendarEl.append(...daysList);
}

export { createAndDisplayDays };
