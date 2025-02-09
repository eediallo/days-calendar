import { nexMonthEl, prevMonthEl } from "../queries.js";
import { nextMonthHandler } from "./nextMonthHandler.js";
import { prevMonthHandler } from "./prevMonthHandler.js";

export function eventHandlers() {
  prevMonthEl.addEventListener("click", prevMonthHandler);
  nexMonthEl.addEventListener("click", nextMonthHandler);
}
