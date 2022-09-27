import groupAnagrams from './first-solution';

// I forgot that the array order matters wtih toStrictEqual
test('groups multiple words', () => {
    const strs = ["eat","tea","tan","ate","nat","bat"];
    expect(groupAnagrams(strs)).toStrictEqual([["eat","tea","ate"],["tan","nat"],["bat"]]);
});

test('no strings', () => {
    const strs = [""];
    expect(groupAnagrams(strs)).toStrictEqual([[""]]);
});

test('one string', () => {
    const strs = ["a"];
    expect(groupAnagrams(strs)).toStrictEqual([["a"]]);
});