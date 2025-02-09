import { calendarConfig } from "../calendar/calendarConfig.js";
import { yearSelect } from "../queries.js";
import { createOption } from "./createOption.js";

export function renderYearDropDown() {
  const currentYear = calendarConfig.currentDate.getFullYear();
  for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    const option = createOption(year);
    yearSelect.append(option);
  }
  yearSelect.value = currentYear;
}
