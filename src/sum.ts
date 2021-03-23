/**
 * Calculate the sum of the array. If the array is empty, the sum is 0.
 * @param arr
 */
const sum = (arr: number[]) => {
  return arr.reduce((a, b) => a + b, 0);
};

/**
 * Calculate the maximum sum of `n` consecutive elements in the array.
 * @param arr an array of integers
 * @param n number of integers to sum
 */
export const maxSumarraySum = (arr: number[], n: number) => {
  if (arr.length === 0 || n <= 0) return 0;
  if (n > arr.length) return sum(arr);

  let currWindowSum = sum(arr.slice(0, n));
  let maxWindowSum = currWindowSum;
  for (
    let windowStartIdx = 1;
    windowStartIdx + n - 1 < arr.length;
    windowStartIdx++
  ) {
    const numberRemoved = arr[windowStartIdx - 1];
    const numberAdded = arr[windowStartIdx + n - 1];
    currWindowSum = currWindowSum - numberRemoved + numberAdded;
    maxWindowSum = Math.max(currWindowSum, maxWindowSum);
  }

  return maxWindowSum;
};
