import { commemorativeDays } from "../CommemorativeDays/loadCommemorativeDays.js";
import { calendarContainerEl } from "../queries.js";
import { calendarConfig } from "./calendarConfig.js";
import { renderEmptyDays } from "./renderEmptyDays.js"; // Import the function

function isCommemorativeDay(day, date, event) {
  const eventDate = new Date(event.date);
  return (
    eventDate.getDate() === day &&
    eventDate.getMonth() === date.getMonth() &&
    eventDate.getFullYear() === date.getFullYear()
  );
}

function createEventLabel(event) {
  const eventLabel = document.createElement("span");
  eventLabel.textContent = ` - ${event.name}`;
  eventLabel.classList.add("commemorative-event");
  return eventLabel;
}

function createDayMonth(day, date) {
  const dayElement = document.createElement("div");
  dayElement.textContent = day;
  dayElement.classList.add("calendar-day");

  commemorativeDays.forEach((event) => {
    if (isCommemorativeDay(day, date, event)) {
      dayElement.appendChild(createEventLabel(event));
    }
  });

  return dayElement;
}

export function renderDaysInMonth(date) {
  calendarContainerEl.innerHTML = "";

  renderEmptyDays(date);

  const daysInMonth = calendarConfig.getDaysInMonth(date);

  for (let day = 1; day <= daysInMonth; day++) {
    calendarContainerEl.append(createDayMonth(day, date));
  }
}
