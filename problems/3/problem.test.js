// import solution from "./first-solution";
import solution from "./second-solution";

test('example 1', () => {
    const s = "abcabccbb";
    expect(solution(s)).toBe(3);
});

test('example 2', () => {
    const s = "bbbbb";
    expect(solution(s)).toBe(1);
});

test('example 3', () => {
    const s = "pwwkew";
    expect(solution(s)).toBe(3);
});

test('without alphanumeric characters', () => {
    const s = " & &";
    expect(solution(s)).toBe(2);
});

test('empty space should not count as character', () => {
    const s = " ";
    expect(solution(s)).toBe(1);
});

test('leetcode.com failure', () => {
    const s = "au";
    expect(solution(s)).toBe(2);
});