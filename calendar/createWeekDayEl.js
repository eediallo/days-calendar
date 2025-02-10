export function createWeekDayEl(day) {
  const dayEl = document.createElement("div");
  dayEl.textContent = day.slice(0, 3);
  dayEl.style.fontWeight = "bold";
  return dayEl;
}
