import { createDayCeil } from "./createDayCeil.js";
import { populateDaysOfMonth } from "./data.js";


export function createAndDisplayWeekDays(){
    const calendarEl = document.querySelector("#calendar-container");
    const tableBody = document.createElement("tbody");
    const daysOfMonth = populateDaysOfMonth().map(createDayCeil);
    
    let tableRow;
    daysOfMonth.forEach((day, index) => {
        if (index % 7 === 0) {
            tableRow = document.createElement("tr");
            tableBody.append(tableRow);
        }
        tableRow.append(day);
    });

    calendarEl.append(tableBody);
}