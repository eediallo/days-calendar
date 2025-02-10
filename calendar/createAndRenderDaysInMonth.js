import { commemorativeDays } from "../CommemorativeDays/loadCommemorativeDays.js";
import { calendarContainerEl } from "../queries.js";
import { calendarConfig } from "./calendarConfig.js";

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

function createEmptyDayElement() {
  const emptyDay = document.createElement("div");
  emptyDay.classList.add("calendar-day", "empty");
  return emptyDay;
}

export function renderDaysInMonth(date) {
  calendarContainerEl.innerHTML = "";

  const daysInMonth = calendarConfig.getDaysInMonth(date);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayOfWeek = firstDay.getDay();

  const emptyDaysCount = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  for (let i = 0; i < emptyDaysCount; i++) {
    calendarContainerEl.appendChild(createEmptyDayElement());
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarContainerEl.append(createDayMonth(day, date));
  }
}
