// Solution does not work, faces runtime error when elements have same count
// Didn't realize that was part of the problem

const topKFrequentElements = (nums, k) => {
    let countHash = {};
    for (let i = 0; i < nums.length; i++) {
        if(countHash[nums[i]]) {
            countHash[nums[i]]++;
        }
        else {
            countHash[nums[i]] = 1;
        }
    }
    let freqArray = [];
    for (const element in countHash) {
        freqArray[countHash[element]] = [Number(element)];
    }
    let result = [];
    let i = nums.length;
    while(result.length < k) {
        if (freqArray[i] || freqArray[i] === 0) {
            result.push(freqArray[i][0]);
        }
        i--;
    }
    return result;
};

export default topKFrequentElements;