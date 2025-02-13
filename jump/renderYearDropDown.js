import { datesConfig } from "../config/datesConfig.js";
import { yearSelect } from "../config/queries.js";

export function createYearOption(year) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  return option;
}

export function renderYearDropDown() {
  const currentYear = datesConfig.getYear(datesConfig.currentDate);
  for (let year = currentYear - 200; year <= currentYear + 50; year++) {
    const option = createYearOption(year);
    yearSelect.append(option);
  }
  yearSelect.value = currentYear;
}
