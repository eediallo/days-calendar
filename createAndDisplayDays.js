import { createHeaderCeil } from "./createHeaderCeil.js";
import { weekdays } from "./data.js";
const calendarEl = document.querySelector("#calendar-container");
console.log(calendarEl);
function createAndDisplayDays() {
  const thHeader = document.createElement("thead");
  const thR = document.createElement("tr");
  const daysList = weekdays.map(createHeaderCeil);
  console.log(daysList);
  thR.append(...daysList);
  thHeader.append(thR);
  calendarEl.append(thHeader);
}

export { createAndDisplayDays };
