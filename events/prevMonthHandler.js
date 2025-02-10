import { calendarConfig } from "../calendar/calendarConfig.js";
import { displayCalendar } from "../calendar/displayCalendar.js";
import { calendarContainerEl } from "../queries.js";
import { loadCommemorativeDays } from "../CommemorativeDays/loadCommemorativeDays.js"; 

export async function prevMonthHandler() {
  calendarContainerEl.innerHTML = "";
  calendarConfig.currentDate.setMonth(
    calendarConfig.currentDate.getMonth() - 1
  );
  
  await loadCommemorativeDays(calendarConfig.currentDate.getFullYear());

  displayCalendar(calendarConfig.currentDate);
}
