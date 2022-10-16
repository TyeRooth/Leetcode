// import solution from './first-solution';
import solution from './second-solution';

test('basic case', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    expect(solution(nums, k)).toStrictEqual([1, 2]);
});

test('array length one', () => {
    const nums = [1];
    const k = 1;
    expect(solution(nums, k)).toStrictEqual([1]);
});

test('less frequent first', () => {
    const nums = [1, 2, 2, 3, 3, 3];
    const k = [2];
    expect(solution(nums, k)).toStrictEqual([3, 2]);
});

test('frequency difference more than 1', () => {
    const nums = [1, 1, 1, 1, 2, 2, 3];
    const k = 2;
    expect(solution(nums, k)).toStrictEqual([1, 2]);
});

test('k > 3', () => {
    const nums = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    const k = 3;
    expect(solution(nums, k)).toStrictEqual([1, 2, 3]);
});

test('works with zeros', () => {
    const nums = [0, 0, 0, 1, 1, 2];
    const k = 2;
    expect(solution(nums, k)).toStrictEqual([0, 1]);
});

test('not sorted', () => {
    const nums = [2, 2, 2, 1, 1, 0];
    const k = 2;
    expect(solution(nums, k)).toStrictEqual([2, 1]);
});