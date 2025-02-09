export function createWeekDayEl(day) {
  const dayEl = document.createElement("div");
  dayEl.textContent = day;
  dayEl.style.fontWeight = "bold";
  return dayEl;
}
