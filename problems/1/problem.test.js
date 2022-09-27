// import twoSum from './first-solution';
import twoSum from './second-solution';

test('first case', () => {
    const nums = [2, 7, 11, 15];
    expect(twoSum(nums, 9)).toStrictEqual([0, 1]); 
});

test('second case', () => {
    const nums = [3, 2, 4];
    expect(twoSum(nums, 6)).toStrictEqual([1, 2]);
});

test('third case', () => {
    const nums = [3, 3];
    expect(twoSum(nums, 6)).toStrictEqual([0, 1]);
});