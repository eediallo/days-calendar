import { monthNames } from "../data/data.js";
import { monthSelect } from "../queries.js";
import { createMonthOption } from "./createMonthOption.js";

export function renderMonthList() {
  const optionList = monthNames.map(createMonthOption);
  monthSelect.append(...optionList);
}
