import {
  transformKeys,
  reverseStrings,
  squareRoots,
  removeVowels
} from "./utils";

describe("map utils", () => {
  //transformKeys
  describe("transformKeys", () => {
    test("transforms lowercase keys to uppercase", () => {
      expect(
        transformKeys({ name: "John", age: 30, city: "New York" })
      ).toEqual(["NAME", "AGE", "CITY"]);
    });

    test("returns an empty array for an empty object", () => {
      expect(transformKeys([])).toEqual([]);
    });
    test("does not modify the original object", () => {
      const originalObj = { key1: "value1", key2: "value2" };
      const duplicatedObj = { ...originalObj };
      const transFormedObj = transformKeys(originalObj);
      //check equality of obj as well as refrence of both
      expect(originalObj).toEqual(duplicatedObj);
      expect(originalObj).not.toBe(transFormedObj);
    });
  });
  //reverseStrings
  describe("reverseStrings", () => {
    test("Reverse multiple strings", () => {
      expect(reverseStrings(["hello", "world", "jest"])).toEqual([
        "olleh",
        "dlrow",
        "tsej"
      ]);
    });

    test("Handle empty input array", () => {
      expect(reverseStrings([])).toEqual([]);
    });

    test("Reverse strings with spaces", () => {
      expect(reverseStrings(["hello world", "goodbye space"])).toEqual([
        "dlrow olleh",
        "ecaps eybdoog"
      ]);
    });

    test("Original array remains unchanged", () => {
      const orgArr = ["abc", "def"];
      const dupArr = [...orgArr];
      const result = reverseStrings(orgArr);
      expect(orgArr).toEqual(dupArr);
      expect(orgArr).not.toBe(result);
    });

    test("Reverse and check individual characters", () => {
      const orgArr = ["abc", "123"];
      const result = reverseStrings(orgArr);
      expect(result).toContain("cba");
      expect(result).toContain("321");
    });
  });
  //squareRoots
  describe("squareRoots", () => {
    test("Calculate square roots of positive integers", () => {
      expect(squareRoots([4, 9, 16])).toEqual([2, 3, 4]);
    });

    test("Calculate square roots of positive floating-point numbers", () => {
      expect(squareRoots([2.25, 0.25, 1.44])).toEqual([1.5, 0.5, 1.2]);
    });

    test("Handle empty input array", () => {
      expect(squareRoots([])).toEqual([]);
    });

    test("Ensure each result is close to the actual square root", () => {
      const originalArr = [25, 64, 100];
      const expectedArr = [5, 8, 10];
      const resultArr = squareRoots(originalArr);
      resultArr.forEach((result, index) => {
        expect(result).toBeCloseTo(expectedArr[index]);
      });
    });
  });

  //removeVowels
  describe("removeVowels", () => {
    test("Remove vowels from single word strings", () => {
      expect(removeVowels(["hello", "world"])).toEqual(["hll", "wrld"]);
    });

    test("Handle strings with mixed case vowels", () => {
      expect(removeVowels(["ApplE", "OrAngE"])).toEqual(["ppl", "rng"]);
    });

    test("Handle empty strings", () => {
      expect(removeVowels(["", "test", ""])).toEqual(["", "tst", ""]);
    });
    test("Handle strings with no vowels", () => {
      expect(removeVowels(["xyz", "qrst"])).toEqual(["xyz", "qrst"]);
    });
    test("Ensure original array remains unchanged", () => {
      const originalArr = ["hello", "world"];
      const duplicatedArr = [...originalArr];
      const transFormedArr = transformKeys(originalArr);
      //check equality of arr as well as refrence of both
      expect(duplicatedArr).toEqual(duplicatedArr);
      expect(duplicatedArr).not.toBe(transFormedArr);
    });

    test("Handle strings with all vowels", () => {
      expect(removeVowels(["aeiou", "AEIOU"])).toEqual(["", ""]);
    });
  });
});
