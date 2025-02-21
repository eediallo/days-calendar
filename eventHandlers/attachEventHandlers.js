import { goBtn, prevMonthBtn, nexMonthBtn } from "../config/queries.js";
import {
  jumpToNextMonthAndYearHandler,
  nextMonthHandler,
  prevMonthHandler,
} from "./eventHandlers.js";

/**
 * Attaches event handlers to the previous month, next month, and go buttons.
 * 
 * This function adds click event listeners to the following buttons:
 * - `prevMonthBtn`: Triggers the `prevMonthHandler` function when clicked.
 * - `nexMonthBtn`: Triggers the `nextMonthHandler` function when clicked.
 * - `goBtn`: Triggers the `jumpToNextMonthAndYearHandler` function when clicked.
 */
export function attachEventHandlers() {
  prevMonthBtn.addEventListener("click", prevMonthHandler);
  nexMonthBtn.addEventListener("click", nextMonthHandler);
  goBtn.addEventListener("click", jumpToNextMonthAndYearHandler);
}
