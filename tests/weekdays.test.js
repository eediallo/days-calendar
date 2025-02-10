import { weekdays } from "../data/data.js";

describe("weekdays", () => {
  test("should be an array", () => {
    const isArray = Array.isArray(weekdays);
    expect(isArray).toBe(true);
  });

  test("should be of length 7", () => {
    expect(weekdays.length === 7).toBe(true);
  });

  test("Elements should be of type string", () => {
    weekdays.forEach((day) => {
      expect(typeof day === "string").toBe(true);
    });
  });
});
