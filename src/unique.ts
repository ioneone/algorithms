/**
 * Counts the unique values in the array. There can be negative numbers in the
 * array, but it will always be sorted.
 * @param arr a sorted array of numbers
 */
export const countUniqueValues = (arr: number[]) => {
  let numUniqueValues = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      numUniqueValues++;
    }
  }

  return numUniqueValues;
};
