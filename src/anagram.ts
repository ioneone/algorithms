/**
 * Determine if the second string is an anagram of the first. An anagram is a
 * word, phrase, or name formed by rearranging the letters of another, such as
 * cinema, formed from iceman.
 *
 * @param str1 first string
 * @param str2 second string
 */
export const validAnagram = (str1: string, str2: string) => {
  const getFreq = (str: string) => {
    const freq: { [key: string]: number } = {};
    for (let i = 0; i < str.length; i++) {
      freq[str[i]] = freq[str[i]] ? freq[str[i]] + 1 : 1;
    }
    return freq;
  };

  const freq1 = getFreq(str1);
  const freq2 = getFreq(str2);

  const sameLength = Object.keys(freq1).length === Object.keys(freq2).length;
  const sameFreq = Object.keys(freq1).every((key) => freq1[key] === freq2[key]);

  return sameLength && sameFreq;
};
