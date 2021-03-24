const createFrequencyMap = (str: string) => {
  const freq: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = freq[str[i]] ? freq[str[i]] + 1 : 1;
  }
  return freq;
};

/**
 * Determine if the second string is an anagram of the first. An anagram is a
 * word, phrase, or name formed by rearranging the letters of another, such as
 * cinema, formed from iceman.
 *
 * @param str1 first string
 * @param str2 second string
 */
export const validAnagram = (str1: string, str2: string) => {
  const freqMap1 = createFrequencyMap(str1);
  const freqMap2 = createFrequencyMap(str2);

  const sameLength =
    Object.keys(freqMap1).length === Object.keys(freqMap2).length;
  const sameFreq = Object.keys(freqMap1).every(
    (key) => freqMap1[key] === freqMap2[key]
  );

  return sameLength && sameFreq;
};

/**
 * Given two integers, find out if the two numbers have the same
 * frequency of digits.
 * @param num1 first integer
 * @param num2 second integer
 */
export const sameFrequency = (num1: number, num2: number) => {
  return validAnagram(Math.abs(num1).toString(), Math.abs(num2).toString());
};
