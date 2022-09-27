// import validAnagram from './first-solution';
import validAnagram from './second-solution';

test('confirms anagram', () => {
    const s = "anagram";
    const t = "nagaram";
    expect(validAnagram(s, t)).toBe(true);    
});

test('confirms not anagram', () => {
    const s = "rat";
    const t = "car";
    expect(validAnagram(s, t)).toBe(false);
});

test('confirms false for strings of different length', () => {
    const s = "a";
    const t = "ab";
    expect(validAnagram(s, t)).toBe(false);
});