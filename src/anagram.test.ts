import { validAnagram } from "./anagram";

test("validAnagram", () => {
  expect(validAnagram("", "")).toBe(true);
  expect(validAnagram("anagram", "nagaram")).toBe(true);
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);

  expect(validAnagram("aaz", "zza")).toBe(false);
  expect(validAnagram("rat", "car")).toBe(false);
  expect(validAnagram("awesome", "awesom")).toBe(false);
});
