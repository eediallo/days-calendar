import { datesConfig } from "../config/datesConfig";

describe("getDaysInMonth", () => {
  test("should return number of days of current Month", () => {
    const curruntDate = new Date();
    const currentInput = datesConfig.getDaysInMonth(curruntDate);
    expect(currentInput).toBe(28);
  });
});
