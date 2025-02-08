import { createCeil } from "./createCeil.js";
const calendarEl = document.querySelector("#calendar");
function createAndDisplayDays(days) {
  const daysList = days.map(createCeil);
  calendarEl.append(...daysList);
}

export { createAndDisplayDays };
