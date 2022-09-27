// import checkForDuplicates from './first-solution';
import checkForDuplicates from './second-solution';

test('returns true with duplicate numbers in array', () => {
    const nums = [1, 2, 3, 1];
    expect(checkForDuplicates(nums)).toBe(true);
});

test('returns false with no duplicates', () => {
    const nums = [1, 2, 3, 4];
    expect(checkForDuplicates(nums)).toBe(false);
});

test('returns true with mutliples of duplicates', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(checkForDuplicates(nums)).toBe(true);
})

