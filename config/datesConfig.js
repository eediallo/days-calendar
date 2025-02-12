const currentDate = new Date();
const getYear = (date) => date.getFullYear();
const getMonth = (date) => date.getMonth();
const getFirstDayOfMonth = (date) => new Date(getYear(date), getMonth(date), 1);
const getDaysInMonth = (date) =>
  new Date(getYear(date), getMonth(date) + 1, 0).getDate();
const getStartingDay = (date) => {
  const firstDayOfMonth = getFirstDayOfMonth(date);
  return firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
};

export const datesConfig = {
  getYear,
  getFirstDayOfMonth,
  getDaysInMonth,
  getStartingDay,
  getMonth,
  currentDate,
};
