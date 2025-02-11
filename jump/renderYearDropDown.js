import { calendarConfig } from "../Webcalendar/calendarConfig.js";
import { yearSelect } from "../queries.js";
import { createYearOption } from "./createYearOption.js";

export function renderYearDropDown() {
  const currentYear = calendarConfig.getYear(calendarConfig.currentDate);
  for (let year = currentYear - 125; year <= currentYear + 25; year++) {
    const option = createYearOption(year);
    yearSelect.append(option);
  }
  yearSelect.value = currentYear;
}
