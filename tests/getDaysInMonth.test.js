import { calendarConfig } from "../calendar/calendarConfig.js";

describe("getMonth", () => {
  test("should return current month", () => {
    const curruntDate = new Date();
    const currentInput = calendarConfig.getDaysInMonth(curruntDate);
    expect(currentInput).toBe(28);
  });
});
