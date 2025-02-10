import { calendarConfig } from "../calendar/calendarConfig.js";
import { calendarContainerEl } from "../queries.js";
import { displayCalendar } from "../calendar/displayCalendar.js";
import { loadCommemorativeDays } from "../CommemorativeDays/loadCommemorativeDays.js"; 


export async function nextMonthHandler() {
  calendarContainerEl.innerHTML = "";
  calendarConfig.currentDate.setMonth(
    calendarConfig.currentDate.getMonth() + 1
  );

  await loadCommemorativeDays(calendarConfig.currentDate.getFullYear());
  
  displayCalendar(calendarConfig.currentDate);
}
