import { getFirstDayOfMonth } from "../CommemorativeDays/CommemorativeDaysFunctions.js";

describe('getFirstDayOfMonth', () => {
    test('should return the first day of the month for a given date', () => {
      expect(getFirstDayOfMonth(new Date(2025, 4, 15)).getDate()).toBe(1);
      expect(getFirstDayOfMonth(new Date(2026, 10, 22)).getDate()).toBe(1);
    });
  
    test('should return a Date object with the correct month and year', () => {
      const firstDay = getFirstDayOfMonth(new Date(2025, 6, 20));
      expect(firstDay.getFullYear()).toBe(2025);
      expect(firstDay.getMonth()).toBe(6);
    });
  });