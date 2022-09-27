const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let remainingNums = nums.slice(i + 1);
        for (let j = 0; j < remainingNums.length; j++) {
            if (nums[i] + remainingNums[j] === target) {
                return [i, Number(j + i + 1)];
            }
        }
    }
};

export default twoSum;