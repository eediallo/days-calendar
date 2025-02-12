import { datesConfig } from "../config/datesConfig.js";
import { monthNames } from "../data/data.js";
import { monthSelect } from "../config/queries.js";
import { createMonthOption } from "./createMonthOption.js";

export function renderMonthDropDown() {
  const currentMonth = datesConfig.getMonth(datesConfig.currentDate);
  const optionList = monthNames.map((month, index) => {
    const option = createMonthOption(month);
    if (index === currentMonth) {
      option.selected = true;
    }
    return option;
  });
  monthSelect.append(...optionList);
}
