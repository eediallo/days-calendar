export function createYearOption(year) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  return option;
}
