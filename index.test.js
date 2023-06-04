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

  test("returns II if number is 2", () => {
    expect(numberToRoman(2)).toBe("II");
  });

  test("returns XII if number is 12", () => {
    expect(numberToRoman(12)).toBe("XII");
  });

  test("returns XXI if number is 21", () => {
    expect(numberToRoman(21)).toBe("XXI");
  });

  test("returns LIII if number is 53", () => {
    expect(numberToRoman(53)).toBe("LIII");
  });

  test("returns XLVI if number is 46", () => {
    expect(numberToRoman(46)).toBe("XLVI");
  });

  test("returns LXXXIV if number is 84", () => {
    expect(numberToRoman(84)).toBe("LXXXIV");
  });

  test("returns XCIX if number is 99", () => {
    expect(numberToRoman(99)).toBe("XCIX");
  });

  test("returns C if number is 100", () => {
    expect(numberToRoman(100)).toBe("C");
  });

  test("returns CXIX if number is 119", () => {
    expect(numberToRoman(119)).toBe("CXIX");
  });

  test("returns CXLVIII if number is 148", () => {
    expect(numberToRoman(148)).toBe("CXLVIII");
  });

  test("returns CCLXXXIV if number is 284", () => {
    expect(numberToRoman(284)).toBe("CCLXXXIV");
  });

  test("returns DXLV if number is 545", () => {
    expect(numberToRoman(545)).toBe("DXLV");
  });

  test("returns CMXCIX if number is 999", () => {
    expect(numberToRoman(999)).toBe("CMXCIX");
  });

  test("returns DCCCLXXXVIII if number is 888", () => {
    expect(numberToRoman(888)).toBe("DCCCLXXXVIII");
  });

  test("returns M if number is 1000", () => {
    expect(numberToRoman(1000)).toBe("M");
  });
});
