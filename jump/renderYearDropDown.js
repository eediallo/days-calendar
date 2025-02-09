import { calendarConfig } from "../calendar/calendarConfig.js";
import { yearSelect } from "../queries.js";
import { createYearOption } from "./createYearOption.js";

export function renderYearDropDown() {
  const currentYear = calendarConfig.getYear(calendarConfig.currentDate);
  for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    const option = createYearOption(year);
    yearSelect.append(option);
  }
  yearSelect.value = currentYear;
}
