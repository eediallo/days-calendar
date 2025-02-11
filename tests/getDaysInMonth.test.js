import { datesConfig } from "../datesConfig.js";

describe("getDaysInMonth", () => {
  test("should return number of days of current Month", () => {
    const curruntDate = new Date();
    const currentInput = datesConfig.getDaysInMonth(curruntDate);
    expect(currentInput).toBe(28);
  });
});
