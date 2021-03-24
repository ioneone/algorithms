import { validAnagram, sameFrequency } from "./frequency";

test("validAnagram", () => {
  expect(validAnagram("", "")).toBe(true);
  expect(validAnagram("anagram", "nagaram")).toBe(true);
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);

  expect(validAnagram("aaz", "zza")).toBe(false);
  expect(validAnagram("rat", "car")).toBe(false);
  expect(validAnagram("awesome", "awesom")).toBe(false);
});

test("sameFrequency", () => {
  expect(sameFrequency(182, 281)).toBe(true);
  expect(sameFrequency(3589578, 5879385)).toBe(true);

  expect(sameFrequency(34, 14)).toBe(false);
  expect(sameFrequency(22, 222)).toBe(false);
});
