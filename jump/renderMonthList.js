import { monthNames } from "../data/data.js";
import { monthSelect } from "../queries.js";
import { createOption } from "./createOption.js";

export function renderMonthDropDown() {
  const optionList = monthNames.map((month) => createOption(month));
  monthSelect.append(...optionList);
}
