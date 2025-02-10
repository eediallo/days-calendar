export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];

function populateDaysOfMonth() {
  const daysOfMonth = [];
  for (let i = 1; i <= 31; i++) {
    daysOfMonth.push(i);
  }
  return daysOfMonth;
}

export const monthNames = [
  { id: 0, name: "January" },
  { id: 1, name: "February" },
  { id: 2, name: "March" },
  { id: 3, name: "April" },
  { id: 4, name: "May" },
  { id: 5, name: "June" },
  { id: 6, name: "July" },
  { id: 7, name: "August" },
  { id: 8, name: "September" },
  { id: 9, name: "October" },
  { id: 10, name: "November" },
  { id: 11, name: "December" },
];

export { populateDaysOfMonth };
