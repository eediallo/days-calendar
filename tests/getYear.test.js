import { datesConfig } from "../config/datesConfig";

describe("getYear", () => {
  test("should return current year", () => {
    const curruntDate = new Date();
    const currentInput = datesConfig.getYear(curruntDate);
    expect(currentInput).toBe(2025);
  });
});
