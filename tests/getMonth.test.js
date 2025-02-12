import { datesConfig } from "../config/datesConfig";

describe("getMonth", () => {
  test("should return current month", () => {
    const curruntDate = new Date();
    const currentInput = datesConfig.getMonth(curruntDate);
    expect(currentInput).toBe(1);
  });
});
