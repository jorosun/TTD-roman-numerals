// TDD test file
import { numberToRoman } from "./index.js";

describe("numberToRoman", () => {
  test("returns I if number is 1", () => {
    expect(numberToRoman(1)).toBe("I");
  });

  test("returns V if number is 5", () => {
    expect(numberToRoman(5)).toBe("V");
  });

  test("returns X if number is 10", () => {
    expect(numberToRoman(10)).toBe("X");
  });
});
