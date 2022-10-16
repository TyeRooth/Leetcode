// import solution from './first-solution';
import solution from './second-solution';

test('example 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(solution(nums, target)).toStrictEqual([1, 2]);
});

test('example 2', () => {
    const nums = [2, 3, 4];
    const target = 6;
    expect(solution(nums, target)).toStrictEqual([1, 3]);
});

test('example 3', () => {
    const nums = [-1, 0];
    const target = -1;
    expect(solution(nums, target)).toStrictEqual([1, 2]);
});