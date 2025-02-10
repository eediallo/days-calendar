import { calendarConfig } from "./calendar/calendarConfig.js";
import { displayCalendar } from "./calendar/displayCalendar.js";
import { eventHandlers } from "./events/events.js";
import { renderDropDowns } from "./jump/renderDropDown.js";
import { loadCommemorativeDays } from "./CommemorativeDays/loadCommemorativeDays.js";

async function main() {
  const currentYear = new Date().getFullYear();
  await loadCommemorativeDays(currentYear);  
  displayCalendar(calendarConfig.currentDate);  
  eventHandlers();  
  renderDropDowns();  
}
window.onload = main;
