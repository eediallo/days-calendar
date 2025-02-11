import { getDayOfWeekIndex } from "../CommemorativeDays/CommemorativeDaysFunctions.js";

describe('getDayOfWeekIndex', () => {
  test('should return correct index for a valid day name', () => {
    expect(getDayOfWeekIndex('Monday')).toBe(1);
    expect(getDayOfWeekIndex('Thursday')).toBe(4);
  });

  test('should return -1 for an invalid day name', () => {
    expect(getDayOfWeekIndex('Funday')).toBe(-1);
    expect(getDayOfWeekIndex('')).toBe(-1);
  });
});
