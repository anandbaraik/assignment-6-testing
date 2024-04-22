import {
  filterLongStrings,
  filterEvenAndPositive,
  isPalindromic,
  palindromicNumbers,
  filterByProperties
} from "./utils";
import * as matchers from "jest-extended";
expect.extend(matchers);
describe("filter utility exercises", () => {
  // filterLongStrings
  describe("filterLongStrings", () => {
    test("Filters strings longer than minimum length", () => {
      expect(
        filterLongStrings(["apple", "banana", "cherry", "date"], 5)
      ).toEqual(["banana", "cherry"]);
    });
    test("Handles empty input array", () => {
      expect(filterLongStrings([], 3)).toEqual([]);
    });
    test("Handles empty output array", () => {
      expect(filterLongStrings(["cat", "dog", "rat"], 3)).toEqual([]);
    });
    test("Handles negative minimum length", () => {
      expect(filterLongStrings(["hello", "world"], -2)).toEqual([
        "hello",
        "world"
      ]);
    });
    test("Ensures original array remains unchanged", () => {
      const originalArray = ["apple", "banana", "cherry"];
      const dupArr = [...originalArray];
      const resultArray = filterLongStrings(dupArr, 4);
      expect(originalArray).toEqual(dupArr);
      expect(originalArray).not.toBe(resultArray);
      expect(resultArray).toEqual(["apple", "banana", "cherry"]);
    });

    test("Checks if the filtered array is empty", () => {
      expect(
        filterLongStrings(["apple", "banana", "cherry", "date"], 10)
      ).toBeEmpty();
    });
    test("Checks if the function throws an error with invalid input", () => {
      expect(() => filterLongStrings("invalid", 5)).toThrow();
    });
  });
  // filterEvenAndPositive
  describe("filterEvenAndPositive", () => {
    test("Filters even and positive numbers", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).toEqual([
        2,
        4,
        8
      ]);
    });

    test("Handles empty input array", () => {
      expect(filterEvenAndPositive([])).toEqual([]);
    });

    test("Handles input with no even and positive numbers", () => {
      expect(filterEvenAndPositive([-3, -5, -7])).toEqual([]);
    });
    test("Handles input with only positive but odd numbers", () => {
      expect(filterEvenAndPositive([1, 3, 5, 7])).toEqual([]);
    });
    test("Checks if the output array contains only even and positive numbers", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).toSatisfyAll(
        (n) => n > 0 && n % 2 === 0
      );
    });

    test("Checks if the output array length is correct", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).toHaveLength(3);
    });

    test("Checks if the filtered array does not contain negative numbers", () => {
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).not.toContain(
        -6
      );
      expect(filterEvenAndPositive([2, 4, -6, 8, 9, -10, 11])).not.toContain(
        -10
      );
    });

    test("Checks if the function throws an error with invalid input", () => {
      expect(() => filterEvenAndPositive("invalid")).toThrow();
    });
  });

  // isPalindromic
  describe("isPalindromic", () => {
    test("Check for a palindromic number", () => {
      expect(isPalindromic(121)).toBe(true);
    });

    test("Check for a non-palindromic number", () => {
      expect(isPalindromic(123)).toBe(false);
    });

    test("Check for a single-digit number", () => {
      expect(isPalindromic(5)).toBe(true);
    });

    test("Filter palindromic numbers from the provided array", () => {
      expect(palindromicNumbers([121, 123, 1331, 454, 678, 898])).toEqual([
        121,
        1331,
        454,
        898
      ]);
    });

    test("Filter palindromic numbers from an empty array", () => {
      expect(palindromicNumbers([])).toEqual([]);
    });

    test("Filter palindromic numbers from an array with no palindromic numbers", () => {
      expect(palindromicNumbers([123, 456, 789])).toEqual([]);
    });

    test("Ensure the filtered array contains only palindromic numbers", () => {
      expect(palindromicNumbers([121, 1331, 454, 898])).toSatisfyAll(
        isPalindromic
      );
    });

    test("Check if the filtered array length is correct", () => {
      expect(palindromicNumbers([121, 1331, 454, 898])).toHaveLength(4);
    });

    test("Check if the filtered array is an array", () => {
      expect(palindromicNumbers([121, 1331, 454, 898])).toBeArray();
    });
  });

  // filterByProperties
  describe("filterByProperties", () => {
    const items = [
      { name: "Item 1", price: 10, category: "A" },
      { name: "Item 2", price: 25, category: "B" },
      { name: "Item 3", price: 10, category: "A" },
      { name: "Item 4", price: 15, category: "C" }
    ];

    //common for all test cases
    const criteria = { price: 10, category: "A" };
    const filteredItems = filterByProperties(items, criteria);

    test("Filter items based on criteria", () => {
      expect(filteredItems).toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 3", price: 10, category: "A" }
      ]);
    });

    test("Ensure original array remains unchanged", () => {
      expect(items).toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ]);
      expect(items).not.toBe(filteredItems);
    });

    test("Check if filtered array includes certain items", () => {
      expect(filteredItems).toContain(items[0]);
      expect(filteredItems).toContain(items[2]);
    });

    test("Check if filtered array does not include certain items", () => {
      expect(filteredItems).not.toContain(items[1]);
      expect(filteredItems).not.toContain(items[3]);
    });

    test("Check if the filtered array length is correct", () => {
      expect(filteredItems).toHaveLength(2);
    });

    test("Check if the filtered array is an array", () => {
      expect(filteredItems).toBeInstanceOf(Array);
    });

    test("Check if the filtered array is not empty", () => {
      expect(filteredItems).not.toBeEmpty();
      expect(filteredItems).not.toHaveLength(0);
    });
  });
});
