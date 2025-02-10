import { calendarContainerEl, monthSelect, yearSelect } from "../queries.js";
import { displayCalendar } from "../calendar/displayCalendar.js";
import { calendarConfig } from "../calendar/calendarConfig.js";
import { loadCommemorativeDays } from "../CommemorativeDays/loadCommemorativeDays.js"; 
export async function jumpHandler() {
  calendarContainerEl.innerHTML = "";

  const selectedMonth = parseInt(monthSelect.value, 10); 
  const selectedYear = parseInt(yearSelect.value, 10); 

  calendarConfig.currentDate = new Date(selectedYear, selectedMonth, 1);

  await loadCommemorativeDays(selectedYear);

  displayCalendar(calendarConfig.currentDate);
}
