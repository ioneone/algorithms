import { validAnagram } from "./anagram";

test("validate anagram", () => {
  expect(validAnagram("", "")).toBe(true);
  expect(validAnagram("anagram", "nagaram")).toBe(true);
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
});

test("validate non-anagam", () => {
  expect(validAnagram("aaz", "zza")).toBe(false);
  expect(validAnagram("rat", "car")).toBe(false);
  expect(validAnagram("awesome", "awesom")).toBe(false);
});
