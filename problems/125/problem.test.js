// import validPalindrome from './first-solution';
import validPalindrome from './second-solution';

test('verifies palindrome with only alphanumeric characters', () => {
    const str = "racecar";
    expect(validPalindrome(str)).toBe(true);
});

test('verifies non-palindrome', () => {
    const str = "race a car";
    expect(validPalindrome(str)).toBe(false);
});

test('verifies palindrome with non-alpha characters', () => {
    const str = "A man, a plan, a canal: Panama";
    expect(validPalindrome(str)).toBe(true);
});

test('empty string is marked as a palindrome', () => {
    const str= " ";
    expect(validPalindrome(str)).toBe(true);
});

test('non-palindromic numbers', () => {
    const str = '1234';
    expect(validPalindrome(str)).toBe(false);
});

test('outlier', () => {
    const str = 'abb';
    expect(validPalindrome(str)).toBe(false);
})