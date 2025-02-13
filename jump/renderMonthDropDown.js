import { datesConfig } from "../config/datesConfig.js";
import { monthNames } from "../data.js";
import { monthSelect } from "../config/queries.js";

export function createMonthOption(data) {
  const option = document.createElement("option");
  option.value = data.id;
  option.textContent = data.name;
  return option;
}

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
