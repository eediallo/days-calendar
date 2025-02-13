import { monthNames } from "../data.js";

describe("MonthNames", () => {
  test("should be an array", () => {
    const isArray = Array.isArray(monthNames);
    expect(isArray).toBe(true);
  });

  test("should have 12 elements", () => {
    expect(monthNames.length === 12).toBe(true);
  });

  test("Each month should have an id", () => {
    monthNames.forEach((month) => expect(month).toHaveProperty("id"));
  });

  test("Each month should have a name", () => {
    monthNames.forEach((month) => expect(month).toHaveProperty("name"));
  });
});
