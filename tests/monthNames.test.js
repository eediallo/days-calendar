import { monthNames } from "../data/data.js";

describe("MonthNames", () => {
  test("should be an array", () => {
    const isArray = Array.isArray(monthNames);
    expect(isArray).toBe(true);
  });
});
