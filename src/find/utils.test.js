import { findFirstPositiveNumber, findCommonElement } from "./utils";
import * as matchers from "jest-extended";
expect.extend(matchers);
describe("find utility exercises", () => {
  // findFirstPositiveNumber
  describe("findFirstPositiveNumber", () => {
    test("Find first positive number", () => {
      expect(findFirstPositiveNumber([3, 7, -2, 9, -5])).toBe(3);
    });

    test("Find first positive number in an array with only negative numbers", () => {
      expect(findFirstPositiveNumber([-3, -7, -2, -9, -5])).toBeUndefined();
    });

    test("Find first positive number in an array with decimal numbers	", () => {
      expect(findFirstPositiveNumber([3.5, 7.2, 2.1, 9.7, 5.3])).toBe(3.5);
    });

    test("Check if the function throws an error with invalid input", () => {
      expect(() => findFirstPositiveNumber("invalid")).toThrow();
    });
  });

  // findCommonElement
  describe("findCommonElement", () => {
    test("Find a common element", () => {
      const result = findCommonElement([2, 4, 6, 8, 10], [5, 7, 8, 10, 12]);
      expect(result).toBe(8);
    });

    test("Find a common element in arrays with no common elements", () => {
      const result = findCommonElement([2, 4, 6], [5, 7, 9]);
      expect(result).toBeUndefined();
    });

    test("Find a common element when one array is empty", () => {
      const result = findCommonElement([], [5, 7, 8, 10, 12]);
      expect(result).toBeUndefined();
    });

    test("Find a common element when both arrays are empty", () => {
      const result = findCommonElement([], []);
      expect(result).toBeUndefined();
    });

    test("Check if the function throws an error with invalid input", () => {
      expect(() => findCommonElement("invalid1", "invalid2")).toThrow();
    });
  });
});
