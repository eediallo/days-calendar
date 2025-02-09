import { goBtn, nexMonthEl, prevMonthEl } from "../queries.js";
import { jumpHandler } from "./jumpHandler.js";
import { nextMonthHandler } from "./nextMonthHandler.js";
import { prevMonthHandler } from "./prevMonthHandler.js";

export function eventHandlers() {
  prevMonthEl.addEventListener("click", prevMonthHandler);
  nexMonthEl.addEventListener("click", nextMonthHandler);
  goBtn.addEventListener("click", jumpHandler);
}
