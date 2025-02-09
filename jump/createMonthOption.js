export function createMonthOption(month) {
  const option = document.createElement("option");
  option.value = month;
  option.textContent = month;
  return option;
}
