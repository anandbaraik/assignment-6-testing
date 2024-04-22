export const findMaxNumber = (arr) => {
  return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
};

export const countPositiveNumbers = (arr) => {
  return arr.reduce((count, curr) => (curr > 0 ? count + 1 : count), 0);
};

export const flattenNestedArrays = (arrays) => {
  return arrays.reduce(
    (flattened, currentArray) => flattened.concat(currentArray),
    []
  );
};

export const groupByProperty = (objects, property) => {
  if (typeof objects !== "object") return {};

  return objects.reduce((grouped, currentObject) => {
    const propValue = property === "" ? "" : currentObject[property];

    if (propValue === undefined) return {};

    if (!grouped[propValue]) {
      grouped[propValue] = [];
    }

    grouped[propValue].push(currentObject);
    return grouped;
  }, {});
};
