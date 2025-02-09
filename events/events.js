import { nexMonthEl, prevMonthEl } from "../queries.js";
import { nextMonthHandler } from "./nextMonthHandler.js";
import { handlePrevMonth } from "./prevMonthHandler.js";

export function eventHandlers() {
  prevMonthEl.addEventListener("click", handlePrevMonth);
  nexMonthEl.addEventListener("click", nextMonthHandler);
}
