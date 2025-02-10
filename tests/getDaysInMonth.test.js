import { calendarConfig } from "../calendar/calendarConfig.js";

describe("getDaysInMonth", () => {
  test("should return number of days of current Month", () => {
    const curruntDate = new Date();
    const currentInput = calendarConfig.getDaysInMonth(curruntDate);
    expect(currentInput).toBe(28);
  });
});
