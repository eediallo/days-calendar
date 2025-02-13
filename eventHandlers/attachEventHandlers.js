import { goBtn, prevMonthBtn, nexMonthBtn } from "../config/queries.js";
import {
  jumpToNextMonthAndYearHandler,
  nextMonthHandler,
  prevMonthHandler,
} from "./eventHandlers.js";

export function attachEventHandlers() {
  prevMonthBtn.addEventListener("click", prevMonthHandler);
  nexMonthBtn.addEventListener("click", nextMonthHandler);
  goBtn.addEventListener("click", jumpToNextMonthAndYearHandler);
}
