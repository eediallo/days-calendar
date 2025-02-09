export function createDayEl(day) {
  const dayEl = document.createElement("div");
  dayEl.textContent = day;
  dayEl.style.fontWeight = "bold";
  return dayEl;
}
