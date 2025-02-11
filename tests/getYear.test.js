import { calendarConfig } from "../Webcalendar/calendarConfig.js";

describe("getYear", () => {
  test("should return current year", () => {
    const curruntDate = new Date();
    const currentInput = calendarConfig.getYear(curruntDate);
    expect(currentInput).toBe(2025);
  });
});
