export function createMonthOption(data) {
  const option = document.createElement("option");
  option.value = data.id;
  option.textContent = data.name;
  return option;
}
