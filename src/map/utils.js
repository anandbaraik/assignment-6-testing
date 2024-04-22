export function transformKeys(obj) {
  return Object.keys(obj).map((key) => key.toUpperCase());
}

export function reverseStrings(arr) {
  return arr.map((str) => str.split("").reverse().join(""));
}

export function squareRoots(arr) {
  return arr.map((num) => Math.sqrt(num));
}

export function removeVowels(arr) {
  const vowels = ["a", "e", "i", "o", "u"];
  return arr.map((str) =>
    str
      .split("")
      .filter((char) => !vowels.includes(char.toLowerCase()))
      .join("")
  );
}
