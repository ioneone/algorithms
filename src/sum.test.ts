import { maxSumarraySum } from "./sum";

test("maxSumarraySum", () => {
  expect(maxSumarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  expect(maxSumarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  expect(maxSumarraySum([4, 2, 1, 6], 1)).toBe(6);
  expect(maxSumarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  expect(maxSumarraySum([], 4)).toBe(0);
});
