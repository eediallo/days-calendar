import { commemorativeDays } from "../data/data.js";

describe("CommemorativeDays", () => {
  test("Should be of length 5", () => {
    expect(commemorativeDays.length === 5).toBe(true);
  });

  test("Each commomerative day should have  a name property", () => {
    commemorativeDays.forEach((comDay) => {
      expect(comDay).toHaveProperty("name");
    });
  });

  test("Each commomerative day should have  a monthName property", () => {
    commemorativeDays.forEach((comDay) => {
      expect(comDay).toHaveProperty("monthName");
    });
  });

  test("Each commomerative day should have  a dayName property", () => {
    commemorativeDays.forEach((comDay) => {
      expect(comDay).toHaveProperty("dayName");
    });
  });

  test("Each commomerative day should have  an occurence property", () => {
    commemorativeDays.forEach((comDay) => {
      expect(comDay).toHaveProperty("occurence");
    });
  });

  test("Each commomerative day should have  a desriptionURL property", () => {
    commemorativeDays.forEach((comDay) => {
      expect(comDay).toHaveProperty("descriptionURL");
    });
  });
});
