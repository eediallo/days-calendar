import { createDayCeil } from "./createDayCeil.js";
import { populateDaysOfMonth } from "./data.js";


export function createAndDisplayWeekDays(){
    const calendarEl = document.querySelector("#calendar-container");
    const tableBody=document.createElement("tbody");
    const tableRow=document.createElement("tr");
    const daysOfMonth=populateDaysOfMonth().map(createDayCeil);
    tableRow.append(...daysOfMonth);
    tableBody.append(tableRow);
    calendarEl.append(tableBody);
}