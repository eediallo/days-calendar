const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const firstDayOfMonth = new Date(year, month, 1);
const daysInMonth = new Date(year, month + 1, 0).getDate();
const startingDay =
  firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

export const calendarConfig = {
  date,
  year,
  month,
  firstDayOfMonth,
  daysInMonth,
  startingDay,
};
