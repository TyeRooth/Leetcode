const checkForDuplicates = (nums) => {
    let pickedNumbers = {};
    for (let i = 0; i < nums.length; i++) {
        if(pickedNumbers[nums[i]]) {return true;}
        pickedNumbers[nums[i]] = true;
    };
    return false;
};

export default checkForDuplicates;