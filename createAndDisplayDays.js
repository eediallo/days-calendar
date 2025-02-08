import { createCeil } from "./createCeil.js";
const calendarEl = document.querySelector("#calendar-container");
function createAndDisplayDays(days) {
  const daysList = days.map(createCeil);
  calendarEl.append(...daysList);
}

export { createAndDisplayDays };
