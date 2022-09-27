const checkForDuplicates = (nums) => {
    let foundDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
        nums.slice(i + 1).includes(nums[i]) ? foundDuplicate = true : null;
        if (foundDuplicate) {break};
    };
    return foundDuplicate
};

export default checkForDuplicates;