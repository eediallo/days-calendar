import { calendarConfig } from "../calendar/calendarConfig.js";
import { monthNames } from "../data/data.js";
import { monthSelect } from "../queries.js";
import { createMonthOption } from "./createMonthOption.js";

export function renderMonthDropDown() {
  const currentMonth = calendarConfig.getMonth(calendarConfig.currentDate);
  const optionList = monthNames.map((month, index) => {
    const option = createMonthOption(month);
    if (index === currentMonth) {
      option.selected = true;
    }
    return option;
  });
  monthSelect.append(...optionList);
}
