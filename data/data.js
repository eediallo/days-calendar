export const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function populateDaysOfMonth() {
  const daysOfMonth = [];
  for (let i = 1; i <= 31; i++) {
    daysOfMonth.push(i);
  }
  return daysOfMonth;
}

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export { populateDaysOfMonth };
