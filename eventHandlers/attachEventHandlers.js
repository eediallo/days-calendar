import { goBtn, nexMonthEl, prevMonthEl } from "../config/queries.js";
import {
  jumpHandler,
  nextMonthHandler,
  prevMonthHandler,
} from "./eventHandlers.js";

export function attachEventHandlers() {
  prevMonthEl.addEventListener("click", prevMonthHandler);
  nexMonthEl.addEventListener("click", nextMonthHandler);
  goBtn.addEventListener("click", jumpHandler);
}
