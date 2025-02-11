import { calculateOccurrenceDate } from "../CommemorativeDays/CommemorativeDaysFunctions.js";

describe('calculateOccurrenceDate', () => {
    test('should return the correct date for the first occurrence of a weekday', () => {
      expect(calculateOccurrenceDate(4, 2025, 'Monday', 'first').getDate()).toBe(5);
      expect(calculateOccurrenceDate(9, 2026, 'Thursday', 'first').getDate()).toBe(1);
    });
  
    test('should return the correct date for the last occurrence of a weekday', () => {
      expect(calculateOccurrenceDate(4, 2025, 'Monday', 'last').getDate()).toBe(26);
      expect(calculateOccurrenceDate(9, 2026, 'Thursday', 'last').getDate()).toBe(29);
    });
  });