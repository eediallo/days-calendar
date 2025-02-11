import { calendarConfig } from "../Webcalendar/calendarConfig.js";

describe("getMonth", () => {
  test("should return current month", () => {
    const curruntDate = new Date();
    const currentInput = calendarConfig.getMonth(curruntDate);
    expect(currentInput).toBe(1);
  });
});
