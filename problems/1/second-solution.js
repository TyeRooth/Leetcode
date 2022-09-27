const twoSum = (nums, target) => {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        // The issue I was running into is that 0 is falsy
        if (hashMap[remainder] !== undefined) {
            return [hashMap[remainder], i];
        }
        hashMap[nums[i]] = i;
    }
};

export default twoSum;